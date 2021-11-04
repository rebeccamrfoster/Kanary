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
        this.props.processForm(demoUser);
    }
    
    render() {
        return (
            <div className="main">

                <div className="center">
                    <div className="header">
                        <h1 className="form-type-header">{this.props.formType}</h1>
                        
                        {
                            this.props.formType === "log in" ? (
                                <Link to="/signup" className="get-started-header">Don't have an account yet? Get started.</Link>
                            ) : null
                        }
                    </div>
                </div>

                <div className="divider"></div>

                <form onSubmit={this.handleSubmit} className="form">
                    {
                        this.props.formType === "sign up" ? (
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
                
                <ul>
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