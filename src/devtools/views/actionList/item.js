import React from 'react'
import classNames from 'classnames'
import ActionButton from 'microcosm/addons/action-button'
import humanize from '../../utils/humanize'
import css from './actionList.css'

class ActionListItem extends React.Component {
  itemClass() {
    let { action, head } = this.props

    return classNames({
      [css.head]: action.id == head,
      [css.disabled]: action.disabled
    })
  }

  render() {
    let { action } = this.props

    return (
      <div className={css.item}>
        <span className={this.itemClass()}>
          {humanize(action.type)}
        </span>

        <span className={css.actions}>
          <ActionButton
            action="checkout"
            value={action.id}
            tag="span"
            className={css.action}
          >
            checkout
          </ActionButton>

          <ActionButton
            action="toggle"
            value={action.id}
            tag="span"
            className={css.action}
          >
            toggle
          </ActionButton>

          <ActionButton
            action="remove"
            value={action.id}
            tag="span"
            className={css.action}
          >
            remove
          </ActionButton>
        </span>
      </div>
    )
  }
}

export default ActionListItem
