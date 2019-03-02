import {LOAD_GAME_POSTS, DELETE_GAME_POSTS} from "../actionTypes";

const posts = (state=[], action) => {
    switch (action.type) {
        case LOAD_GAME_POSTS:
            return [...action.posts];
        case DELETE_GAME_POSTS:
            return state.filter(post => post._id !== action.id);
        default:
            return state;
    }
};
export default posts;