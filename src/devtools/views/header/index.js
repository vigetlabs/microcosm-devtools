import React from 'react'
import ToggleLeftRail from './toggle-left-rail'
import css from './header.css'

class Header extends React.Component {
  render() {
    const { status, leftRail, onLeftRail } = this.props

    return (
      <header className={css.header}>
        <span className={css.status}>
          {status}
        </span>
        <ToggleLeftRail active={leftRail} onClick={onLeftRail} />
      </header>
    )
  }
}

export default Header
