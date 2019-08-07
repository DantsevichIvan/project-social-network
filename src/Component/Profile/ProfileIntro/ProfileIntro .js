import React, {Component} from 'react';
 import s from './ProfileIntro.module.css';

const ProfileIntro = (props) => {
    return (
        <div className={s.userIntro}>
           <div className={s.title}>
               <span >Profile Intro</span>
           </div>
            <div className={s.userInfo}>
                <span className={s.infoTitle}>About Me</span>
                <span className="text"> props.intro.ProfilePage.about_me</span>
            </div>
            <div className={s.userInfo}>
                <span className={s.infoTitle}>Favourite TV Shows:</span>
                {props.intro.tv_show.map((el)=>{
                    return <div><span className="text">{el}</span></div>
                })}
            </div>
            <div className={s.userInfo}>
                <span className={s.infoTitle}>Favourite Music Bands/Artists:</span>
                {props.intro.favourite_music_bands.map((el)=>{
                    return <div><span className="text">{el}</span></div>
                })}
            </div>
        </div>)};


export default ProfileIntro;
