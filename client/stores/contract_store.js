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
    const elm = React.createElement(component.get('handler'))
    const contract = this.contract.updateIn(['components'], current => {
      return current.concat([elm])
    })
    console.log(this)
    this.setState({ contract })
  }

  onStartDraggingComponent(component) {
    this.setState({ draggingComponent: component })
  }
}

export default alt.createStore(ContractStore, 'ContractStore')


