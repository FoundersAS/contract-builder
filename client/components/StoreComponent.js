import React from 'react'

export default function StoreComponentClass(store) {
  return class StoreComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = store.getState()
    }

    componentDidMount() {
      store.listen(this.onChange.bind(this))
    }

    componentWillUnmount() {
      store.unlisten(this.onChange.bind(this))
    }

    onChange(state) {
      this.setState(state)
    }
  }
}

