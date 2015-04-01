import React from 'react'
import contractStore from '../stores/contract_store'
import contractActions from '../actions/contract_actions'
import StoreComponent from './StoreComponent'

require('./Contract.scss')

export default class Contract extends StoreComponent(contractStore) {

  dragOver(e) {
    e.preventDefault()
  }

  drop(e) {
    e.preventDefault()
    contractActions.appendComponent(this.state.draggingComponent)
  }

  serialize() {
    console.log(this.state.contract.get('components'))
  }

  render() {
    return (
      <main id='Contract'
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}
        {...this.props}>
        <ul>
          {this.state.contract.get('components').map((elm, i) => {
            return <li key={i}>{elm}</li>
          })}
        </ul>
        <button onClick={this.serialize.bind(this)}>Serialize</button>
      </main>
    )
  }

}

