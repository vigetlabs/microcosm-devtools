import DOM from 'react-dom'
import React from 'react'
import Tree from './tree'

import './style.css'

export function initDevTools(shell) {
  initApp(shell)

  shell.onReload(() => {
    if (app) {
      DOM.unmountComponentAtNode('app')
    }

    window.bridge.removeAllListeners()

    initApp(shell)
  })
}

function initApp(shell) {
  shell.connect(bridge => {
    window.bridge = bridge

    bridge.once('ready', version => {
      console.log('Dev tools are ready.')
    })

    bridge.once('proxy-fail', () => {
      console.error('Proxy injection failed.')
    })

    bridge.on('history:reconcile', function(history) {
      DOM.render(
        <Tree history={JSON.parse(history)} />,
        document.getElementById('app')
      )
    })
  })
}
