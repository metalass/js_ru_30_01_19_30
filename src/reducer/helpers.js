import {Record, Map} from 'immutable'

export const DefaultReducerState = Record({
    isLoading: false,
	isLoaded: false,
    entities: new Map({})
})