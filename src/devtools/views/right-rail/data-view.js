import React from 'react'
import Inspector, { chromeLight } from 'react-inspector'

// https://github.com/xyc/react-inspector/blob/master/src/styles/themes/chromeLight.js
const THEME = { ...chromeLight, BASE_BACKGROUND_COLOR: 'transparent' }

export default function DataView(props) {
  return React.createElement(Inspector, props)
}

DataView.defaultProps = {
  data: {},
  theme: THEME,
  expandLevel: 0,
  table: false
}
