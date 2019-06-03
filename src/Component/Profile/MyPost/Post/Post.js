import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src={props.post_information.ProfilePage.avatar}/>
                <div className={s.infoPost}>
                    <span>{props.post_information.ProfilePage.name}</span>
                    <span>{props.posts.span_date}</span>
                </div>
            </div>
            <div className={s.text}>
                <span>
                    {props.posts.text_post}
                </span>
            </div>
            <div className={s.postLike}>
                <span>{props.posts.likes} like</span>

                <div className={s.commentDivided}>
                    <span>com {props.posts.comments}</span>
                    <span>divi {props.posts.divi}</span>
                </div>
            </div>
        </div>

    )
};
export default Post;