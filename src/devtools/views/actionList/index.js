import React from 'react'
import Item from './item'
import css from './actionList.css'

class ActionList extends React.Component {
  renderItem(action) {
    let { head } = this.props.history

    return <Item action={action} head={head} key={action.id} />
  }

  render() {
    let { list } = this.props.history

    return (
      <div className={css.container}>
        {list.map(this.renderItem, this)}
      </div>
    )
  }
}

export default ActionList
