import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handlerUserNameChange = event => {
        this.setState({
            username : event.target.value
        })
    }
    
    handlerCommentsChange = event => {
        this.setState({
            comments : event.target.value
        })
    }

    handlerTopicCahnge = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handlerSubmit = event => {
        alert(this.state.username+' '+ this.state.comments+''+this.state.topic)
        event.preventDefault()
    }

    render() {
        const {username,comments,topic} = this.state
        return (
           <form onSubmit={this.handlerSubmit}>
               <div>
                    <label>User Name</label>
                    <input type='text' value={username} onChange={this.handlerUserNameChange}/>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={comments} onChange={this.handlerCommentsChange}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={topic} onChange={this.handlerTopicCahnge}>
                       <option value='react' >React</option>
                       <option value='angular' >Angular</option>
                       <option value='vue' >Vue</option>
                   </select>
               </div>
               <div>
                   <button type='submit' >Submit</button>
               </div>
           </form>
        )
    }
}

export default Form
