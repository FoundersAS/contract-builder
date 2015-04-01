import alt from '../alt'

class ContractActions {
  constructor() {
    this.generateActions('appendComponent', 'startDraggingComponent')
  }
}

export default alt.createActions(ContractActions)

