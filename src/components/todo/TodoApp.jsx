import { render } from "@testing-library/react"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"



class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <div>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListToDosComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent />
                    </div>
                </Router>
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
            
            this.props.history.push(`/welcome/${this.state.username}`)
   
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



class WelcomeComponent extends Component {

    render() {
        return (
            <div>
                <p>Welcome {this.props.match.params.name}</p>
                <p>Manage your ToDo's <Link to="/todos">here</Link></p>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                Header  <hr />
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr />Footer
            </div>
        )
    }
}

class ListToDosComponent extends Component {

    constructor(props) {
        super(props)
        this.state ={
            todos: 
            [
                { id: 1, description: "Buy milk", done:false, targetDate: new Date() },
                { id: 2, description: "Do sport", done: false, targetDate: new Date() },
                { id: 3, description: "Coding", done: false, targetDate: new Date() }
            ]
        }

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>isCompleted?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo) => 
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )} 
                    </tbody>
                </table>
            </div>)
    }

}


const ErrorComponent = () => (
    <div>Error! Missing page! Contact support</div>
)




export default TodoApp
