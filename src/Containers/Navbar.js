import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from "../store/actions/authorization"
import "./Navbar.css";


class Navbar extends Component {
    logOut = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="fas fa-gamepad"></i> GamerSite
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" style={{color:"white"}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            this.props.currentUser.isAuthenticated ? (
                                    <ul className="navbar nav ml-auto">
                                        <li className="nav-item">
                                            {this.props.currentUser.user.profileImageUrl ? (
                                                <img className="profile-img" alt="profile-img" href={this.props.currentUser.user.profileImageUrl}/>
                                            ) : (<i className="fas fa-user-circle" style={{marginRight:"10px"}}></i>)}

                                            {this.props.currentUser.user.username}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#" onClick={this.logOut}>
                                                <i className="fas fa-sign-out-alt"></i> Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                )
                                : (
                                    <ul className="navbar nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/signup">
                                                <i className="fas fa-user-plus"></i> SignUp
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login">
                                                <i className="fas fa-sign-in-alt"></i> LogIn
                                            </Link>
                                        </li>
                                    </ul>
                                )
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {logout})(Navbar);