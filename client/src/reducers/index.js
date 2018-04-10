import { combineReducers } from 'redux'
import masters from './masters'
import filters from './filters'
// import comments from './comments'
// import filters from './filters'

export default combineReducers({
    masters,
    filters
    // comments,
    // filters
})