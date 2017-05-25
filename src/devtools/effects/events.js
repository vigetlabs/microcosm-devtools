/**
 * @fileoverview Handle all bridge communication through this effect
 */

import { updateHistory } from '../actions/history'

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
  }

  teardown () {
    this.bridge.removeAllListeners()
  }
}

export default Events
