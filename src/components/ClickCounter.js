import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
 
    render() {
        return <button onClick={this.props.incrementCount}>{this.props.name} Click {this.props.count} Time</button>
    }
}

export default UpdatedComponent(ClickCounter)
