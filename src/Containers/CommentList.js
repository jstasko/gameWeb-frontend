import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import Time from 'react-time'
import {fetchComments, deleteComments} from "../store/actions/comments";

class CommentList extends Component {

    componentWillMount() {
        this.props.fetchComments(this.props.id);
    }

    render() {
        const style = {
            marginLeft: "1%"
        };
        const {comments, currUser, id} = this.props;
        let comment = comments.map((c, i) => (
            <div key={i} className="row" style={{marginTop:"25px", backgroundColor:"#ff9400", borderRadius:"10px"}}>
                <div className="col-md-12 card-body">
                    <strong
                        className=""
                        style={{fontWeight:"800", color:"black", fontSize:"1.2em"}}>
                        @{c.username}
                    </strong>
                    <span className="float-right text-white-100"><Time value={c.createdAt} format="YYYY/MM/DD"/> </span>
                    <p
                        className="text-white"
                        style={{fontSize:"1.2em", paddingLeft:"5%"}}
                    >
                        {c.title }
                    </p>
                    { (c.username === currUser.username) && (
                        <div>
                            <button onClick={this.props.deleteComments.bind(this, c._id, currUser.id, c.gamePost)} className="btn btn-danger btn-sm">Delete</button>
                            <Link to={`${id}/comments/${c._id}/edit`} className="btn btn-success btn-sm" style={style}>Edit</Link>
                        </div>
                    )}
                    </div>
            </div>
        ));
        return (
            <div>
                {comment}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
        currUser: state.currentUser.user
    }
}

export default connect(mapStateToProps, {fetchComments, deleteComments})(CommentList);