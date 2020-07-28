import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'khilmi aminudin'
        }

        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleA getDerivedStateFromProps`)
        return null
    }

    componentDidMount(){
        console.log(`LifecycleA componentDidMount`)
    }

    shouldComponentUpdate(){
        console.log(`LifecycleA shouldComponentUpdate`)
        return true
    }
    
    getSnapshotBeforeUpdate(){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log(`LifecycleA componentDidUpdate`)
    }

    changeState= () => {
        this.setState({
            name : 'Codevolution'
        })
    }
    render() {
        console.log(`LifecycleA Render`)
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>
                Change state
                </button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
