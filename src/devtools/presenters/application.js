import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Tree from '../views/tree'

class Application extends Presenter {
  getModel() {
    return {
      history: state => state.history
    }
  }

  render() {
    const { history } = this.model

    return <Tree history={history} />
  }
}

export default Application
