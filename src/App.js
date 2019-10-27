import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile ";
import Dialogs from "./Component/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import {updateNewPostText} from "./State";

const App = (props) => {
    console.log(props)
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    {/*<Route path="/dialogs" render={()=> <Dialogs dialogsPage={props.state.dialogsPage}/> }/>*/}
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );

};
export default App;
