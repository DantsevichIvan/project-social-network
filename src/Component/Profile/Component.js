import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile ";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/ProfileReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (userId === undefined){
            userId = this.props.userId
        }
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId :state.auth.userId
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withUrlProfileContainer = withRouter(ProfileContainer)

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)