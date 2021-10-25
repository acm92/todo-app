import React, { Component } from "react"

class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                My Todo Application
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
            username: "",
            password: ""
        }

        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)

    }

    handleUserName(event) {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handlePassword(event) {
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    render() {
        return(
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserName}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePassword}></input>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp
