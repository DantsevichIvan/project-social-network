import React, {Component} from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost ";
import ProfileInfo from "./ProfileInfo/ProfileInfo ";
import ProfileIntro from "./ProfileIntro/ProfileIntro ";

const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <div className={s.posts}>
            <ProfileIntro/>
            <MyPost/>
        </div>
    </div>
};
export default Profile;