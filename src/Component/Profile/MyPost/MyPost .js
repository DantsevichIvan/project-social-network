import React, {Component} from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    let posts = props.posts_information.posts.map((el) => {
        return <div><Post post_information={props.posts_information} posts={el}/></div>
    });
    return (
        <div>
            {posts}
        </div>
    )
};
export default MyPost;