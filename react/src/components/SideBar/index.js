import React, { Component } from "react";
import { Route } from "react-router-dom";

import SideMenu from "components/SideMenu";

import "./style";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navGen = ({iconSrc, navText, path, key, to}) => (
            <Route path={path} key={key} exact> 
                {
                    ({match, history}) => (
                        <SideMenu 
                            iconSrc={iconSrc} 
                            navText={navText} 
                            to={to}
                            match={match}
                            history={history}
                        />
                    )
                }
            </Route>
        );
        const navEntry = [
            {
                iconSrc: "/assets/icons/property-icon.svg",
                navText: "Property",
                path: "/(property.php)?",
                key: "property",
                to: "/property.php"
            },
            {
                iconSrc: "/assets/icons/client-icon.svg",
                navText: "Client",
                path: "/client.php",
                key: "client",
                to: "/client.php"
            }
        ];
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-logo">
                    <div className="logo-large">
                        RUTHLESS
                    </div>
                    <div className="logo-small">
                        real estate
                    </div>
                </div>
                <div className="sidebar-account">
                    <img className="account-icon" src="/assets/icons/avatar-icon.svg"/>
                    <div>
                        Admin
                    </div>
                </div>
                { navEntry.map(x => navGen(x)) }
            </div>
        );
    }
}