import { updateHistory } from '../actions/history'

class History {
  getInitialState() {
    return {
      size: 0,
      head: null,
      root: null,
      tree: {},
      list: []
    }
  }

  reset(_old, next) {
    return next
  }

  register() {
    return {
      [updateHistory]: this.reset
    }
  }
}

export default History
