import Immutable from 'immutable'
import alt from '../alt'
import Parts from '../components/Parts'

class ComponentsStore {
  constructor() {
    this.components = Immutable.fromJS([
      { name: 'Udviklerkontrakt', handler: Parts.DeveloperContract },
      { name: 'Signatur', handler: Parts.Signature },
    ])
  }
}

export default alt.createStore(ComponentsStore, 'ComponentsStore')

