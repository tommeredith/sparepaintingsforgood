import React from 'react'
import { connect } from 'react-redux'
import { compose } from '../../constants/compose'

const LandingAuthed = ({ authedUser }) => {

    return (
        <div>
            you're in, {authedUser.givenName}
        </div>
    )
}

export default compose(
    connect(
        state => ({
            authedUser: state.authedUser.data
        })
    )
)(LandingAuthed)