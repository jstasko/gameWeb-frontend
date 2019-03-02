import React from "react";
import {Link} from 'react-router-dom';
import "./Homepage.css"
import GamePosts from "../Containers/GamePosts"


const Homepage = ({currUser, history}) => {
    if (!currUser.isAuthenticated) {
        return (
            [
                <div id="landing-header" key={1}>
                    <h1>Welcome to Gamer Site</h1>
                    <Link to="/signup" className="btn btn-lg btn-success">View all posts</Link>
                </div>,
                <ul className="slideshow" key={2}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            ]
        )
    } else {

        return (
            <div className="container">
                <header className="jumbotron">
                    <div className="container banner">
                        <h1>Welcome to Gamer Site!</h1>
                        <p>View posts from our gamers and get your informations from them </p>
                        <p>
                            <Link to={`users/${currUser.user.id}/gamePost/new`} className="btn btn-outline-dark btn-lg">Add New Post <i className="fas fa-plus"></i></Link>
                        </p>
                    </div>
                </header>

                <GamePosts history={history} />
            </div>
        )
    }
};

export default Homepage;