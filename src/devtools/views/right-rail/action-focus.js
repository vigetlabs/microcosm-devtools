import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import DataView from './data-view'
import css from './right-rail.css'

class ActionFocus extends Presenter {
  render() {
    const { action } = this.props

    if (!action) {
      return this.renderEmpty()
    }

    return (
      <section>
        <header className={css.header}>
          <h2 className={css.title}>Action</h2>
        </header>

        <ul className={css.revisions}>
          {action.revisions
            .map((entry, i) =>
              <li key={i}>
                <div className={css.revision}>
                  <b>{entry.status}</b> at{' '}
                  {new Date(entry.timestamp).toLocaleTimeString()}
                </div>

                <DataView data={{ payload: entry.payload }} hideRoot />
              </li>
            )
            .reverse()}
        </ul>
      </section>
    )
  }

  renderEmpty() {
    return (
      <section>
        <header className={css.header}>
          <h2 className={css.title}>Action</h2>
        </header>
        <div className={css.body}>
          <p>No action selected.</p>
        </div>
      </section>
    )
  }
}

export default ActionFocus
