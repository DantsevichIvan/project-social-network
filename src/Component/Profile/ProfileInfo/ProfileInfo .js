import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../innerComponent/Preloader";
import ImgPhoto from "../../innerComponent/imgPhoto";

const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader/>
    }
    return (
        <div className={s.mainImg}>
            <div className={s.userInfo}>
                <ImgPhoto small={props.profile.photos.small}  />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
    </div>)
};
export default ProfileInfo;