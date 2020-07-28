import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        // short-circuilt
        return this.state.isLoggedIn && <div>Welcome Khilmi Aminudin</div>

        // Ternary Operation
        // return (
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Khilmi Aminudin</div>) : (
        //     <div>Welcome Guest</div>)
        // )

        // Variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Khilmi Aminudin</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message

        // If Else
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Khilmi Aminudin</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Khilmi Aminudin</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
