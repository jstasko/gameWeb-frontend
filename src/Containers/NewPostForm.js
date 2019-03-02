import React, {Component} from "react";
import {connect} from "react-redux";
import {postNewPost} from "../store/actions/gamePosts"
import "./NewPostForm.css"

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            image:"",
            description:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
    }
    handleNewPost(e) {
        e.preventDefault();
        this.props.postNewPost(this.state);
        this.setState({
            name:"",
            description:"",
            image:""
        });
        this.props.history.push("/");

    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        const {name, description, image} = this.state;
        return (
            <div className="container text-center">
                <h1> Create a new Post </h1>
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors}</div>
                )}
                <div style={{width:"60%", margin:"5% auto"}} className="box">
                    <form onSubmit={this.handleNewPost}>
                        <div className="form-group">
                            <label htmlFor="name"> Name </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image"> Image </label>
                            <input
                                id="image"
                                name="image"
                                type="text"
                                className="form-control"
                                value={image}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"> Description </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-light btn-lg btn-block">Submit!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {postNewPost})(MessageForm);