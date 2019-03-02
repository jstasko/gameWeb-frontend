import {addError} from "./errors";
import {api} from "../../helpers/api";

export const loadOnePost = post => {
    return {
        type: "LOAD_ONE_POST",
        post: post
    }
};

export const fetchOnePost = post_id => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return api("get", `api/users/${id}/gamePost/${post_id}`)
        .then(res => {
            dispatch(loadOnePost(res));
        })
        .catch(err => dispatch(addError(err.message)))
};
