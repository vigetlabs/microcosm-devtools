import React from 'react'
import ActionButton from 'microcosm/addons/action-button'
import css from './stickyBar.css'

export default function StickyBar() {
  return (
    <div className={css.container}>
      <ActionButton className={css.action} action="commit" tag="div">
        Commit
      </ActionButton>

      <ActionButton className={css.action} action="revert" tag="div">
        Revert
      </ActionButton>
    </div>
  )
}
