import {DATE_RANGE_CHANGE} from '../constants'

export default (range = { from: null, to: null }, action) => {
	const {type, payload} = action

	switch (type) {
		case DATE_RANGE_CHANGE:
			return payload.range
	}

	return range
}