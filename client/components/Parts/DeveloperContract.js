import React from 'react'

export default class DeveloperContract extends React.Component {

  constructor(props) {
    super(props)

    this.component = props.component

    this.state = {
      answer: "Yes"
    }
  }

  static get propTypes() {
    return {
      component: React.PropTypes.object.isRequired
    }
  }

  updateAnswer(e) {
    this.setState({ answer: e.currentTarget.value })
  }

  serialize() {
    return this.state
  }

  render() {
    return (
      <article>
        <h1>Dev</h1>
        <select onChange={this.updateAnswer.bind(this)} value={this.state.answer}>
          {['Yes', 'No'].map((v, i) => {
            return <option key={i} value={v}>{v}</option>
          })}
        </select>
      </article>
    )
  }

}
