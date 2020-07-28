import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             passWord : ''
        }
    }
    
    userNameHandler = event => {
        this.setState({
            userName : event.target.value
        })
    }

    passWordHandler = event => {
        this.setState({
            passWord : event.target.value
        })
    }

    submitHandler = event =>{
        const {userName, passWord} = this.state
        alert(`hai ${userName} your Password is ${passWord}`)
        event.preventDefault()
    }


    render() {
        const {userName, passWord} = this.state
        return (
            <form onSubmit={this.submitHandler}>
              <table>
                <tr>
                    <td>
                        <label>User Name</label>
                    </td>
                    <td>:</td>
                    <td>
                        <input type='text' value={userName} onChange={this.userNameHandler}/>
                    </td>
                </tr>    
                <tr>
                    <td>
                        <label>PassWord</label>
                    </td>
                    <td>:</td>
                    <td>
                        <input type='text' value={passWord} onChange={this.passWordHandler}/>
                    </td>
                </tr>  
                <tr>
                    <td colSpan='3'>
                        <button type='submit'>Submit</button>
                    </td>
                </tr>            
              </table>
            </form>
        )
    }
}

export default Form1
