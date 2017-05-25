export function trackHistory(hook, bridge) {
  const repo = hook.repo
  const history = repo.history

  history.on('append', action => {
    bridge.on(`toggle:${action.id}`, () => history.toggle(action))
    bridge.on(`remove:${action.id}`, () => history.remove(action))
    bridge.on(`checkout:${action.id}`, () => history.checkout(action))
  })

  history.on('remove', action => {
    bridge.removeAllListeners(`toggle:${action.id}`)
    bridge.removeAllListeners(`remove:${action.id}`)
    bridge.removeAllListeners(`checkoute:${action.id}`)
  })

  history.on('reconcile', function() {
    bridge.send('history:reconcile', JSON.stringify(history))
  })

  history.on('release', function() {
    bridge.send('history:release', JSON.stringify(repo.state))
  })

  // Force a reconciliation
  history.checkout()
}
