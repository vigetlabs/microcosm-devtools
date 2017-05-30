import React from 'react'
import Tree from 'paths-js/tree'
import Node from './node'
import css from './tree.css'

class TreeVisual extends React.Component {
  static defaultProps = {
    height: 250,
    width: 350,
    spacing: 30
  }

  _width = 0

  get width() {
    const { spacing, width, history } = this.props

    this._width = Math.max(this._width, width + history.size * spacing)

    return this._width
  }

  componentDidUpdate(component) {
    let active = document.querySelector('#node-' + this.props.history.head)

    if (active) {
      active.scrollIntoView(true, { behavior: 'smooth', block: 'end' })
    }
  }

  getTree(history) {
    const { height } = this.props

    return Tree({
      data: history.tree,
      height: height,
      width: this.width
    })
  }

  getCurve(curve, i) {
    return <path key={i} d={curve.connector.path.print()} />
  }

  getNode({ point, item }, i) {
    const { head } = this.props.history

    let [x = 0, y = 0] = point

    return <Node key={i} index={i} x={x} y={y} action={item} head={head} />
  }

  render() {
    const { history, height } = this.props

    // Leave plenty of room for labels
    let width = this.width + 200

    return (
      <div className={css.container}>
        <svg className={css.graphic} width={width} height={height}>
          {history.size > 0 ? this.renderTree() : this.renderEmpty()}
        </svg>
      </div>
    )
  }

  renderEmpty() {
    return <p>No events recieved. Dev tools are waiting...</p>
  }

  renderTree() {
    const { history } = this.props

    let tree = this.getTree(history)

    return (
      <g transform={`translate(0,-10)`}>
        <g fill="none" stroke="rgba(125, 225, 255, 0.4)">
          {tree.curves.map(this.getCurve)}
        </g>
        {tree.nodes.map(this.getNode, this)}
      </g>
    )
  }
}

export default TreeVisual
