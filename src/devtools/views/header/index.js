import React from 'react'
import ToggleLeftRail from './toggle-left-rail'
import ToggleRightRail from './toggle-right-rail'
import css from './header.css'

class Header extends React.Component {
  static defaultProps = {
    rightRail: true,
    leftRail: true
  }

  render() {
    const { status, leftRail, onLeftRail, rightRail, onRightRail } = this.props

    return (
      <header className={css.header}>
        <span className={css.status}>
          {status}
        </span>
        <ToggleLeftRail active={leftRail} onClick={onLeftRail} />
        <ToggleRightRail active={rightRail} onClick={onRightRail} />
      </header>
    )
  }
}

export default Header
