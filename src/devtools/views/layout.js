import React from 'react'
import Snapshot from './snapshot'
import Tree from './tree'
import ActionList from './actionList'
import Header from './header'
import css from './layout.css'

class Layout extends React.Component {
  state = {
    leftRail: true,
    rightRail: true
  }

  onLeftRail = event => {
    this.setState({ leftRail: !this.state.leftRail })
  }

  onRightRail = event => {
    this.setState({ rightRail: !this.state.rightRail })
  }

  renderLeftRail() {
    if (!this.state.leftRail) {
      return null
    }

    return (
      <div className={css.rail}>
        <ActionList history={this.props.history} />
      </div>
    )
  }

  renderRightRail() {
    if (!this.state.rightRail) {
      return null
    }

    return (
      <div className={css.rail}>
        <Snapshot data={this.props.snapshot} />
      </div>
    )
  }

  render() {
    const { history } = this.props
    const { leftRail, rightRail } = this.state

    let status = `${history.size} Actions`

    return (
      <div className={css.container}>
        <Header
          status={status}
          leftRail={leftRail}
          onLeftRail={this.onLeftRail}
          rightRail={rightRail}
          onRightRail={this.onRightRail}
        />

        <main className={css.body}>
          {this.renderLeftRail()}

          <Tree history={history} />

          {this.renderRightRail()}
        </main>
      </div>
    )
  }
}

export default Layout
