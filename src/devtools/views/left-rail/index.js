import React from 'react'
import ActionRegion from '../actionRegion'
import Item from './item'
import StickyBar from './stickyBar'
import css from './left-rail.css'

class LeftRail extends React.Component {
  static defaultProps = {
    className: '',
    open: true
  }

  renderItem(action) {
    let { focused, head } = this.props.history

    let isFocused = focused === action.id
    let payload = isFocused ? head : action.id

    return (
      <ActionRegion key={action.id} action="detail" payload={payload}>
        <Item head={head} action={action} isFocused={isFocused} />
      </ActionRegion>
    )
  }

  render() {
    const { history, open } = this.props
    const { list } = history

    if (!open) {
      return null
    }

    let reverse = list.concat().reverse()

    return (
      <aside className={css.container}>
        <StickyBar />

        <div className={css.list}>
          {reverse.map(this.renderItem, this)}
        </div>
      </aside>
    )
  }
}

export default LeftRail
