import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src={props.post_information.ProfilePage.avatar}/>
                <div className={s.infoPost}>
                    <span>{props.post_information.ProfilePage.name}</span>
                    <span>My first post</span>
                </div>
            </div>
            <div className={s.text}>
                <span>
                    My first post
                </span>
            </div>
            <div className={s.postLike}>
                <span>{props.likes} like</span>

                <div className={s.commentDivided}>
                    <span>com 4</span>
                    <span>divi 1</span>
                </div>
            </div>
        </div>

    )
};
export default Post;