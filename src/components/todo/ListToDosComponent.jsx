import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class ListToDosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:[]
        }

    }

    componentDidMount() {

        let username = AuthenticationService.getLoggedInUserName()

        //Promise
        TodoDataService.retrieveAllTodos(username).then(
            (response) => this.setState({todos: response.data}) 
        )

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>isCompleted?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>)
    }
}

export default ListToDosComponent