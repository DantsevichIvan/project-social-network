import React, {Component} from "react";
import {connect} from "react-redux";

import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {logOut} from "../../redux/auth-reducer";


class LogOut extends Component {
    logOut() {
        debugger
        this.props.logOut()
    }
    render() {
        return <div>
            <button onClick={this.logOut.bind(this)}>
                LogOut
            </button>
        </div>
    }
}


export default compose(
    connect(null, {logOut}),
    withAuthRedirect)(LogOut)

