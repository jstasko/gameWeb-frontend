import {LOAD_ONE_POST} from "../actionTypes";

const posts = (state=[], action) => {
    switch (action.type) {
        case LOAD_ONE_POST:
            return [action.post];
        default:
            return state;
    }
};

export default posts;