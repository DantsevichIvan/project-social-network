import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./redux/ProfileReducer";
import thunkMiddleware from '../node_modules/redux-thunk';
import DialoguesReducer from "./redux/DialoguesReducer";
import UsersReducer from "./redux/UsersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    profilePage: ProfileReducer,
    dialogues: DialoguesReducer,
    usersPage: UsersReducer
}), composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store