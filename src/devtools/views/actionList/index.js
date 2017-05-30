import React from 'react'
import Item from './item'
import StickyBar from './stickyBar'
import css from './actionList.css'

class ActionList extends React.Component {
  renderItem(action) {
    let { head } = this.props.history

    return <Item action={action} head={head} key={action.id} />
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
