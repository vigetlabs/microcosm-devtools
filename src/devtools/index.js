import DOM from 'react-dom'
import React from 'react'
import Repo from './repo'
import Application from './presenters/application'

import './style.css'

export function connectBridge(bridge) {
  let repo = new Repo({ bridge })
  let el = document.getElementById('app')

  DOM.render(<Application repo={repo} />, el)
}
