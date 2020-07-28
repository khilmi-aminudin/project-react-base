import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
   
    render() {
        return (<div>
                    <h2 onMouseOver={this.props.incrementCounter}>{this.props.name} Hover {this.props.count} Time</h2>
                    <button onClick={this.props.incrementCount}>{this.props.name} Click {this.props.count} Time</button>
                </div>
        )}
}

export default UpdatedComponent(HoverCounter)
