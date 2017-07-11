import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import ActionFocus from './action-focus'
import DataView from './data-view'
import css from './right-rail.css'

class RightRail extends Presenter {
  static defaultProps = {
    open: true
  }

  getModel() {
    return {
      snapshot: state => state.snapshot,
      focused: state =>
        state.history.list.find(action => action.id == state.history.focused)
    }
  }

  render() {
    const { open } = this.props
    const { snapshot, focused } = this.model

    if (!open) {
      return null
    }

    return (
      <aside className={css.container}>
        <section>
          <header className={css.header}>
            <h2 className={css.title}>State</h2>
          </header>
          <div className={css.body}>
            <DataView data={snapshot} />
          </div>
        </section>

        <ActionFocus action={focused} />
      </aside>
    )
  }
}

export default RightRail
