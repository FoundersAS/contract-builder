import React from 'react'
import contractStore from '../stores/contract_store'
import contractActions from '../actions/contract_actions'
import StoreComponent from './StoreComponent'
import { Part } from './Parts'

require('./Contract.scss')

export default class Contract extends StoreComponent(contractStore) {

  dragOver(e) {
    e.preventDefault()
  }

  drop(e) {
    e.preventDefault()
    contractActions.appendComponent(this.state.draggingComponent)
  }

  render() {
    const components = this.state.contract.get('components')
    return (
      <main id='Contract'
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}
        {...this.props}>
        <ul>
          {components.map((component, i) => {
            return <Part key={i} component={component} />
          })}
        </ul>
      </main>
    )
  }

}

