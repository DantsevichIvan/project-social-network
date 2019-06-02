import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.mainImg}>
            <div className={s.userInfo}>
                <img src={props.info.ProfilePage.avatar}/>
                <div>{props.info.ProfilePage.name}</div>
                <div>{props.info.ProfilePage.city}</div>
            </div>
    </div>)
};

export default ProfileInfo;