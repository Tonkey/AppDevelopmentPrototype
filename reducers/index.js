import { combineReducers } from 'redux'

import user from './userReducer'
import classes from './classReducer'

export default combineReducers({
    user: user,
    class: classes,
})