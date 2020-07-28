import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()

        this.state = {
             
        }
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handlerClick = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef}/>
                <button onClick={this.handlerClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
