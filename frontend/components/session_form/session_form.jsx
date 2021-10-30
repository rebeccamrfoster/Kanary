import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return event => {
            this.setState({ [field]: event.target.value })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formUser = Object.assign({}, this.state);
        this.props.processForm(formUser);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    this.props.formType === "SIGN UP" ? (
                        <label>Name
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update("name")} />
                        </label>
                    ) : (
                        <Link to="/signup">Don't have an account yet? Get started.</Link>
                    )
                }

                <label>Email Address
                    <input type="text"
                           value={this.state.email}
                           onChange={this.update("email")} />
                </label>

                <label>Password
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")} />
                </label>

                <ul>
                    {
                        this.props.errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))
                    }
                </ul>

                <input type="submit" value={this.props.formType} />
            </form>
        )
    }
}

export default SessionForm;