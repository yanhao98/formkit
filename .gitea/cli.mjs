import fs, { writeFileSync } from 'fs'
import { execSync } from 'child_process'

const packCwd = 'packages/vue'
const pkgFile = `${packCwd}/package.json`

async function pkg() {
  execSync(`git checkout ${pkgFile}`, { stdio: 'inherit' })
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'))
  let newVersion = execSync('npm version patch --no-git-tag-version', {
    encoding: 'utf-8',
    cwd: packCwd,
  })
    .replace(/^v/, '')
    .trim()
  pkg.version = `${newVersion}-fix.${new Date()
    .toISOString()
    .replace(/[^0-9]/g, '')
    .slice(0, 12)}`
  return {
    newJson: pkg,
  }
}

function build() {
  execSync('pnpm run build all', { stdio: 'inherit' })
}

async function pack() {
  execSync('rm -rf *.tgz', { stdio: 'inherit', cwd: packCwd })
  const { newJson } = await pkg()
  writeFileSync(pkgFile, JSON.stringify(newJson, null, 2))
  execSync('npm pack', { stdio: 'inherit', cwd: packCwd })
  execSync(`git checkout ${pkgFile}`, { stdio: 'inherit' })
}

function upload() {
  const tgzName = fs.readdirSync(packCwd).find((f) => f.endsWith('.tgz'))
  const myHeaders = new Headers()

  myHeaders.append('Authorization', `Basic ${process.env.NEXUS_AUTH}`)

  const formdata = new FormData()

  formdata.append(
    'npm.asset',
    new File([fs.readFileSync(`${packCwd}/${tgzName}`)], tgzName)
  )

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  }

  fetch(
    'https://nexus.oo1.dev/service/rest/v1/components?repository=npm-hosted',
    requestOptions
  ).then((response) => console.debug(`response :>> `, response))
}

const command = process.argv[2]

switch (command) {
  case 'build':
    build()
    break
  case 'pack':
    pack()
    break
  case 'upload':
    upload()
    break
  default:
    console.log('Unknown command')
}
