import React, {Component} from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {connect} from "react-redux";
import AddPost from "../AddPost/AddPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile_Actoin";

const MyPost = (props) => {
    let {addNewPost, onPostChange} = props;
    let posts = props.posts;
    let list_posts = posts.map((el) => {
        return (
            <div>
                <Post post_information={props.posts_information} posts={el}/>
            </div>
        )

    });
    return (
        <div>
            <div>
                <AddPost posts={props.posts_information} addNewPost={addNewPost} onPostChange={onPostChange}/>
            </div>
            <div>
                {list_posts}
            </div>
        </div>

    )
};

const mapStateToProps = (state) => ({
    information_from_all : state.profile.ProfilePage,
    posts: state.profile.ProfilePage.posts
});


const mapDispatchToProps = (dispatch) => ({
    addNewPost: () => {
        dispatch(addPostActionCreator())
    },
    onPostChange: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }
});

const PostContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default PostContainer;