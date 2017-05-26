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

  reset(_old, newHistory) {
    let list = []
    let cursor = newHistory.tree

    while (cursor) {
      list.push(cursor)
      cursor = cursor.children.find(child => {
        return child.id === cursor.next
      })
    }

    return { ...newHistory, list }
  }

  register() {
    return {
      [updateHistory]: this.reset
    }
  }
}

export default History
