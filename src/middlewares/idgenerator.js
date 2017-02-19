import {ADD_COMMENT} from '../constants'
import {mapToArr} from '../utils'

export default store => next => action => {
	if (action.type && action.type == ADD_COMMENT) {
		var currentStore = store.getState();
		action.payload.commentid = mapToArr(currentStore.comments).reduce((max, comment) => {
			if (max < +comment.id) {
				max = +comment.id
			}
			return max;
		}, 0) + 1;
	}
	next(action)
}