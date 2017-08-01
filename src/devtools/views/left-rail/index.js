import React from 'react'
import ActionRegion from './action-region'
import Presenter from 'microcosm/addons/presenter'
import Item from './item'
import StickyBar from './sticky-bar'
import css from './left-rail.css'

let startX
let startWidth

class ActionList extends Presenter {
  static defaultProps = {
    open: true
  }

  state = {
    paneWidth: 0.25 * window.innerWidth
  }

  getModel() {
    return {
      history: state => state.history
    }
  }

  renderItem(action) {
    let { focused, head } = this.model.history

    let isFocused = focused === action.id
    let payload = isFocused ? head : action.id

    return (
      <ActionRegion key={action.id} action="detail" payload={payload}>
        <Item head={head} action={action} isFocused={isFocused} />
      </ActionRegion>
    )
  }

  initDrag = e => {
    startX = e.clientX
    startWidth = this.state.paneWidth

    document.documentElement.addEventListener('mousemove', this.onDrag, false)
    document.documentElement.addEventListener('mouseup', this.stopDrag, false)
  }

  onDrag = e => {
    this.setState({
      paneWidth: startWidth + (e.clientX - startX)
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
    const { history } = this.model
    const { paneWidth } = this.state

    if (!open) {
      return null
    }

    return (
      <div className={css.container} style={{ width: paneWidth + 'px' }}>
        <div className={css.list}>
          {history.list.map(this.renderItem, this).reverse()}
        </div>

        <StickyBar />
        <div className={css.resizer} onMouseDown={this.initDrag} />
      </div>
    )
  }
}

export default ActionList
