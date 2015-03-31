import React from 'react'
import { componentsCursor, draggingComponentCursor } from '../state'

export default class Sidebar extends React.Component {

  render() {
    const components = componentsCursor()
    return (
      <section id='Sidebar'>
        {components.map(comp => {
          const name = comp.get('name')
          return <li draggable='true'
            onDragStart={dragStartFn(comp)}
            key={name}>{name}</li>
        })}
      </section>
    )
  }

}

function dragStartFn(comp) {
  return e => {
    draggingComponentCursor(comp)
  }
}
