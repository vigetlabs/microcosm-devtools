import React from 'react'

function fill({ status }) {
  switch (status) {
    case 'inactive':
      return '#ccc'
    case 'open':
      return '#e39'
    case 'update':
      return '#fe4'
    case 'resolve':
      return '#7f9'
    case 'reject':
      return '#f55'
    case 'cancelled':
      return '#445'
  }
}

export default function Node({ action, x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r="10" opacity="0" />
      <circle r="3" fill={fill(action)} />

      <text y="5" x="8" fontSize="11" textAnchor="start" fill="white" transform="rotate(45)">
        {action.type}
      </text>
    </g>
  )
}

Node.defaultProps = {
  x: 0,
  y: 0
}
