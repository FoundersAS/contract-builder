import React from 'react'

import Sidebar from './Sidebar'
import Contract from './Contract'
import ActionBar from './ActionBar'

require('./App.scss')

export default class App extends React.Component {
  render() {
    return (
      <main id="App" {...this.props}>
        <section className='content'>
          <Sidebar />
          <Contract />
        </section>
        <ActionBar className='bottom' />
      </main>
    )
  }
}
