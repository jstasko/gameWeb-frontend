import React from "react";
import {Link} from "react-router-dom";
import "./Show.css";
import CommentList from "../Containers/CommentList"

const Show = ({description, name, image, author, comments, id}) => (
    <div className="col-sm-12">
        <div className="img-thumbnail no-border" style={{backgroundColor:"#ff9400"}}>
            <img src={image}  className= "img-fluid mx-auto d-block" alt={name}/>
                <div className="figure-caption text-white">
                    <h1>{name}</h1>
                    <p style={{color:"black", fontWeight:"600", fontSize:"1.5em"}}>
                        {description}
                        </p>
                    <p className="text-white-50">
                        <em style={{color:"black"}}>Submitted By {author}</em>
                    </p>
                </div>
        </div>
        <div className="card mt-3" style={{backgroundColor:"#2e2f30"}}>
            <div className="text-right mr-3 mt-3">
                <Link className="btn btn-outline-light" to={`${id}/comments`} >Add New Comment</Link>
            </div>
            <hr/>
            <CommentList id={id}/>
        </div>
    </div>
);

export default Show;