import React from 'react'
import classNames from 'classnames'
import ActionButton from 'microcosm/addons/action-button'
import humanize from '../../utils/humanize'
import css from './actionList.css'

class ActionListItem extends React.Component {
  itemClass() {
    let { action, head } = this.props

    return classNames(css.item, {
      [css.head]: action.id == head,
      [css.disabled]: action.disabled
    })
  }

  render() {
    let { action } = this.props

    return (
      <div className={this.itemClass()}>
        <span>
          {humanize(action.type)}
        </span>

        <span className={css.actions}>
          <ActionButton
            action="checkout"
            value={action.id}
            className={css.checkout}
          >
            <span>checkout</span>
          </ActionButton>

          <ActionButton
            action="toggle"
            value={action.id}
            className={action.disabled ? css.show : css.hide}
          >
            <span>{action.disabled ? 'enable' : 'disable'}</span>
          </ActionButton>

          <ActionButton
            action="remove"
            value={action.id}
            className={css.remove}
          >
            <span>remove</span>
          </ActionButton>
        </span>
      </div>
    )
  }
}

export default ActionListItem
