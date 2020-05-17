import {followAPI, userAPI} from "../api/api";
import {updateObjectInArray} from "../Component/innerComponent/object-helpen";

export const SET_USERS = 'RECENTCOMMENTS::SET_USERS';
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT';
export const SET_TOGGLE_IS_FETCHING = 'RECENTCOMMENTS::SET_TOGGLE_IS_FETCHING';
export const FOLLOW = 'RECENTCOMMENTS::FOLLOW';
export const UNFOLLOW = 'RECENTCOMMENTS::UNFOLLOW';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'RECENTCOMMENTS::TOGGLE_IS_FOLLOWING_PROGRESS';

const initState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case  SET_TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id', {followed: true} )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id', {followed: false} )
            }
        }
        case  TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return {...state}
    }
};

export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalUserCount) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalUserCount}
};
export const toggleIsFetching = (isFetching) => {
    return {type: SET_TOGGLE_IS_FETCHING, isFetching}
};
export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export const unfollowuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
};


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    debugger
    dispatch(setTotalUsersCount(data.totalCount));
};
const followUnfollowFlow = async (dispatch,userId, apiMethod, actionCreator) =>  {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if(data.resultCode === 0){
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
};
export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId,followAPI.followUsersApi.bind(followAPI),followSuccess)
};
export const unfollow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId,followAPI.unFollowUserApi.bind(followAPI),unfollowuccess)
};

export default UsersReducer