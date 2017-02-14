import {SELECTION_CHANGE} from '../constants'

export default (selection = null, action) => {
	const {type, payload} = action

	switch (type) {
		case SELECTION_CHANGE:
			return payload.selection
	}

	return selection
}