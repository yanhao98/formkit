import { execSync } from 'child_process'
import fs from 'fs'
import {
  isRunningInVSCode,
  packTgz,
  patchVersion,
  uploadTgz,
} from './utils.mjs'

const packageCwd = process.cwd() + '/packages/vue'

function build() {
  let command = 'pnpm run build all'
  if (isRunningInVSCode()) {
    command = 'pnpm run build vue'
  }
  console.debug('[build]', `command :>> `, command)
  execSync(command, { stdio: 'inherit' })
}

async function generateNewJson(pkgFile = `${packageCwd}/package.json`) {
  execSync(`git checkout ${pkgFile}`, { stdio: 'inherit' })
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'))
  return {
    name: pkg.name,
    version: patchVersion(pkg.version),
    type: pkg.type,
    main: pkg.main,
    types: pkg.types,
    exports: pkg.exports,
    dependencies: pkg.dependencies,
  }
}

const command = process.argv[2]
switch (command) {
  case 'build':
    build()
    break
  case 'pack':
    packTgz(packageCwd, await generateNewJson())
    break
  case 'upload':
    uploadTgz(packageCwd, 'npm-hosted')
    break
  default:
    console.log('Unknown command')
}
