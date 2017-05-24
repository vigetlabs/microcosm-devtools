import { initBackend } from 'src/backend'
import Bridge from 'src/bridge'

const bridge = new Bridge({
  listen(fn) {
    window.addEventListener('message', evt => fn(evt.data))
  },
  send(data) {
    let tag = 'backend - ' + data.event

    console.groupCollapsed(tag)
    console.log('payload - ', data.payload)
    window.parent.postMessage(data, '*')
    console.groupEnd(tag)
  }
})

initBackend(bridge)
