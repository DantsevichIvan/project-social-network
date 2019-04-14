import React, {Component} from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div>
        <div>

        </div>
        <Post messeges="My new post" likes="25"/>
        {/*<Post messeges="My  first post" likes="30"/>*/}
    </div>
};
export default MyPost;