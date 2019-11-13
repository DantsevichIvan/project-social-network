import React from 'react';
import s from './imgPhoto.module.css';
import userFototos from "../../img/pngtree-users-vector-icon-png-image_3725294.jpg";


const ImgPhoto = ({small}) => {
    return (
        <div className={s.userPhoto}>
                <img src={small === null? userFototos: small }/>
        </div>
    )
};

export default ImgPhoto;