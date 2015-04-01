import React from 'react'

require('./ActionBar.scss')

export default class ActionBar extends React.Component {

  render() {
    return (
      <section id='ActionBar' {...this.props}>
        <ul>
          <li><a href=''>Print</a></li>
        </ul>
      </section>
    )
  }

}
