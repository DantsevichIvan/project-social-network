import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../innerComponent/Preloader";
import ImgPhoto from "../../innerComponent/imgPhoto";
import ProfileData from "../ProfileIntro/ProfileData ";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainImg}>
            <div className={s.userInfo}>
                <ImgPhoto small={profile.photos.small}/>
            </div>
            <div>
                <ProfileData profile={profile}/>
            </div>
        </div>)
};



export default ProfileInfo;