import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import Homepage from "../Components/Homepage";
import {connect} from "react-redux";
import AuthentificationForm from "../Components/AuthentificationForm";
import {authUser} from "../store/actions/authorization";
import {removeError} from "../store/actions/errors";
import withAuth from "../hocs/withAuth"
import NewPostForm from "./NewPostForm"
import ShowPost from "./ShowPost"
import AddCommentForm from "../Containers/AddCommentForm"
import EditCommentForm from "../Containers/EditCommentForm"
const Main = props => {
    const {authUser, errors, removeError, currentUser} = props;
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <Homepage currUser={currentUser}  {...props} />}
                />
                <Route
                    exact
                    path="/login"
                    render={props =>
                                    <AuthentificationForm
                                        heading="Welcome Back!"
                                        removeError = {removeError}
                                        error={errors}
                                        onAuth={authUser}
                                        buttonLabel ="logIn!"
                                        {...props}
                                    />
                            }
                />
                <Route
                    exact
                    path="/signup"
                    render= {props =>
                                    <AuthentificationForm
                                        signup
                                        heading="Join Us Now!!"
                                        removeError = {removeError}
                                        error={errors}
                                        onAuth={authUser}
                                        buttonLabel = "SignUp!"
                                        {...props}
                                    />
                            }
                />
                <Route
                    exact
                    path="/users/:id/gamePost/new"
                    component={withAuth(NewPostForm)}
                />
                <Route
                    exact
                    path="/:id_post"
                    component={withAuth(ShowPost)}
                />
                <Route
                    exact
                    path="/:id_post/comments"
                    component={withAuth(AddCommentForm)}
                />
                <Route
                    path="/:id_post/comments/:id_comment/edit"
                    component={withAuth(EditCommentForm)}
                />
            </Switch>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
};

export default withRouter(
    connect(mapStateToProps, {authUser, removeError})(Main)
);