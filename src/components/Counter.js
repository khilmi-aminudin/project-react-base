import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    plusOne(){
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     },
        //     () => {console.log('call back value is',this.state.count)}
        // )
        // console.log(this.state.count)
        this.setState(
            prevState=>({
                count : prevState.count + 1
            })
        )
    }
    
    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick={()=>this.plusOne()}>
                    increment
                </button>
            </div>
        )
    }
}

export default Counter
