import {INCREMENT, DELETE_ARTICLE, SELECTION_CHANGE, DATE_RANGE_CHANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectionChange(selection) {
	return {
		type: SELECTION_CHANGE,
		payload: { selection }
	}
}

export function dateRangeChange(range) {
	return {
		type: DATE_RANGE_CHANGE,
		payload: { range }
	}
}