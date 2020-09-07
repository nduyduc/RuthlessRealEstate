import { actions as userActions } from "App/User/actions";

const ID = "LOGIN_LOGIN_PANEL_";
export const SET_VALUE = ID + "GET_USER_INFO";
export const SET_LOGIN_MESSAGE = ID + "SET_LOGIN_MESSAGE";

export const actions = (dispatch) => ({
    logIn: logIn.bind(null, dispatch),
    setValue: setValue.bind(null, dispatch)
});

const setValue = (dispatch, name, value) => dispatch({
    type: SET_VALUE,
    payload: { name, value }
});

const logIn = (dispatch, username, password) => {
    dispatch({
        type: SET_LOGIN_MESSAGE,
        payload: {
            status: "info",
            text: "Logging in..."
        }
    });
    userActions(dispatch).logIn(username, password).catch(
        (error) => dispatch({
            type: SET_LOGIN_MESSAGE,
            payload: {
                status: "warning",
                text: error
            }
        })
    );
};
