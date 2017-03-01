import {ADD_COMMENT, LOAD_COMMENTS_PAGE, SUCCESS, START} from '../constants'
import {arrayToMap, mapToArr} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record, List} from 'immutable'


const defaultState = Record({
	isLoading: false,
	isLoaded: false,
	entities: new List([]),
	total: false
})()


export default (state = defaultState, action) => {
	console.log(action, state);
	const {type, payload, randomId, response} = action

	switch (type) {
		case LOAD_COMMENTS_PAGE + START:
			return state.set('isLoading', true).set('isLoaded', false)

		case LOAD_COMMENTS_PAGE + SUCCESS:
			var size = state.entities.size,
				offset = payload.offset,
				nullArray = [],
				comments = response.records.map(comment => comment.id)

			for (var f = offset - size; f > 0; f--) {
				nullArray.push(null); // метод (immutable)List.splice при передаче ему в первом аргументе несуществующего индекса не создает "пустоты", как это бывает с обычным JavaScript-массивом, в связи с чем, мне самому приходится наполнять его пустотой
			}

			return state.set('total', response.total).set('isLoading', false).set('isLoaded', true).updateIn(['entities'], entities => entities.splice(0, 0, ...nullArray).splice(offset, payload.limit, ...comments));
	}

	return state
}