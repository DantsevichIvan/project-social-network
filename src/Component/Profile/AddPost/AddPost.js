import React, {Component} from 'react';
import s from './AddPost.module.css';
import {action_constant, addPostActionCreator, updateNewPostTextActionCreator} from "../../../State";


const AddPost = (props) => {

    let newPostElement = React.createRef()

    let addNewPost = () => {
        debugger
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    };

    return (
        <div className={s.addpost}>
            <div className={s.item}>
                <img src={props.posts.avatar}/>
                <textarea cols={100}
                          rows={7}
                          ref={newPostElement}
                          onChange={onPostChange}
                          value={props.posts.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick={addNewPost}>Add Post</button>
            </div>
        </div>
    )
};
export default AddPost;