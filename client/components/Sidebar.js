import React from 'react'
import componentsStore from '../stores/components_store'
import StoreComponent from './StoreComponent'
import contractActions from '../actions/contract_actions'

require('./Sidebar.scss')

export default class Sidebar extends StoreComponent(componentsStore) {

  render() {
    return (
      <section id='Sidebar' {...this.props}>
        <ul>
          {this.state.components.map(comp => {
            const name = comp.get('name')
            return (
              <li draggable={true} key={name}
                onDragStart={dragStartFn(comp)}>
                <img src='/images/paper.svg' className='paper' alt='paper' />
                <br />
                {name}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

}

const dragStartFn = comp => e => {
  contractActions.startDraggingComponent(comp)
}

