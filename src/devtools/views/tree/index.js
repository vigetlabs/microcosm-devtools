import React from 'react'
import Tree from 'paths-js/tree'
import Node from './node'
import css from './tree.css'

class TreeVisual extends React.Component {
  get width() {
    return this.props.width + this.props.history.size * 60
  }

  getTree(history) {
    const { height, padX } = this.props

    return Tree({
      data: history.tree,
      height: height,
      width: this.width - padX * 2
    })
  }

  getCurve(curve, i) {
    return <path key={i} d={curve.connector.path.print()} />
  }

  getNode({ point, item }, i) {
    let [x = 0, y = 0] = point

    return <Node key={i} index={i} x={x} y={y} action={item} />
  }

  render() {
    const { history, height } = this.props

    return (
      <div className={css.container}>
        <svg className={css.graphic} width={this.width} height={height}>
          {history.size > 0 ? this.renderTree() : this.renderEmpty()}
        </svg>
      </div>
    )
  }

  renderEmpty() {
    return <p>No events recieved. Dev tools are waiting...</p>
  }

  renderTree() {
    const { history, padX } = this.props

    let tree = this.getTree(history)

    return (
      <g transform={`translate(${padX},-10)`}>
        <g fill="none" stroke="rgba(125, 225, 255, 0.2)">
          {tree.curves.map(this.getCurve)}
        </g>
        {tree.nodes.map(this.getNode)}
      </g>
    )
  }
}

TreeVisual.defaultProps = {
  padX: 40,
  height: 400,
  width: 350
}

export default TreeVisual
