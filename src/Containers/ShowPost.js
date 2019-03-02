import React, {Component} from "react"
import {connect} from "react-redux";
import {fetchOnePost} from "../store/actions/Post";
import Show from "../Components/Show"

class ShowPost extends Component {
    componentWillMount() {
        this.props.fetchOnePost(this.props.match.params.id_post);
    }
    render() {
        const {gamePost} = this.props;
        let post = gamePost.map( p => (
           <Show
                id={p._id}
                key={p._id}
                name={p.name}
                image={p.image}
                author={p.author.username}
                description={p.description}
                comments={p.comments}
           />
        ));
        return (
             <div className="container">
                 <div className="row">
                     {post}
                 </div>
             </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        gamePost: state.post,
    }
}

export default connect(mapStateToProps, {fetchOnePost})(ShowPost);