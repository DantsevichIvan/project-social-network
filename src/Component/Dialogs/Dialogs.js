import React, {Component} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Chat from "./Messages/Messages";
// import Message from "./Messages/Messages";


const Dialogs = (props) => {
    return (
        <div className={s.general_block}>
            <div className={s.heading}>
                <span>Chat/Messages</span>
            </div>

            <div className={s.block_dialogs}>

                <div className={s.dialogs}>
                    {props.dialogsPage.dialogUser.map((el) => {
                        return (
                            <Dialog dialogUser={el}/>)
                    })}
                </div>

                <div>
                    <Chat/>
                </div>

            </div>
        </div>

    )
};
export default Dialogs;