import alt from '../alt'

class ContractActions {
  constructor() {
    this.generateActions(
      'appendComponent',
      'startDraggingComponent',
      'serialize'
    )
  }
}

export default alt.createActions(ContractActions)

