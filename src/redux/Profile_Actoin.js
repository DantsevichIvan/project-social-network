export const ADD_POST = 'RECENTCOMMENTS::ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'RECENTCOMMENTS::UPDATE_NEW_POST_TEXT';
export const GET_STATE = 'RECENTCOMMENTS::GET_STATE';


export const getProfileState = () => {
    debugger
    return {
        type: GET_STATE
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};