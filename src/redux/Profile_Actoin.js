export const ADD_POST = 'RECENTCOMMENTS::ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'RECENTCOMMENTS::UPDATE_NEW_POST_TEXT';
export const SET_USER_PROFILE = 'RECENTCOMMENTS::SET_USER_PROFILE';


export const setUserProfile = (data) => {
    return {
        type: SET_USER_PROFILE,
        data
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