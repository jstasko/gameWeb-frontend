import React, {Component} from "react";
import fifa from "../images/ronaldo.jpg"
import geralt from "../images/geralt.webp"
import mass from "../images/mass-effect.jpg"
import "./AuthentificationForm.css"

class AuthentificationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            profileImageUrl:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const authType = this.props.signup ? "signup" : "login";
        this.props.onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(() => {
                return;
            });
    };

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        const {email, username, password, profileImageUrl} = this.state;
        const {heading, signup, buttonLabel, error, history, removeError} = this.props;
        history.listen(() => (
            removeError()
        ));

        return (
            <div className="container">
                {
                    error.message && (
                        <div className="alert alert-danger"> {error.message} </div>
                    )
                }
                <div className="container form">
                    <div className="row">
                        <div className="col-md-4 authForm">
                            <form onSubmit={this.handleSubmit}>
                                <h2> {heading} </h2>
                                <label htmlFor="email"> email : </label>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={email}
                                    placeholder="email"
                                />
                                <label htmlFor="password"> password : </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={password}
                                    name="password"
                                    placeholder="password"
                                />
                                { signup && (
                                    <div>
                                        <label htmlFor="username"> username : </label>
                                        <input
                                            id="username"
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={username}
                                            placeholder="username"
                                        />
                                        <label htmlFor="profileImgUrl"> profileImgUrl : </label>
                                        <input
                                            type="text"
                                            id="profileImgUrl"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={profileImageUrl}
                                            name="profileImageUrl"
                                            placeholder="profile image"
                                        />
                                    </div>
                                )}
                                <button type="submit" className="btn btn-login btn-lg btn-block float-right"> {buttonLabel} </button>
                            </form>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={geralt} alt="First slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={fifa} alt="Second slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={mass} alt="Third slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AuthentificationForm;