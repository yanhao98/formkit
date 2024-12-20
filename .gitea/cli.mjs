import { execSync } from 'child_process'
import { isRunningInVSCode, packTgz, uploadTgz } from './utils.mjs'

const packageCwd = process.cwd() + '/packages/vue'

function build() {
  let command = 'pnpm run build all'
  if (isRunningInVSCode()) {
    command = 'pnpm run build vue'
  }
  console.debug('[build]', `command :>> `, command)
  execSync(command, { stdio: 'inherit' })
}

const command = process.argv[2]

switch (command) {
  case 'build':
    build()
    break
  case 'pack':
    packTgz(packageCwd)
    break
  case 'upload':
    uploadTgz(packageCwd, 'npm-hosted')
    break
  default:
    console.log('Unknown command')
}
