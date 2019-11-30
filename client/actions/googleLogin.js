export const GOOGLE_LOGIN_RECEIVE = 'GOOGLE_LOGIN_RECEIVE'
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE'


export const googleLoginReceive = response => ({
    type: GOOGLE_LOGIN_RECEIVE,
    payload: { response }
})

export const googleLoginFailure = error => ({
    type: GOOGLE_LOGIN_FAILURE,
    payload: { error }
})


export const loginFail = error => 
    dispatch => {
        dispatch(googleLoginFailure(error))
    }

export const loginReceive = response => 
    dispatch => {
        dispatch(googleLoginReceive(response.profileObj))
    }
