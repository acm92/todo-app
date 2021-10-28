import { Field, Formik, Form, ErrorMessage } from "formik"
import moment from "moment"
import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"


class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: "PlaceHolder",
            targetDate: moment(new Date()).format("YYYY-MM-DD")
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        if(this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        //Promise
        TodoDataService.getTodo(username, this.state.id).then(
            (response) => this.setState({description: response.data.description, targetDate: moment(response.data.targetDate).format("YYYY-MM-DD") })
        )
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        if(this.state.id === -1) {
            TodoDataService.createTodo(username, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() => { this.props.history.push("/todos") })
        } else {
            TodoDataService.updateTodo(username, this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() => { this.props.history.push("/todos") })
        }
        
    }

    validate(values) {

        let errors = {}
        
        if(!values.description) {
            errors.description = "Enter a description"
        } else if(values.description.length < 5) {
            errors.description = "Enter at least 5 characters in Description"
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid date"
        }

        return errors
    }

    render() {
        //let description = this.state.description
        //let targetDate = this.state.targetDate
        //De-structuring
        let {description, targetDate} = this.state

        return (
            <div>
                <h1>TODO</h1>
                <p>Todo Component for id - {this.props.match.params.id}</p>
                <div className="container">
                    <Formik 
                        initialValues={{ description, targetDate}} 
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit" >Save</button>
                            </Form>
                        )
                    }
                    </Formik>
                </div>
            </div>
        )
    }

}

export default TodoComponent