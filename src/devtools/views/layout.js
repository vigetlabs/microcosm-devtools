import React from 'react'
import Tree from './tree'

class Layout extends React.Component {
  render() {
    const { history } = this.props

    return (
      <div className="app-container">
        <header className="app-header">
          Microcosm Debugger
        </header>

        <main className="app-main">
          <Tree history={history} />
        </main>
      </div>
    )
  }
}

export default Layout
