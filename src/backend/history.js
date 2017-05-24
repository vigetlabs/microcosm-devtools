export function trackHistory(hook, bridge) {
  const repo = hook.repo
  const getSnapshot = () => JSON.stringify(repo.history)

  // Deal with multiple backend injections
  hook.off('history:reconcile')

  // application -> devtool
  hook.on('history:reconcile', mutation => {
    bridge.send('history:reconcile', getSnapshot())
  })
}
