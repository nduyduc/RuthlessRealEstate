import { getInfo } from "api/agent";

const ID = "USER_";
export const LOGIN = ID + "LOGIN";
export const FETCH_AUTH = ID + "FETCH_AUTH";

export const actions = (dispatch) => ({
    logIn: logIn.bind(null, dispatch),
});

const logIn = (dispatch, username, password) => new Promise(
    (resolve, reject) => {
        getInfo({username, password}).then(
            ({data, response}) => {
                if (response.ok) {
                    dispatch({
                        type: LOGIN,
                        payload: { ...data }
                    });
                    resolve();
                } else {
                    dispatch({
                        type: FETCH_AUTH
                    });
                    reject("Incorrect password or username");
                }
            }
        );
    }
);