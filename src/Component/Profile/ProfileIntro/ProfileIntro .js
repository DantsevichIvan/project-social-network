import React, {Component} from 'react';
 import s from './ProfileIntro.module.css';




const ProfileIntro = () => {
    return (
        <div className={s.userIntro}>
           <div className={s.title}>
               <span >Profile Intro</span>
           </div>

            <div className={s.userInfo}>
                <span className={s.infoTitle}>About Me</span>
                <span className="text"> Hi, I’m Ivan, I’m 22 and I like IT-INCUBATOR</span>
            </div>



            {/*<div>*/}
                {/*<span className="title">Favourite TV Shows:</span>*/}
                {/*<span className="text"> IT-INCUBATOR</span>*/}
            {/*</div>*/}
            {/*<div>*/}
                {/*<span className="title">Favourite Music Bands/Artists:</span>*/}
                {/*<span className="text">The Niebhoods</span>*/}
            {/*</div>*/}
        </div>)};


export default ProfileIntro;
