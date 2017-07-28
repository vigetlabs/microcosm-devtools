import React from 'react'
import ActionRegion from '../actionRegion'
import Item from './item'
import StickyBar from './stickyBar'
import css from './actionList.css'

class ActionList extends React.Component {
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
    let { list } = this.props.history

    let reverse = list.concat().reverse()

    return (
      <div className={css.container}>
        <div className={css.list}>
          {reverse.map(this.renderItem, this)}
        </div>
        <StickyBar />
      </div>
    )
  }
}

export default ActionList
