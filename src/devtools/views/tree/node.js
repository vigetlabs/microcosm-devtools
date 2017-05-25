import React from 'react'
import withSend from 'microcosm/addons/with-send'

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

function Node({ action, x, y, send }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r="10" opacity="0" />
      <circle r="3" fill={fill(action)} />

      <text
        y="5"
        x="8"
        fontSize="12"
        textAnchor="start"
        fill={action.disabled ? 'gray' : 'white'}
        transform="rotate(45)"
      >
        {action.type}
      </text>

      <text y="-5" onClick={() => send('toggle', action.id)}>
        Toggle
      </text>

      <text y="-20" onClick={() => send('remove', action.id)}>
        Remove
      </text>

      <text y="-35" onClick={() => send('checkout', action.id)}>
        Checkout
      </text>
    </g>
  )
}

Node.defaultProps = {
  x: 0,
  y: 0
}

export default withSend(Node)
