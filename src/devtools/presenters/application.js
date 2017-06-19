import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Layout from '../views/layout'

class Application extends Presenter {
  getModel() {
    return {
      focused: state => state.focused,
      history: state => state.history,
      snapshot: state => state.snapshot
    }
  }

  render() {
    const { focused, history, snapshot } = this.model

    return <Layout focused={focused} history={history} snapshot={snapshot} />
  }
}

export default Application
