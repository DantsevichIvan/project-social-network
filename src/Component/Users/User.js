import React from 'react'
import {NavLink} from "react-router-dom";
import ImgPhoto from "../innerComponent/imgPhoto";


const User = ({item, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                <span>
                    <NavLink to={'/profile/' + item.id}>
                        <div>
                         <ImgPhoto small={item.photos.small}/>
                    </div>
                    </NavLink>
                    <div>
                        {
                            item.followed ?
                                <button disabled={followingInProgress.some(id => id === item.id)} onClick={() => {
                                    unfollow(item.id)
                                }}>Unfollow</button> :
                                <button disabled={followingInProgress.some(id => id === item.id)} onClick={() => {
                                    follow(item.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                    </span>
                </span>
        </div>
    )
}

export default User