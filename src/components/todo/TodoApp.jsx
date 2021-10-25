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
            password: "",
            validCredentials: false,
            invalidCredentials: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    //Variable in object notation: []
    //The state values that are going to be changed are defined (name)
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked = () => {
        if(this.state.username === "angel" && this.state.password === "residentevil5"){
            this.setState({ validCredentials: true })
            this.setState({ invalidCredentials: false })
        } else {
            this.setState({ invalidCredentials: true })
            this.setState({ validCredentials: false })
        }
    }

    render() {
        return(
            <div>
                {this.state.validCredentials && <div>Login Successful</div>}
                {this.state.invalidCredentials && <div>Invalid UserName/Password</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}


export default TodoApp
