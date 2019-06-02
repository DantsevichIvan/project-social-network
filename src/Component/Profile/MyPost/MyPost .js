import React, {Component} from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div><Post post_information={props.posts_information}/></div>
    )


    {/*<Post messeges="My  first post" likes="30"/>*/
    }
};
export default MyPost;