import boot from './boot'

let repo = boot('#app')

repo.seed()

let hook = window.__MICROCOSM_DEVTOOLS_GLOBAL_HOOK__

hook.emit('init', repo)
