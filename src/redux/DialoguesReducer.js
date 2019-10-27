import {ADD_POST, GET_STATE, UPDATE_NEW_POST_TEXT} from "./Profile_Actoin";

const initState = {
    DialogsPage: {
        dialogUser: [
            {
                name: "Diana Jameson",
                id: "1",
                message: ["Great, I’ll see you tomorrow!"],
                avatar: "https://pp.userapi.com/c844721/v844721732/1fe9d3/dF70fzsnBWk.jpg"
            },
            {
                name: "Elaine Dreyfuss",
                id: "2",
                avatar: 'https://sun1.dataix-by-minsk.userapi.com/c845322/v845322845/1984b6/4Cqgddgr7xQ.jpg?ava=1'
            },
            {
                name: "James Spiegel",
                id: "3",
                avatar: 'https://pp.userapi.com/c849132/v849132702/18ce7c/TLCCJkpJbLk.jpg?ava=1'
            },
            // {name: "Maxim", id: "4"},
            // {name: "Liza", id: "5"}]
        ]
    },
};


const DialoguesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_STATE : {
            return {
                ...state
            }
        }
        default:
            return {
                ...state
            }
    }
};


export default DialoguesReducer
