import { execSync } from 'child_process'
import fs, { writeFileSync } from 'fs'

// 1.6.9 -> 1.6.10
function patchVersion(version) {
  const versionArr = version.split('.')
  const patch = parseInt(versionArr.pop()) + 1
  versionArr.push(patch)
  return versionArr.join('.')
}

async function generateNewJson(pkgFile) {
  execSync(`git checkout ${pkgFile}`, { stdio: 'inherit' })
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'))
  let version = patchVersion(pkg.version)
  version += '-fix'
  version += `.${new Date()
    .toISOString()
    .replace(/[^0-9]/g, '')
    .slice(0, 12)}`
  return {
    newJson: {
      name: pkg.name,
      version,
      type: pkg.type,
      main: pkg.main,
      types: pkg.types,
      exports: pkg.exports,
      dependencies: pkg.dependencies,
    },
  }
}

export function isRunningInVSCode() {
  return (
    process.env.TERM_PROGRAM === 'vscode' ||
    typeof process.env.VSCODE_INJECTION !== 'undefined' ||
    typeof process.env.VSCODE_GIT_IPC_HANDLE !== 'undefined'
  )
}

export async function packTgz(cwd) {
  const pkgFile = cwd + '/package.json'
  execSync('rm -rf *.tgz', { stdio: 'inherit', cwd })
  const { newJson } = await generateNewJson(pkgFile)
  writeFileSync(pkgFile, JSON.stringify(newJson, null, 2))
  const tgz = execSync('npm pack', { cwd, encoding: 'utf-8' })
  console.log('tgz :>> ', `${cwd}/${tgz.trim()}`)
  execSync(`git checkout ${pkgFile}`, { stdio: 'inherit' })
}

export function uploadTgz(cwd, repository) {
  const myHeaders = new Headers()

  myHeaders.append('Authorization', `Basic ${process.env.NEXUS_AUTH}`)

  const formdata = new FormData()

  const tgzName = fs.readdirSync(cwd).find((f) => f.endsWith('.tgz'))
  formdata.append(
    'npm.asset',
    new File([fs.readFileSync(`${cwd}/${tgzName}`)], tgzName)
  )

  fetch(
    'https://nexus.oo1.dev/service/rest/v1/components?repository=' + repository,
    {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }
  ).then((response) => console.debug(`response :>> `, response))
}
