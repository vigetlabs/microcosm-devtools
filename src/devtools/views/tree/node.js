import React from 'react'

function fill({ status }) {
  switch (status) {
    case 'inactive':
      return '#ccc'
    case 'open':
      return '#fe4'
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

export default function Node({ action, x, y, index }) {
  let rotation = index % 2 ? 45 : -45

  return (
    <g transform={`translate(${x},${y})`}>
      <circle r="10" opacity="0" />
      <circle r="3" fill={fill(action)} />

      <text
        y="4"
        x="7"
        fontSize="11"
        textAnchor="start"
        fill="white"
        transform={`rotate(${rotation})`}
      >
        {action.type}
      </text>
    </g>
  )
}

Node.defaultProps = {
  x: 0,
  y: 0
}
