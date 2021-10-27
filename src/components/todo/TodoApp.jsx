import { render } from "@testing-library/react"
import React, { Component } from "react"
import { BrowserRouter as Router, withRouter, Route, Switch, Link } from "react-router-dom"
import AuthenticatedRoute from "./AuthenticatedRoute"
import LoginComponent from "./LoginComponent"
import ListToDosComponent from "./ListToDosComponent"
import WelcomeComponent from "./WelcomeComponent"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import ErrorComponent from "./ErrorComponent"
import LogoutComponent from "./LogoutComponent"
import TodoComponent from "./TodoComponent"



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
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListToDosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent />
                    </div>
                </Router>
            </div>
        )
    }
}

export default TodoApp
