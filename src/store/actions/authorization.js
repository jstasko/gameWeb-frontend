import {SET_CURRENT_USER} from "../actionTypes";
import {addError, removeError} from "./errors";
import {api, setToken} from "../../helpers/api";

export function setCurrentUser(user) {
    return {
        type:SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function setAuthToken(token) {
    setToken(token);
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return api("post", `api/authorization/${type}`, userData)
                .then(({token, ...user}) => {
                      localStorage.setItem("jwtToken", token);
                      setAuthToken(token);
                      dispatch(setCurrentUser(user));
                      dispatch(removeError());
                      resolve();
                })
                .catch(err => {
                    dispatch(addError(err.message));
                    reject();
                });
        })
    }
}