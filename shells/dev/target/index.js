import boot from './boot'

let repo = boot('#app')

let hook = window.__MICROCOSM_DEVTOOLS_GLOBAL_HOOK__

hook.repo = repo

hook.emit('init', repo)
