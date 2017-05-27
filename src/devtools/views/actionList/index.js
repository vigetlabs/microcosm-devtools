import React from 'react'
import ActionButton from 'microcosm/addons/action-button'
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
        <div className={css.stickyBar}>
          <ActionButton className={css.stickyItem} action="revert" tag="div">
            Revert
          </ActionButton>
          <ActionButton className={css.stickyItem} action="commit" tag="div">
            Commit
          </ActionButton>
        </div>
        <div className={css.list}>
          {list.map(this.renderItem, this)}
        </div>
      </div>
    )
  }
}

export default ActionList
