import React, {Component} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getUser} from "../../redux/auth-reducer";

class Header extends Component {
    componentDidMount() {
        this.props.getUser()
    }
    render() {
        return (

            <header className={s.header}>
                <img src="http://www.bsatu.by/sites/default/files/images/logo.gif"/>

                {this.props.isAuth ?
                    <div><span>{this.props.login}</span> <NavLink to={'/logout'}>LogOut</NavLink></div> : <div>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>}
            </header>)
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getUser})(Header);