import {ADD_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
	    case ADD_COMMENT:
		    let newState = {...state}
			const { commentid, user, text } = payload

			newState[ commentid ] = { id: commentid, user: user || "nouser", text: text || "notext" }

		    return newState
    }

    return state
}