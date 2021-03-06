import React from "react";
import { Link } from "react-router-dom";
import { SIGN_UP, LOG_IN } from "../../actions/session_actions";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
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

    handleDemoLogin(event) {
        event.preventDefault();
        const demoUser = {
            name: "Demo",
            email: "demo@user.com",
            password: "demouser"
        };

        if (this.props.formType === LOG_IN) {
            this.props.processForm(demoUser);
        }
        else {
            this.props.demoLogin(demoUser);
        }
    }
    
    render() {
        return (
            <div className="main">
                <div className="header">
                    <h1 className="form-type-header">{this.props.formType}</h1>
                    {
                        this.props.formType === LOG_IN ? (
                            <Link to="/signup" className="get-started-header">
                                Don't have an account yet? Get started.
                            </Link>
                        ) : (
                            <Link to="/login" className="get-started-header">
                                Already have an account? Click here.
                            </Link>
                        )
                    }
                </div>

                <div className="divider"></div>

                <form onSubmit={this.handleSubmit}
                    className={`form ${this.props.formType.split(" ").join("")}-form`}>
                    {
                        this.props.formType === SIGN_UP ? (
                            <input type="text"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.update("name")}
                                className="field" />
                        ) : null
                    }

                    <input type="text"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="field" />

                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="field" />

                    <div className="buttons">
                        <input type="submit"
                            value={this.props.formType}
                            className="left-button right" />
                        <Link to="/movies" 
                            onClick={this.handleDemoLogin} 
                            className="right-button left">demo login</Link>
                    </div>
                    
                </form>
                
                <ul className="errors">
                    {
                        this.props.errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SessionForm;