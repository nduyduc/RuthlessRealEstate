import React, { Component } from "react";

import "./style";

export default class LoadingScreen extends Component {
    render() {
        return (
            <div className="loading-screen">
                <div className="loading-icon">
                </div>
                <div className="loading-text">
                    loading data
                </div>
            </div>
        );
    }
}