import {LOAD_COMMENTS, DELETE_COMMENTS} from "../actionTypes";

const comments = (state=[], action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return [...action.comments];
        case DELETE_COMMENTS:
            return state.filter(comment => comment._id !== action.id);
        default:
            return state;
    }
};

export default comments;