import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo ";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <div className={s.posts}>
                {/*<ProfileIntro intro={props.profile.ProfilePage}/>*/}
                <div>
                    {/*<PostContainer posts_information={props.profile.ProfilePage}/>*/}
                </div>
                <div>
                    {/*<ProfilePhotos photos={props.profile.ProfilePage}/>*/}
                    {/*<Friends friends={props.profile.ProfilePage}/>*/}
                </div>
            </div>
        </div>
    )
};

export default Profile ;