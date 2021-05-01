//imported to combine your reducers into the root-reducer.
import { combineReducers } from 'redux';
//import for another reducer related to all user-state.
import userReducer from './user/user.reducer';
//export the combined reducers here to be injected into another 
export default combineReducers({
    user: userReducer
})