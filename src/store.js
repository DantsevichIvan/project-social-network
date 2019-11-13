import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./redux/ProfileReducer";
import thunkMiddleware from '../node_modules/redux-thunk';
import DialoguesReducer from "./redux/DialoguesReducer";
import UsersReducer from "./redux/UsersReducer";
import AuthReducer from "./redux/auth-reducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./redux/appReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    auth: AuthReducer,
    profilePage: ProfileReducer,
    dialogues: DialoguesReducer,
    usersPage: UsersReducer,
    form: formReducer,
    app: appReducer
}), composeEnhancers(applyMiddleware(thunkMiddleware)));




export default store