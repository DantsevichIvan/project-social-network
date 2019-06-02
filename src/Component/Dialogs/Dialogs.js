import React, {Component} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Messages";

let dialogUser = [
    {name: "Diana Jameson", id: "1"}
    // {name: "Sveta", id: "2"},
    // {name: "Sacha", id: "3"},
    // {name: "Maxim", id: "4"},
    // {name: "Liza", id: "5"}]
];

const Dialogs = (props) => {

    return (
        <div>
            <div className={s.heading}>
                <span>Chat/Messages</span>
            </div>

            <div className={s.dialogs}>
                {dialogUser.map((el) => {
                    return (
                        <Dialog name={el.name} id={el.id}/>
                    )
                })}
                <div>
                    <span>Diana Jameson</span>
                    <Message/>
                </div>

            </div>


        </div>

    )
};
export default Dialogs;