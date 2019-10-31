import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../innerComponent/Preloader";
import userFototos from "../../../img/pngtree-users-vector-icon-png-image_3725294.jpg";

const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader/>
    }
    return (
        <div className={s.mainImg}>
            <div className={s.userInfo}>

                <img src={props.profile.photos.small === null? userFototos: props.profile.photos.small }/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
    </div>)
};

export default ProfileInfo;