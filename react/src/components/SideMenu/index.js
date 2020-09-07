import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./style";

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(this.props.to);
    }

    render() {
        return (
            <div className={classNames({
                "side-menu": true,
                "active": this.props.match != null
            })} onClick={this.handleClick}>
                <img className="side-menu-icon" src={this.props.iconSrc}/>
                <div className="side-menu-text">
                    {this.props.navText}
                </div>
            </div>
        );
    }
}

SideMenu.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    iconSrc: PropTypes.string.isRequired,
    navText: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}