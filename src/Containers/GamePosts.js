import React, {Component} from "react"
import {connect} from 'react-redux';
import {fetchPosts, removePost} from "../store/actions/gamePosts"
import Post from "../Components/Post"
import {removeError} from "../store/actions/errors";

class GamePosts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const style = {
            display: "flex",
            flexWrap: "wrap",
            marginTop: "100px"
        };
        const {gamePost, currentUser, error, history, removeError} = this.props;
        let postList = gamePost.map( p => {
            return  (
                <Post
                    id={p._id}
                    key={p._id}
                    image={p.image}
                    name={p.name}
                    removePost={this.props.removePost.bind(this, p.author._id, p._id)}
                    isCorrectUser={currentUser.user.id === p.author._id}
                />
            )

        });
        history.listen(() => (
            removeError()
        ));
        
        return (
            <div className="row text-center" style={style}>
                {
                    error.message && (
                        <div className="alert alert-danger"> {error.message} </div>
                    )
                }
                {postList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gamePost:state.gamePosts,
        currentUser:state.currentUser,
        error:state.errors
    };
}
export default connect(mapStateToProps, {fetchPosts ,removePost, removeError})(GamePosts);