import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu, {MenuItem} from './Menu'

class Root extends Component {
    static propTypes = {

    };

    state = {
        user: '',
	    lang: 'ru'
    }

    static childContextTypes = {
        user: PropTypes.string,
	    msg: PropTypes.object,
	    lang: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user,
	        lang: this.state.lang,
		//ок, только вынеси словари в отдельный файл
	        msg: this.state.lang == 'ru' ?
		        {
			        'DELETE_ME': 'Удалить',
			        'MAIN_MENU': 'Главное меню',
			        'HIDE_COMMENTS': 'Скрыть комментарии',
			        'SHOW_COMMENTS': 'Показать комментарии',
			        'NO_COMMENTS': 'Комментариев пока нет',
			        'USERNAME': 'Имя пользователя',
			        'INCREMENT': 'Увеличить',
			        'LOADING': 'Загрузка...',
			        'FORM_COMMENT': 'текст',
			        'FORM_USER': 'пользователь',
			        'H1_ARTICLE': 'Выберите статью из списка',
			        'H1_COMMENTS_ROOT': 'Комментарии постранично',
			        'ERROR': 'Ошибка',
			        'ERROR_PAGE_NOT_FOUND': 'По вашему запросу ничего не найдено'
		        }
		        :
		        {
					'DELETE_ME': 'Delete me',
			        'MAIN_MENU': 'Main menu',
			        'HIDE_COMMENTS': 'hide comments',
			        'SHOW_COMMENTS': 'show comments',
			        'NO_COMMENTS': 'No comments yet',
			        'USERNAME': 'Username',
			        'INCREMENT': 'Increment',
			        'LOADING': 'Loading...',
			        'FORM_COMMENT': 'comment',
			        'FORM_USER': 'user',
			        'H1_ARTICLE': 'Select Article',
			        'H1_COMMENTS_ROOT': 'Comments pagination',
			        'ERROR': 'Error',
			        'ERROR_PAGE_NOT_FOUND': 'sorry, page not found'
		        }
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
	                <div>
		                <a href='javascript:void(0);' onClick={this.handleLangChange('ru')} style={(this.state.lang == 'ru' ? {color: 'red'} : {})}>рус</a>
		                <a href='javascript:void(0);' onClick={this.handleLangChange('en')} style={(this.state.lang == 'en' ? {color: 'red'} : {})}>eng</a>
	                </div>
                    <input value={this.state.user} onChange={this.handleUserChange} />
                    <Menu>
                        <MenuItem path="/articles" />
                        <MenuItem path="/filters" />
                        <MenuItem path="/counter" />
                        <MenuItem path="/comments/1" />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }

	handleLangChange = lang => ev => {
		this.setState({
			lang: lang
		});
	}
}

export default Root
