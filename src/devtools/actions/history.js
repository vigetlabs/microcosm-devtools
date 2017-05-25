export function updateHistory(history) {
  return action => {
    let payload = {}

    try {
      payload = JSON.parse(history)
    } catch (error) {
      action.reject(error)
    }

    action.resolve(payload)
  }
}
