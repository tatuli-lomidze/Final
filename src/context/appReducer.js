import { parseToken, toggleLocalStorage } from "../utils/jwt";
import appActions from "./appActions";

export const initalState = {
    token: '',
    isUserLoggedIn:false,
    user: null,
}

export const appReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case appActions.signInUser: {
            const user = parseToken(payload)
            toggleLocalStorage(payload)
            return {...state, isUserLoggedIn:true, token: payload, user }
        }

        case appActions.signOutUser: {
            toggleLocalStorage()
            return {...state, isUserLoggedIn:false, token: '', user: null}
        }
                
        default:
            return state;
    }
}