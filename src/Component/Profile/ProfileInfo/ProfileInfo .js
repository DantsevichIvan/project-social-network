import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.mainImg}>
        {/*<img*/}
            {/*src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>*/}
            <div className={s.userInfo}>
                <img src="https://pp.userapi.com/c845420/v845420985/be0ee/jOcHTD-YR7g.jpg"/>
                <div>Name</div>
                <div>City</div>
            </div>

    </div>)
};
export default ProfileInfo;