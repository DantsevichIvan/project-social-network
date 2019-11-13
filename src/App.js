import React, {Component} from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import ProfileContainer from './Component/Profile/Component';
import Dialogs from "./Component/Dialogs/Dialogs";
import {Route, withRouter} from "react-router-dom";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import UsersContainer from "./Component/Users/UsersContainer";
import Login from './Component/Login/LoginPage'
import LogOut from "./Component/Login/LogOut";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";
import Preloader from "./Component/innerComponent/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initealezed){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div>
                    <Route path="/profile/:userId?" component={ProfileContainer}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/users" component={UsersContainer}/>
                    {/*<Route path="/dialogs" render={()=> <Dialogs dialogsPage={props.state.dialogsPage}/> }/>*/}
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={LogOut}/>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    initealezed: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
