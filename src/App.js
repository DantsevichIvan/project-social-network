import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile ";

import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div>
                    <Route path="/profile" render={()=> <Profile profileState={props.appState} />}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );

};
export default App;
