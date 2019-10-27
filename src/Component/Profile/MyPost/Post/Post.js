import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    let post_info = props.posts
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src={post_info.avatar}/>
                <div className={s.infoPost}>
                    <span>{post_info.name}</span>
                    <span>{post_info.span_date}</span>
                </div>
            </div>
            <div className={s.text}>
                <span>
                    {post_info.text_post}
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