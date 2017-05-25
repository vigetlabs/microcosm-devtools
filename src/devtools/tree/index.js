import Node from './node'
import React from 'react'
import Tree from 'paths-js/tree'

class TreeVisual extends React.Component {
  get width() {
    return this.props.width + this.props.history.size * 40
  }

  getTree(history) {
    const { height, padX, padY } = this.props

    return Tree({
      data: history.tree,
      height: height - padY * 2,
      width: this.width - padX * 2
    })
  }

  getCurve(curve, i) {
    return <path key={i} d={curve.connector.path.print()} />
  }

  getNode({ point, item }, i) {
    let [x = 0, y = 0] = point

    return <Node key={i} x={x} y={y} action={item} />
  }

  render() {
    const { history, height } = this.props

    return (
      <div className="tree-container">
        <svg className="tree" width={this.width} height={height}>
          {history.size > 0 ? this.renderTree() : this.renderEmpty()}
        </svg>
      </div>
    )
  }

  renderEmpty() {
    return <p>No events recieved. Dev tools are waiting...</p>
  }

  renderTree() {
    const { history, padX, padY } = this.props

    let tree = this.getTree(history)

    return (
      <g transform={`translate(${padX},${padY})`}>
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
  padY: 40,
  height: 200,
  width: 350
}

export default TreeVisual
