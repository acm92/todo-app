import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"
import moment from "moment"

class ListToDosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            message: null
        }

        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        this.handleUpdateItem = this.handleUpdateItem.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    //Life-cycle method. It will retrieve the ToDo's from the back-end
    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()

        //Promise
        TodoDataService.retrieveAllTodos(username).then(
            (response) => this.setState({ todos: response.data })
        )
    }

    handleDeleteItem(id) {

        let username = AuthenticationService.getLoggedInUserName()

        TodoDataService.deleteTodo(username, id).then(
            (response) => {
            this.setState({ message: `Delete of todo ${id} successful` })
            this.refreshTodos()
        }
        )
    }

    handleUpdateItem(id) {

        this.props.history.push(`/todos/${id}`)

        //let username = AuthenticationService.getLoggedInUserName()

       // TodoDataService.deleteTodo(username, id).then(
        //    (response) => {
       //         this.setState({ message: `Delete of todo ${id} successful` })
        //        this.refreshTodos()
       //     }
       // )
    }

    addTodo() {

        //It does not exist, so the id is -1
        this.props.history.push(`/todos/-1`)

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <p>
                    <button className="btn btn-success" onClick={this.addTodo}>Add Todo</button>
                </p>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>isCompleted?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                    <td><button className="btn btn-success" onClick={() => this.handleUpdateItem(todo.id)}>Update item</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.handleDeleteItem(todo.id)}>Delete item</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>)
    }
}

export default ListToDosComponent