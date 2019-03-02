import {addError} from "./errors";
import {api} from "../../helpers/api";


export const loadComments = comments => ({
    type: "LOAD_COMMENTS",
    comments: comments
});

export const fetchComments = post_id => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return api("get", `/api/users/${id}/gamePost/${post_id}/comments`)
        .then(res => {
            dispatch(loadComments(res));
        })
        .catch(err => dispatch(addError(err.message)));

};


export const postComments = (title, post_id) => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    const username = currentUser.user.username;
    return api("post", `api/users/${id}/gamePost/${post_id}/comments`, {title, username})
        .then( res => {})
        .catch(err => dispatch(addError(err.message)));
};

export const removeComments = id => ({
    type: "DELETE_COMMENTS",
    id
});

export const deleteComments = (comments_id, user_id, post_id) => {
    return dispatch => {
        return api("delete", `/api/users/${user_id}/gamePost/${post_id}/comments/${comments_id}`)
            .then(res => {
                dispatch(removeComments(comments_id))
            })
            .catch(err => dispatch(addError(err.message)));
    }
};