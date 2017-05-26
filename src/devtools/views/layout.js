import React from 'react'
import Snapshot from './snapshot'
import Tree from './tree'
import Header from './header'
import css from './layout.css'

class Layout extends React.Component {
  state = {
    leftRail: true
  }

  onLeftRail = event => {
    this.setState({ leftRail: !this.state.leftRail })
  }

  renderLeftRail() {
    if (!this.state.leftRail) {
      return null
    }

    return (
      <div className={css.leftRail}>
        <Snapshot data={this.props.snapshot} />
      </div>
    )
  }

  render() {
    const { history, snapshot } = this.props
    const { leftRail } = this.state

    let status = `${history.size} Actions`

    return (
      <div className={css.container}>
        <Header status={status} leftRail={leftRail} onLeftRail={this.onLeftRail} />

        <main className={css.body}>
          {this.renderLeftRail()}

          <Tree history={history} />
        </main>
      </div>
    )
  }
}

export default Layout
