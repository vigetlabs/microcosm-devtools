import React from 'react'
import css from './actionList.css'
import Item from './item'

class ActionList extends React.Component {
  render() {
    let { list, head } = this.props.history

    return (
      <div className={css.container}>
        {list.map(action => (
          <Item action={action} head={head} key={action.id} />
        ))}
      </div>
    )
  }
}

export default ActionList
