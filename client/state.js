import Immutable from 'immutable'
import EventEmitter from 'eventemitter3'

export default class State extends EventEmitter {
  constructor(state) {
    this._state = null
    this.load(state || {})
  }

  load(state) {
    this.set(
      Immutable.Map.isMap(state) ? state : Immutable.fromJS(state)
    )
  }

  set(state) {
    if (this._state === state) return;
    this._state = state
    this.emit('change', this._state)
  }

  get() {
    return this._state
  }

  cursor(path) {
    return (newValue => {
      if (newValue) {
        return this.set(this._state.setIn(path, newValue))
      } else {
        return this._state.getIn(path)
      }
    })
  }
}

import DeveloperContract from './components/DeveloperContract'

const initialState = {
  components: [
    { name: 'Udviklerkontrakt', handler: DeveloperContract },
  ],
  draggingComponent: null,
  contract: {
    components: []
  }
}

export const appState = new State(initialState)
export const componentsCursor = appState.cursor(['components'])
export const draggingComponentCursor = appState.cursor(['draggingComponent'])
export const contractCursor = appState.cursor(['contract'])

