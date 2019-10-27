import React from 'react';
import s from './AddPost.module.css';
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile_Actoin";
// import {action_constant, addPostActionCreator, updateNewPostTextActionCreator} from "../../../State";


const AddPost = (props) => {
    let posts_info = props.posts;
    let newPostElement = React.createRef()
    return (
        <div className={s.addpost}>
            <div className={s.item}>
                <img src={posts_info.avatar}/>
                <textarea cols={100}
                          rows={7}
                          onChange={(event) => {
                              let newPostElement = event.currentTarget.value
                              // let text = newPostElement.current.value;
                              props.onPostChange(newPostElement)
                              console.log(newPostElement)
                          }}
                          value={posts_info.newPostText}/>
            </div>
            <div className={s.button}>
                <button
                    onClick={() => {
                        props.addNewPost()
                    }}>Add Post
                </button>
            </div>
        </div>
    )
};


export default AddPost;