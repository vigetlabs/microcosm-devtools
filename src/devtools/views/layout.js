import React from 'react'
import Tree from './tree'
import JSONTree from 'react-json-tree'

class Layout extends React.Component {
  render() {
    const { history, snapshot } = this.props

    return (
      <div className="app-container">
        <header className="app-header">
          Microcosm Debugger
        </header>

        <main className="app-main">
          <Tree history={history} />
          <JSONTree data={snapshot} />
        </main>
      </div>
    )
  }
}

export default Layout
