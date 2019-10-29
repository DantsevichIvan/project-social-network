export const SET_USERS = 'RECENTCOMMENTS::SET_USERS';
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT';
export const SET_TOGGLE_IS_FETCHING = 'RECENTCOMMENTS::SET_TOGGLE_IS_FETCHING';


const initState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case  SET_TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
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

export default UsersReducer