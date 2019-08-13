import thunkMiddleware from '../node_modules/redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./redux/ProfileReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    profile: ProfileReducer
}), composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store