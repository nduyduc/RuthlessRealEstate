import { SET_VALUE, SET_LOGIN_MESSAGE } from "./actions";

const getInitialState = () => ({
    username: "",
    password: "",
    logInMessage: {
        status: null,
        text: null
    }
});

export default (state, { type, payload }) => {
    state = state || getInitialState();

    switch (type) {
    case SET_VALUE:
        return { ...state, [payload.name]: payload.value };
    case SET_LOGIN_MESSAGE:
        return { ...state, logInMessage: payload };
    default:
        return state;
    }
};