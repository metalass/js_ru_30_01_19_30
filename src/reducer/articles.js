import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START, ADD_COMMENT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            // вроде корявенько, но как иначе, не знаю, туплю что-то ))
	    //варианты есть, но красиво все-равно не будет
	        return {...state, entities: arrayToMap(mapToArr(state.entities).filter(article => article.id != payload.id))}

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }

		case ADD_COMMENT:
			// правильно ли я тут поступаю. Поскольку состояние нужно не менять, а передавать новое, я клонирую объект состояния и вношу в него изменения. Просто как это завернуть в одну строчку, я как-то не догадался
		    	//Ты правильно понял, так не очень хорошо, стоит делать кучу спредов. Хочеш такого избежать - прийдется использовать immutable.js или аналог
			let newState = {...state};
			newState.entities[ payload.articleid ]["comments"].push(payload.commentid);
			return newState
    }

    return state
}
