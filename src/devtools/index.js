import DOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import Repo from './repo'
import Application from './presenters/application'

import './style.css'

export function connectBridge(bridge) {
  let repo = new Repo({ bridge })
  let el = document.getElementById('app')

  function render() {
    DOM.render(<AppContainer><Application repo={repo} /></AppContainer>, el)
  }

  render()

  if (module.hot) {
    module.hot.accept(render)
  }
}
