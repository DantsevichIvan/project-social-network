import React, {Component} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Messag = (props) => {
    return (
        <div className={s.message}>{props.messag}</div>
    )
};


const Dialogs = (props) => {
    let dialogUser = [{name: "Ivan", id: "1"},{name: "Sveta", id: "2"},{name: "Sacha", id: "3"},{name: "Maxim", id: "4"},{name: "Liza", id: "5"}]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogUser.map((el) => {
                    return (
                        <div>
                            <Dialog name={el.name} id={el.id}/>
                        </div>
                    )
                })}
            </div>
            <div className={s.messages}>
                <Messag messag="Hi"/>
                <Messag messag="Hello"/>
                <Messag messag="What you do?"/>
            </div>

        </div>

    )
};
export default Dialogs;