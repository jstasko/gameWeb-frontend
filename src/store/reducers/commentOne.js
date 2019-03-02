import {LOAD_ONE_COMMENT} from "../actionTypes";

const comment = (state=[], action) => {
    switch (action.type) {
        case LOAD_ONE_COMMENT:
            return [action.comment];
        default:
            return state;
    }
};

export default comment;