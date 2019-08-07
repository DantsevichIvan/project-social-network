import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.mainImg}>
            <div className={s.userInfo}>
                <img src={props.info.avatar}/>
                <div>{props.info.name}</div>
                <div>{props.info.city}</div>
            </div>
    </div>)
};

export default ProfileInfo;