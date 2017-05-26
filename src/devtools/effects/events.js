/**
 * @fileoverview Handle all bridge communication through this effect
 */

import { updateHistory } from '../actions/history'
import { updateSnapshot } from '../actions/snapshot'

class Events {
  setup(repo, { bridge }) {
    this.bridge = bridge

    bridge.once('ready', version => {
      console.log('Dev tools are ready.')
    })

    bridge.once('proxy-fail', () => {
      console.error('Proxy injection failed.')
    })

    bridge.on('history:reconcile', repo.prepare(updateHistory))
    bridge.on('history:release', repo.prepare(updateSnapshot))
  }

  teardown() {
    this.bridge.removeAllListeners()
  }

  toggle(repo, id) {
    this.bridge.send(`toggle:${id}`)
  }

  remove(repo, id) {
    this.bridge.send(`remove:${id}`)
  }

  checkout(repo, id) {
    this.bridge.send(`checkout:${id}`)
  }

  register() {
    return {
      ['toggle']: this.toggle,
      ['remove']: this.remove,
      ['checkout']: this.checkout
    }
  }
}

export default Events
