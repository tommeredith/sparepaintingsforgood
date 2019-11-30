import { GOOGLE_LOGIN_RECEIVE, GOOGLE_LOGIN_FAILURE } from '../actions/googleLogin'

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const authedUser = (state = initialState, action) => {

    switch (action.type) {

        case GOOGLE_LOGIN_FAILURE:
            return {
                error: action.payload.error,
                data: null,
                loading: false
            }

        case GOOGLE_LOGIN_RECEIVE:
            return {
                error: null,
                data: action.payload.response,
                loading: false
            }
    
        default:
            return state;
    }

}