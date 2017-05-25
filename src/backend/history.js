export function trackHistory(hook, bridge) {
  const repo = hook.repo

  repo.history.on('reconcile', function() {
    bridge.send('history:reconcile', JSON.stringify(repo.history))
  })

  repo.history.on('release', function() {
    bridge.send('history:release', JSON.stringify(repo.state))
  })
}
