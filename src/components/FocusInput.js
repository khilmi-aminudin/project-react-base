import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.componentFocus = React.createRef()
    }

    clickHandler = () => {
        this.componentFocus.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref = {this.componentFocus}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
