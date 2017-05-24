import React from 'react'
import DOM from 'react-dom'
import Microcosm, { update } from 'microcosm'
import Presenter from 'microcosm/addons/presenter'
import ActionButton from 'microcosm/addons/action-button'

const ADD = 'ADD'
const SUB = 'SUBTRACT'

class Repo extends Microcosm {
  setup() {
    this.addDomain('count', {
      getInitialState() {
        return 0
      },

      add(count, n) {
        return count + n
      },

      subtract(count, n) {
        return count - n
      },

      register() {
        return {
          [ADD]: this.add,
          [SUB]: this.subtract
        }
      }
    })
  }
}

class App extends Presenter {
  getModel() {
    return {
      count: state => state.count
    }
  }

  render() {
    return (
      <main>
        <h1>Microcosm Dev Tools Test Bed</h1>
        <p>Count: {this.model.count}</p>
        <footer>
          <ActionButton action={SUB} value={1}>Down</ActionButton>
          <ActionButton action={ADD} value={1}>Up</ActionButton>
        </footer>
      </main>
    )
  }
}

export default function render(el) {
  let repo = new Repo({ maxHistory: Infinity })

  DOM.render(<App repo={repo} />, document.querySelector(el))

  return repo
}
