import React from 'react';
import s from './ProfileIntro.module.css';

const ProfileData = ({profile}) => {
    debugger
    return (
        <div>
            <div>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
            )}
            </div>
        </div>
    )
};
const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>

}

export default ProfileData;
