import {ADD_POST, SET_USER_PROFILE, setUserProfile, UPDATE_NEW_POST_TEXT} from "./Profile_Actoin";
import {profileAPI} from "../api/api";

const initState = {
    profile: null,
    newPostText: "gfdgdfg",
    posts: [
        {
            id: 1,
            text_post: 'My first post',
            likes: "25",
            span_date: "22.10",
            comments: "10",
            divi: "12"
        },
        {
            id: 2,
            text_post: 'My second post',
            likes: "10",
            span_date: "21.10",
            comments: "7",
            divi: "5"
        }],
};

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.data
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                text_post: state.ProfilePage.newPostText,
                likes: 0,
                span_date: "12.00",
                comments: 0,
                divi: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ProfilePage: {
                    ...state.ProfilePage,
                    newPostText: action.newText
                }
            }
        }
        default:
            return {
                ...state
            }
    }
};
export const getUserProfile = (userId) => async (dispatch) => {
    debugger
    const data = await profileAPI.getUser(userId)
    dispatch(setUserProfile(data))
}
export default ProfileReducer
