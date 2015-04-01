import React from 'react'
import contractActions from '../actions/contract_actions'

require('./ActionBar.scss')

export default class ActionBar extends React.Component {

  serialize(e) {
    e.preventDefault()
    contractActions.serialize()
  }

  render() {
    return (
      <section id='ActionBar' {...this.props}>
        <ul>
          <li><a href='' onClick={this.serialize}>Print</a></li>
        </ul>
      </section>
    )
  }

}
