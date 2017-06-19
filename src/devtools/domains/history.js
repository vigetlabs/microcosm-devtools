import { updateHistory } from '../actions/history'

class History {
  getInitialState() {
    return {
      size: 0,
      head: null,
      root: null,
      tree: {},
      list: [],
      focused: null
    }
  }

  reset(_old, newHistory) {
    let focused = newHistory.head

    let list = []
    let cursor = newHistory.tree
    let parent = cursor

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

    return { ...newHistory, list, focused }
  }

  focus(_old, id) {
    let focused = null
    if (_old.focused === id) {
      focused = _old.head
    } else {
      focused = id
    }

    return { ..._old, focused }
  }

  register() {
    return {
      [updateHistory]: this.reset,
      ['detail']: this.focus
    }
  }
}

export default History
