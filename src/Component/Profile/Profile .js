import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import MyPost from "./MyPost/MyPost ";
import ProfileInfo from "./ProfileInfo/ProfileInfo ";
import ProfileIntro from "./ProfileIntro/ProfileIntro ";
import AddPost from "./AddPost/AddPost";
import ProfilePhotos from "./ProfilePhotos/ProfilePhotos ";
import Friends from "./Friends/Friends";
import {getProfileState} from "../../redux/Profile_Actoin";
import PostContainer from "./MyPost/MyPost ";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo info={props.profile.ProfilePage}/>
            <div className={s.posts}>
                <ProfileIntro intro={props.profile.ProfilePage}/>
                <div>
                    <PostContainer posts_information={props.profile.ProfilePage}/>
                </div>
                <div>
                    <ProfilePhotos photos={props.profile.ProfilePage}/>
                    <Friends friends={props.profile.ProfilePage}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profile
});


const mapDispatchToProps = (dispatch) => ({
    init: () => {
        dispatch(getProfileState())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);