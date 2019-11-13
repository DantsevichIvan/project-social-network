
import {getUser} from "./auth-reducer";


export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initState = {
    initialized: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return {...state}
    }
};

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUser())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer