import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import Navbar from "./Navbar";
import Main from "./Main";
import './App.css';
import {configureStore} from "../store/index";
import {setAuthToken, setCurrentUser} from "../store/actions/authorization";
import jwtDecode from 'jwt-decode';

const store = configureStore();
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        try {
            store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
        } catch (err) {
            store.dispatch(setCurrentUser({}));
        }
    }
const App = () => (
        <Provider store={store}>
            <Router>
                <div className="">
                    <Navbar/>
                    <Main/>
                </div>
            </Router>
        </Provider>

);

export default App;
