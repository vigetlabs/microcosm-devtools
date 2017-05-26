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

      // cache current action
      parent = cursor

      // set the cursor to the action's next child
      cursor = parent.children.find(child => {
        return child.id === cursor.next
      })

      // if no next child was found but children exist, pick one
      if (!cursor && parent.children.length) {
        cursor = parent.children[0]
      }
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
