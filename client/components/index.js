import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom"
import { compose } from '../constants/compose'
import Landing from './Landing'
import LandingAuthed from './LandingAuthed'

const RouteWrap = ({ authedUser, store }) => {

    return (
        <Router>
            <main>
                <header>
                    <h1>
                        spare paintings for good
                    </h1>

                    <nav>
                        <ul>
                            <li>
                                
                            </li>
                            <li>

                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </nav>
                </header>

                <Route exact path="/" render={() => 
                    authedUser ? <LandingAuthed store={store} /> : <Landing store={store}/>
                } />
            </main>
        </Router>
    )
}

export default compose(
    connect(
        state => ({
            authedUser: state.authedUser.data
        })
    )
)(RouteWrap)
