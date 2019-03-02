import {addError} from "./errors";
import {api} from "../../helpers/api";

export const loadOneComment = comment => {
    return {
        type: "LOAD_ONE_COMMENT",
        comment: comment
    }
};

export const fetchOneComment  = (comment_id, post_id) => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return api("get", `/api/users/${id}/gamePost/${post_id}/comments/${comment_id}`)
        .then(res => {
            dispatch(loadOneComment(res));
        })
        .catch(err => dispatch(addError(err.message)))
};

export const updateComment  = (comment_id, post_id, text) => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    const username = currentUser.user.username;
    return api("put", `/api/users/${id}/gamePost/${post_id}/comments/${comment_id}`, {text, username})
        .then(res => {
            console.log(res);
        })
        .catch(err => dispatch(addError(err.message)))
};