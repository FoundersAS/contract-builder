import React, { Component } from 'react'
import Immutable from 'immutable'

class ClickToEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      value: props.value
    }
  }

  static get propTypes() {
    return {
      value: React.PropTypes.string.isRequired,
      onBlur: React.PropTypes.func
    }
  }

  componentDidUpdate(props, state) {
    if (this.state.editing) {
      React.findDOMNode(this.refs.field).focus()
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleKeyUp(e) {
    if (e.keyCode === 27) {
      React.findDOMNode(this.refs.field).blur()
    }
  }

  edit(e) {
    this.setState({ editing: true })
  }

  done(e) {
    this.setState({ editing: false })
    this.props.onBlur && this.props.onBlur(this.state.value)
  }

  renderInput() {
    return <textarea ref='field'
            onBlur={this.done.bind(this)}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            value={this.state.value} />
  }

  renderValue() {
    return (
      <ul onClick={this.edit.bind(this)}>
        {this.state.value.split("\n").map((line, i) => {
          return (
            <li key={i}>
              {i === 0 ? <strong>{line}</strong> : {line}}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className='click-to-edit'>
        {this.state.editing ? this.renderInput(): this.renderValue(this)}
      </div>
    )
  }
}

export default class DeveloperContract extends React.Component {

  constructor(props) {
    super(props)

    this.component = props.component

    this.state = {
      company: Immutable.Map({
        company_address: 'Name\nAddress\n1234 København\nDenmark',
        employee_address: 'Name\nAddress\n1234 København\nDenmark'
      })
    }
  }

  static get propTypes() {
    return {
      component: React.PropTypes.object.isRequired
    }
  }

  handleChangeInKey(key) {
    return val => {
      const firstKey = key.shift()
      const newValue = this.state[firstKey].setIn(key, val);
      let update = {}
      update[firstKey] = newValue
      this.setState(update)
    }
  }

  serialize() {
    return this.state
  }

  render() {
    return (
      <article className='DeveloperContract'>
        <header>
          <p><strong>Between</strong></p>
          <br />
          <p>
            <ClickToEdit value={this.state.company.get('company_address')} onBlur={this.handleChangeInKey(['company', 'company_address']).bind(this)} />
          </p>
          <p><strong>(in the following called The Company)</strong></p>
          <p>
            <ClickToEdit value={this.state.company.get('employee_address')} onBlur={this.handleChangeInKey(['company', 'employee_address']).bind(this)} />
          </p>
        </header>
      </article>
    )
  }

}
