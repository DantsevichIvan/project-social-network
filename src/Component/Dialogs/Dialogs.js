import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Chat from "./Messages/Messages";
import {getProfileState} from "../../redux/Profile_Actoin";
import {connect} from "react-redux";
import {getDialoguesState} from "../../redux/Dialogues_Actoin";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
// import Message from "./Messages/Messages";


const Dialogs = (props) => {
    return (
        <div className={s.general_block}>
            <div className={s.heading}>
                <span>Chat/Messages</span>
            </div>

            <div className={s.block_dialogs}>
                <div className={s.dialogs}>
                    {props.dialogues.DialogsPage.dialogUser.map((el) => {
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
const mapStateToProps = (state) => ({
    dialogues: state.dialogues
});


const mapDispatchToProps = (dispatch) => ({
    init: () => {
        dispatch(getDialoguesState())
    }
});



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);