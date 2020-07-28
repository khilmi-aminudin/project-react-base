import React, { Component } from 'react'

class LiveCycyleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'khilmi aminudin'
        }

        console.log('LiveCycyleB Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LiveCycyleB getDerivedStateFromProps`)
        return null
    }

    componentDidMount(){
        console.log(`LiveCycyleB componentDidMount`)
    }

    shouldComponentUpdate(){
        console.log(`LifecycleB shouldComponentUpdate`)
        return true
    }
    
    getSnapshotBeforeUpdate(){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log(`LifecycleB componentDidUpdate`)
    }

    
    render() {
        console.log(`LifecycleB Render`)
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LiveCycyleB
