import React from 'react'
import ActionRegion from './action-region'
import Presenter from 'microcosm/addons/presenter'
import Item from './item'
import StickyBar from './sticky-bar'
import css from './left-rail.css'

class ActionList extends Presenter {
  static defaultProps = {
    open: true
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

  render() {
    const { open } = this.props
    const { history } = this.model

    if (!open) {
      return null
    }

    return (
      <div className={css.container}>
        <div className={css.list}>
          {history.list.map(this.renderItem, this).reverse()}
        </div>

        <StickyBar />
      </div>
    )
  }
}

export default ActionList
