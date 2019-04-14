import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src="https://pp.userapi.com/c845420/v845420985/be0ee/jOcHTD-YR7g.jpg"/>
                <div className={s.infoPost}>
                    <span>Name</span>
                    <span>Span date</span>
                </div>
            </div>
            <div className={s.text}>
                <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
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