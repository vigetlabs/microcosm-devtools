import React from 'react'
import humanize from '../../utils/humanize'

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

export default function Node({ action, x, y, index, head }) {
  let offsetY = index % 2 ? 30 : -30
  let offsetX = 20
  let color = fill(action)

  return (
    <g id={'node-' + action.id} transform={`translate(${x},${y})`}>
      <circle r="10" opacity="0" />
      <circle r="4" fill={color} />

      <line x2={offsetX} y2={offsetY} stroke={color} />
      <circle cx={offsetX} cy={offsetY} r="3" fill={color} />

      <text
        x={offsetX + 8}
        y={offsetY}
        fontSize="14"
        textAnchor="start"
        fill={action.id == head ? '#ffeca4' : '#eee'}
        opacity={action.disabled ? '.5' : '1'}
        dominantBaseline="middle"
      >
        {humanize(action.type)}
      </text>
    </g>
  )
}

Node.defaultProps = {
  x: 0,
  y: 0
}
