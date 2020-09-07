import { LOGIN, FETCH_AUTH } from "./actions";

const getInitialState = () => ({
    username: null,
    profile: {
        firstName: null,
        familyName: null,
        contact: null,
    },
    authFetched: false
});

export default (state, { type, payload }) => {
    state = state || getInitialState();
    switch (type) {
    case LOGIN:
        return { 
            username: payload.username,
            profile: {
                firstName: payload.first_name,
                familyName: payload.family_name,
                contact: payload.contact
            },
            authFetched: true
        };
    case FETCH_AUTH:
        return {
            ...state,
            authFetched: true
        };
    default:
        return state;
    }
};