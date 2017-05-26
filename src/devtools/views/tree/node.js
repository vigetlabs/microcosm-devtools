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

function humanize(type) {
  let [title, id] = type.split('.', 2)

  // Remove "$" in front of system Microcosm actions
  title = title.replace(/^\$/, '')

  return title
}

export default function Node({ action, x, y, index }) {
  let offsetY = index % 2 ? 30 : -30
  let offsetX = 20
  let color = fill(action)

  return (
    <g transform={`translate(${x},${y})`}>
      <circle r="10" opacity="0" />
      <circle r="4" fill={color} />

      <line x2={offsetX} y2={offsetY} stroke={color}/>
      <circle cx={offsetX} cy={offsetY} r="3" fill={color} />

      <text x={offsetX + 8} y={offsetY} fontSize="14" textAnchor="start" fill="white" dominantBaseline="middle">
        {humanize(action.type)}
      </text>
    </g>
  )
}

Node.defaultProps = {
  x: 0,
  y: 0
}
