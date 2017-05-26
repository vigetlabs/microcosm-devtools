import React from 'react'
import css from './actionList.css'
import humanize from '../../utils/humanize'
import ActionButton from 'microcosm/addons/action-button'

class ActionListItem extends React.Component {
  render() {
    let { action } = this.props

    return (
      <div key={action.id} className={css.item}>
        <span className={action.disabled ? css.disabled : css.enabled}>
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
