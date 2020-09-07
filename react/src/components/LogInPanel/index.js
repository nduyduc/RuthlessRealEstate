import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style";


export default class LogInPanel extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.props.setValue(event.target.name, event.target.value);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.props.username, this.props.password);
    }

    render() {
        return (
            <form className="login-panel" onSubmit={this.onSubmit}>
                <input 
                    className="login-field" type="text" 
                    name="username" placeholder="User name"
                    autoComplete="off"
                    value={this.props.username} onChange={this.handleChange}
                />
                <input 
                    className="login-field" type="password"
                    name="password" placeholder="Password"
                    autoComplete="off"
                    value={this.props.password} onChange={this.handleChange}
                />
                {
                    this.props.logInMessage.status &&
                    <div className={classNames([
                        "login-message",
                        this.props.logInMessage.status
                    ])}> { this.props.logInMessage.text } </div>
                }
                <div></div>
                <button type="submit">Log In</button>
            </form>
        );
    }
}

LogInPanel.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    logIn: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    logInMessage: PropTypes.shape({
        status: PropTypes.string,
        text: PropTypes.string
    }).isRequired
};