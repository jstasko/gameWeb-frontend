import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

const DEFAULT = {
    message:null
};

export default (state=DEFAULT, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {...state, message:action.error};
        case REMOVE_ERROR:
            return {...state, message:null};
        default:
            return state;
    }
}