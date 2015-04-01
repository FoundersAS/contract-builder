import Immutable from 'immutable'
import React from 'react'
import contractActions from '../actions/contract_actions'
import alt from '../alt'

class ContractStore {
  constructor() {
    this.bindActions(contractActions)

    this.draggingComponent = null
    this.contract = Immutable.fromJS({
      components: []
    })
  }

  onAppendComponent(component) {
    const contract = this.contract.updateIn(['components'], current => {
      return current.concat([component])
    })
    this.setState({ contract })
  }

  onStartDraggingComponent(component) {
    this.setState({ draggingComponent: component })
  }

  onSerialize() {
    this.contract.get('components').map(comp => {
      console.log(comp)
    })
  }
}

export default alt.createStore(ContractStore, 'ContractStore')

