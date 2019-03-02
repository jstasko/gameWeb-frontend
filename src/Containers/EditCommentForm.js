import React, {Component} from "react";
import "./AddCommentForm.css"
import {connect} from "react-redux";
import {fetchOneComment, updateComment} from "../store/actions/oneComment";


class EditCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchOneComment(this.props.match.params.id_comment,this.props.match.params.id_post);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.title === undefined) {
            this.props.updateComment(this.props.match.params.id_comment,this.props.match.params.id_post, this.props.comment[0].title);
        } else {
            this.props.updateComment(this.props.match.params.id_comment,this.props.match.params.id_post, this.state.title);
        }
        this.setState({
            title:""
        });
        this.props.history.push("/");

    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const previousText = this.props.comment.map(c => (c.title))
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group flex-box">
                        <label
                            style={{fontSize:"1.6em", fontWeight:"800", color:"white"}}
                            htmlFor="title"
                        >
                            Comment :
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder={previousText[0]}
                        />
                        <button type="submit" className="btn btn-login btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        comment: state.commentOne,
        errors: state.errors

    }
}

export default connect(mapStateToProps, {fetchOneComment, updateComment})(EditCommentForm);