import { installHook, hasHook } from 'src/backend/hook'

if (hasHook(window) === false) {
  installHook(window)
} else {
  console.info('Hook exists! Using existing hook.')
}
