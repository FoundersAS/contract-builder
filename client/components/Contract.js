import React from 'react'
import { contractCursor, draggingComponentCursor } from '../state'

export default class Contract extends React.Component {

  dragOver(e) {
    e.preventDefault()
  }

  drop(e) {
    e.preventDefault()
    const component = draggingComponentCursor()
    draggingComponentCursor(null)
    contractCursor(contractCursor().updateIn(['components'], current => {
      return current.concat([component])
    }))
    this.forceUpdate()
  }

  render() {
    const contract = contractCursor()
    const components = contract.get('components')
    return (
      <main id='Contract'
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}>
        <ul>
          {components.map((v, i) => {
            const handler = v.get('handler')
            const elm = React.createElement(handler)
            return <li key={i}>{elm}</li>
          })}
        </ul>
      </main>
    )
  }
}

