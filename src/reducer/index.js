import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selection from './selection'
import range from './range'

export default combineReducers({
    count: counterReducer,
    articles,
	selection,
	range
})