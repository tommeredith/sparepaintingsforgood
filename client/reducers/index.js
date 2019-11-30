import { combineReducers } from "redux";
import { authedUser } from './authedUser'

export const rootReducer = combineReducers({
    authedUser
});