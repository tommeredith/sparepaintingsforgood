import React from 'react'
import { connect } from 'react-redux'
import { compose } from '../../constants/compose'
import GoogleLogin from 'react-google-login'
import { loginReceive, loginFail } from '../../actions/googleLogin'

const Landing = ({ loginReceive, loginError }) => {

    return (
        <div>
            <GoogleLogin
                clientId="295729751609-1d5t4nnfe5tp53il9ttpgl1v9ddnvrsa.apps.googleusercontent.com" 
                onSuccess={response => loginReceive(response)}
                onFailure={error => loginError(error)}
                buttonText="log in with google"
            />
        </div>
    )
}

export default compose(
    connect(
        null,
        dispatch => ({
            loginReceive: response => dispatch(loginReceive(response)),
            loginError: error => dispatch(loginFail(error))
        })
    )
)(Landing)