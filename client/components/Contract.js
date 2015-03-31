import React from 'react'
import { contractCursor, draggingComponentCursor } from '../state'

export default class Contract extends React.Component {

  constructor(props) {
    super(props)
    this.cursor = contractCursor
  }

  dragOver(e) {
    e.preventDefault()
  }

  drop(e) {
    e.preventDefault()

    const component = draggingComponentCursor()
    draggingComponentCursor(null)

    this.cursor(this.cursor().updateIn(['components'], current => {
      return current.concat([React.createElement(component.get('handler'))])
    }))

    this.forceUpdate()
  }

  serialize() {
    const data = this.cursor().toJS()
    console.log(data)
  }

  render() {
    const components = this.cursor().get('components')
    return (
      <main id='Contract'
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}>
        <ul>
          {components.map((elm, i) => {
            return <li key={i}>{elm}</li>
          })}
        </ul>
        <button onClick={this.serialize.bind(this)}>Serialize</button>
      </main>
    )
  }
}

