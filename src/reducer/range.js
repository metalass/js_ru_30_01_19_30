import {DATE_RANGE_CHANGE} from '../constants'

//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (range = { from: null, to: null }, action) => {
	const {type, payload} = action

	switch (type) {
		case DATE_RANGE_CHANGE:
			return payload.range
	}

	return range
}
