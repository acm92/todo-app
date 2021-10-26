import React, { Component } from "react"

class ListToDosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: "Buy milk", done: false, targetDate: new Date() },
                    { id: 2, description: "Do sport", done: false, targetDate: new Date() },
                    { id: 3, description: "Coding", done: false, targetDate: new Date() }
                ]
        }

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