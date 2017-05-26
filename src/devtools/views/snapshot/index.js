import React from 'react'
import Inspector, { chromeLight } from 'react-inspector'
import css from './snapshot.css'

// https://github.com/xyc/react-inspector/blob/master/src/styles/themes/chromeLight.js
const THEME = { ...chromeLight, BASE_BACKGROUND_COLOR: 'transparent' }

class Snapshot extends React.Component {
  render() {
    const { data } = this.props

    return (
      <aside className={css.container}>
        <header className={css.header}>
          <h2 className={css.title}>
            State
          </h2>
        </header>
        <div className={css.body}>
          <Inspector data={data} theme={THEME} />
        </div>
      </aside>
    )
  }
}

export default Snapshot
