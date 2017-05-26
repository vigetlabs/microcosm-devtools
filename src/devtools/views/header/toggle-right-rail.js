import React from 'react'
import css from './header.css'

export default function ToggleRightRail({ onClick, active }) {
  let color = active ? '#03A9F4' : '#aaa'

  return (
    <button className={css.toggle} onClick={onClick}>
      <svg width="22" height="16">
        <title>Open Right Rail</title>
        <g shapeRendering="crispEdges" stroke={color} fill={color}>
          <rect
            x="2"
            y="2"
            width="18"
            height="12"
            fill="none"
            strokeWidth="1"
          />
          <rect x="15" y="4" width="3" height="7" stroke="none" />
        </g>
      </svg>
    </button>
  )
}
