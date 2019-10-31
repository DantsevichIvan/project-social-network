import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import { setUserProfile} from "../../redux/Profile_Actoin";
// import Profile from "./Profile ";
import * as axoios from "axios";
import Profile from "./Profile ";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId === undefined){
            userId = 2
        }
        axoios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
              this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlProfileContainer);