import rootReducers from './reducers/index';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

export function configureStore() {
    let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(thunk),
            //devTools
        )
        );
        return store;
}