import React, {Component} from 'react';
import s from './AddPost.module.css';

const addNewPost = () =>{

}

const AddPost = (props) => {
    return (
        <div className={s.addpost}>
            <div className={s.item}>
                <img src={props.posts.ProfilePage.avatar}/>
                <textarea cols={100} rows={7}/>
            </div>
            <div className={s.button}>
                <button onClick={addNewPost}>Get Post</button>
            </div>
        </div>
    )
};
export default AddPost;