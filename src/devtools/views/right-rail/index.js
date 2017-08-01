import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import ActionFocus from './action-focus'
import DataView from './data-view'
import css from './right-rail.css'

let startX
let startWidth

class RightRail extends Presenter {
  static defaultProps = {
    open: true
  }

  state = {
    paneWidth: 0.25 * window.innerWidth
  }

  getModel() {
    return {
      snapshot: state => state.snapshot,
      focused: state =>
        state.history.list.find(action => action.id == state.history.focused)
    }
  }

  initDrag = e => {
    startX = e.clientX
    startWidth = this.state.paneWidth

    document.documentElement.addEventListener('mousemove', this.onDrag, false)
    document.documentElement.addEventListener('mouseup', this.stopDrag, false)
  }

  onDrag = e => {
    this.setState({
      paneWidth: startWidth - (e.clientX - startX)
    })
  }

  stopDrag = e => {
    document.documentElement.removeEventListener(
      'mousemove',
      this.onDrag,
      false
    )
    document.documentElement.removeEventListener(
      'mouseup',
      this.stopDrag,
      false
    )
  }

  render() {
    const { open } = this.props
    const { snapshot, focused } = this.model
    const { paneWidth } = this.state

    if (!open) {
      return null
    }

    return (
      <aside className={css.container} style={{ width: paneWidth + 'px' }}>
        <div className={css.resizer} onMouseDown={this.initDrag} />

        <section>
          <header className={css.header}>
            <h2 className={css.title}>State</h2>
          </header>
          <div className={css.well}>
            <DataView data={snapshot} hideRoot />
          </div>
        </section>

        <ActionFocus action={focused} />
      </aside>
    )
  }
}

export default RightRail
