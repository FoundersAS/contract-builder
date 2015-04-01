import React from 'react'

export class Part extends React.Component {
  render() {
    const props = this.props
    const handler = props.component.get('handler')
    return React.createElement(handler, props)
  }
}

import DeveloperContract from './DeveloperContract'
import Signature from './Signature'

export default { DeveloperContract, Signature }
