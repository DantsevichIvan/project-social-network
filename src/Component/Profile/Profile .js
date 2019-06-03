import React, {Component} from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost ";
import ProfileInfo from "./ProfileInfo/ProfileInfo ";
import ProfileIntro from "./ProfileIntro/ProfileIntro ";
import AddPost from "./AddPost/AddPost";
import ProfilePhotos from "./ProfilePhotos/ProfilePhotos ";
import Friends from "./Friends/Friends";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo info={props.profileState}/>
        <div className={s.posts}>
            <ProfileIntro intro={props.profileState}/>
            <div>
                <AddPost posts={props.profileState}/>
                <MyPost posts_information={props.profileState}/>
            </div>
            <div>
                <ProfilePhotos photos={props.profileState}/>
                <Friends friends={props.profileState}/>
            </div>

        </div>
    </div>
};
export default Profile;