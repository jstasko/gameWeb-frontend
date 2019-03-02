import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from "./errors";
import gamePosts from "./gamePosts";
import post from "./post"
import comments from "./comments"
import commentOne from "./commentOne"

const rootReducer = combineReducers({
    currentUser,
    errors,
    gamePosts,
    post,
    comments,
    commentOne
});

export default rootReducer;