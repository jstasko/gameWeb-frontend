import {addError} from "./errors";
import {api} from "../../helpers/api";

export const loadGamePosts = (posts) => {
    return {
        type:"LOAD_GAME_POSTS",
        posts: posts,
    }
};

export const fetchPosts = () => {
    return (dispatch, getState) => {
        return api("get", `api/gamePost`)
            .then(res => {
               dispatch(loadGamePosts(res));
            })
            .catch(err => dispatch(addError(err.message)))
    };
};



export const postNewPost = text => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return api("post", `/api/users/${id}/gamePost`, {text})
        .then(res => {})
        .catch(err => dispatch(addError(err.message)))
};

export const remove = id => ({
    type:"DELETE_GAME_POSTS",
    id
});

export const removePost = (user_id, post_id) => {
    return dispatch => {
        return api("delete", `/api/users/${user_id}/gamePost/${post_id}`)
            .then(() => dispatch(remove(post_id)))
            .catch(err => dispatch(addError(err.message)))
    };
};