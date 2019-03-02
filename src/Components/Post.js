import React from "react";
import {Link} from "react-router-dom";
import "./Post.css";


const Post = ({name, image, id, removePost, isCorrectUser}) => (
    <div className="col-md-4 col-12 col-sm-6 mt-5">
        <figure className="figure img-thumbnail no-border post">
            <img src={image} className="figure-img img-fluid " alt={name}/>
            <h3 className=" text-white"> {name} </h3>
            <p className="mt-3 button-flex">
                {isCorrectUser && (
                    <button onClick={removePost} className="btn btn-outline-dark btn-sm delete"> Delete </button>
                )}
                <Link to={`${id}`} className="btn btn-outline-dark btn-sm more-info">More info</Link>
            </p>
        </figure>
    </div>
);

export default Post;