import React from 'react'
import Sidebar from './Sidebar'
import Contract from './Contract'

export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Sidebar />
        <Contract />
      </div>
    )
  }
}
