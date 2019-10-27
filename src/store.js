import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./redux/ProfileReducer";
import thunkMiddleware from '../node_modules/redux-thunk';
import DialoguesReducer from "./redux/DialoguesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    profile: ProfileReducer,
    dialogues: DialoguesReducer
}), composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store