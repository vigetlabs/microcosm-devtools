import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import DataView from './data-view'
import css from './right-rail.css'

class ActionFocus extends Presenter {
  render() {
    const { action } = this.props

    if (!action) {
      return null
    }

    return (
      <section>
        <header className={css.header}>
          <h2 className={css.title}>Action</h2>
        </header>

        <table className={css.table}>
          <tr>
            <th>Type</th>
            <td>
              {action.type.split('.', 2)[0]}
            </td>
          </tr>
          <tr>
            <th>Status</th>
            <td>
              {action.status}
            </td>
          </tr>
          <tr>
            <th>Payload</th>
            <td>
              <DataView data={action.payload} />
            </td>
          </tr>
        </table>

        <ul className={css.revisions}>
          {action.revisions
            .map((entry, i) =>
              <li key={i}>
                <b>{new Date(entry.timestamp).toLocaleTimeString()}</b>:{' '}
                {entry.status}
                <div className={css.payload}>
                  <DataView data={entry.payload} />
                </div>
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
