import {authAPI} from "../api/api";


export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_LOG_OUT = 'SUCCESS_LOG_OUT';
export const SUCCESS_ERROR = 'SUCCESS_ERROR';
export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const SET_ERROR_AUTH_USER_DATA = 'SET_ERROR_AUTH_USER_DATA';


const initState = {
    error: null,
    isAuth: false,
    userId: null,
    email: null,
    login: null
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN: {
            return {
                ...state,
                userId: action.data.userId,
                isAuth: true
            }
        }
        case SUCCESS_LOG_OUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        case SUCCESS_ERROR: {
            return {
                ...state,
                isAuth: action.data.isAuth,
                error: action.data.messages
            }
        }
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                isAuth: action.payloade.isAuth,
                userId: action.payloade.userId,
                email: action.payloade.email,
                login: action.payloade.login
            }
        }
        case SET_ERROR_AUTH_USER_DATA: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return {...state}
    }
};
export const SuccessLogin = (data) => {
    return {type: SUCCESS_LOGIN, data}
};
export const SuccessLogOut = () => {
    return {type: SUCCESS_LOG_OUT, }
};
export const SuccessError = (data) => {
    return {type: SUCCESS_ERROR, data}
};
export const setAuthUserData = (userId,email,login,isAuth) => {
    return {type: SET_AUTH_USER_DATA, payloade:{userId,email,login,isAuth} }
};
export const setErrorAuthUserData = () => {
    return {type: SET_ERROR_AUTH_USER_DATA}
};

export const getUser = () => async (dispatch) => {
    const res = await authAPI.getUser()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, email,login,true))
    } else {
        dispatch(setErrorAuthUserData())
    }
}
export const logIn = (email, password) => async (dispatch) => {
    const res = await authAPI.login(email, password)
        if (res.data.resultCode === 0){
            debugger
            dispatch(SuccessLogin(res.data.data))
        }else {
            dispatch(SuccessError(res))
        }
};

export const logOut = () => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0){
        debugger
        dispatch(SuccessLogOut(res))
    }
};

export default AuthReducer