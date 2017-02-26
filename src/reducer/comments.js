import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const defaultState = new Map();

/*
* Я долго думал, как лучше организовать хранение комментов. И все же пришел к выводу, что лучшая реализация - это хранения в сторе по ключу comments иммутабельной Map,
* где ключ - это ИД статьи. Как следствие, хранине списка комментариев в статье вообще утрачивает значение, в редьюсере articles я закомментировал действия при
* ADD_COMMENT.
* Такая структура легко дополняется, если комментарии будут не только у статей. Единственный минус, в компоненте не избежать обращения к комментариям статей через
* get. Не очень хорошо, что компонент ожидает, что нужно будет работать с иммутабельным объектом, но как это обойти, я не знаю.
* Также очевидный минус, что компонент CommentList пришлось сделать умным, хотя возможно ли (и нужно ли) этого избежать - не знаю.
* */

const defaultReducerState = new DefaultReducerState()

const CommentModel = Record({
	id: null,
	text: null,
	user: []
})

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
	    case LOAD_COMMENTS + START:
		    return state.set(payload.id, defaultReducerState).setIn([payload.id, 'isLoading'], true)

	    case LOAD_COMMENTS + SUCCESS:
		    return state.setIn([payload.id, 'isLoading'], false).setIn([payload.id, 'isLoaded'], true).setIn([payload.id, 'entities'], arrayToMap(response, CommentModel))

	    case ADD_COMMENT:
		    const newComment = new CommentModel({...payload.comment, id: randomId});
            return state.setIn([payload.articleId, 'entities', randomId], newComment);
    }

    return state
}