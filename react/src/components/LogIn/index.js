import React, { Component } from "react";
import LogInPanel from "containers/LogInPanel";

import "./style";

export default class LogIn extends Component {
    render() {
        return (
            <div id="login">
                <div id="login-header-large">
                    RUTHLESS
                </div>
                <div id="login-header-small">
                    real estate
                </div>
                <div id="login-panel">
                    <LogInPanel/>
                </div>
            </div>
        );
    }
}