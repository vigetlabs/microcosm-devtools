import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Layout from '../views/layout'

class Application extends Presenter {
  getModel() {
    return {
      history: state => state.history
    }
  }

  render() {
    const { history } = this.model

    return <Layout history={history} />
  }
}

export default Application
