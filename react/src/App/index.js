import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import rootReducer from "./reducer";
import BasicLayout from "layout/BasicLayout";
import LoadingScreen from "components/LoadingScreen";
import LogIn from "components/LogIn";
import { actions as userActions } from "./User/actions";

import "./style/app";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.logIn();
    }

    render() {
        const RouterWrapper = () => (
            <Router>
                <Route path="/" component={BasicLayout}/>
            </Router>
        );
        return (
            !this.props.authFetched ? <LoadingScreen/> :
                !this.props.username ? <LogIn/> : 
                    <RouterWrapper/>
        );
    }
}

App.propTypes = {
    username: PropTypes.string,
    authFetched: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired
};

const mapStateToProps = ({ user: { username, authFetched } }) => {
    return ({ username, authFetched });
}
const mapDispatchToProps = (dispatch) => ({
    logIn: userActions(dispatch).logIn
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const AppWrapper = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

export default AppWrapper;