import React, {Component} from 'react'

export default class App extends Component {
  render () {
    return <div>
      Teehee
      {this.props.children}
    </div>
  }

  componentDidMount () {
    console.log("I'm aliiiive")
  }
}
