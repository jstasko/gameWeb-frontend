import React, {Component} from "react";
import "./AddCommentForm.css"
import {connect} from "react-redux";
import {postComments} from "../store/actions/comments";


class AddCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postComments(this.state.title, this.props.match.params.id_post, this.props.currentUser);
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
                            onChange={this.handleChange}
                            className="form-control"
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
        currentUser: state.currentUser.user,
        errors: state.errors

    }
}

export default connect(mapStateToProps, {postComments})(AddCommentForm);