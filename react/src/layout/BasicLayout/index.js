import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SideBar from "components/SideBar";

import "./style";

export default class BasicLayout extends Component {
    render() {
        return (
            <div id="basic-layout">
                <div id="basic-side-bar">
                    <SideBar/>
                </div>
                <div id="basic-content">
                    <Switch>
                        <Route component={() => <div> Hello world </div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}