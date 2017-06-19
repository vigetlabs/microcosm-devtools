import React from 'react'
import withSend from 'microcosm/addons/with-send'
import Item from './item'
import StickyBar from './stickyBar'
import css from './actionList.css'

const ItemWrapper = withSend(function({ action, isFocused, head, send }) {
  return (
    <Item
      action={action}
      isFocused={isFocused}
      head={head}
      key={action.id}
      onClick={() => send('detail', action.id)}
    />
  )
})

class ActionList extends React.Component {
  renderItem(action) {
    let { head } = this.props.history

    return (
      <ItemWrapper
        action={action}
        isFocused={this.props.focused === action.id}
        head={head}
        key={action.id}
      />
    )
  }

  render() {
    let { list } = this.props.history

    let reverse = list.concat().reverse()

    return (
      <div className={css.container}>
        <StickyBar />

        <div className={css.list}>
          {reverse.map(this.renderItem, this)}
        </div>
      </div>
    )
  }
}

export default ActionList
