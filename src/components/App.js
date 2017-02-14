import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import DateRange from './DateRange'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'
import { selectionChange } from '../AC'
import { DateUtils } from 'react-day-picker'

class App extends Component {
    state = {
        user: ''
    }

    render() {
	    const {articles, selection, range: { from: fromRange, to: toRange }} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

	    // Я подумал, что фильтрацию на уровне сторов не нужно делать, т.к. в сторе статьи должны оставаться, фильтрация должна касаться именно вывода. Можно было бы передавать значения фильтров в компонент Article, и там уже фильтровать, но имхо данный вариант прозрачнее, надеюсь, я все верно сделал (с другой стороны, при обновлении значений в стор в качестве сайд-эффекта можно было бы изменять значение filteredArticles, но это как-то опять же путанно)
	    const selectedArticles = selection && selection.map(option => option.value);
	    const filteredArticles = articles.filter(article => {

		    // Проверка, задано ли какое-то значение в мультиселекте, фильтрация по нему
		    if (selection && selection.length && selectedArticles.indexOf(article.id) === -1) {
			    return false;
		    }

		    // Задан ли диапазон дат, фильтрация по нему
		    if (fromRange && toRange && !DateUtils.isDayInRange(new Date(article.date), { from: fromRange, to: toRange })) {
			    return false;
		    }

		    return true;
	    });

	    // Дополнительно в DateRange передаем даты первой и последней новостей, чтобы задать промежуток доступных для выбора дат
	    let lastDate, firstDate;
	    articles.forEach((article, index) => {
		    let date = new Date(article.date);
		    if (!lastDate || lastDate < date) {
			    lastDate = date;
		    }
		    if (!firstDate || firstDate > date) {
			    firstDate = date;
		    }
	    });

        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={selection} multi/>
                <DateRange lastDate={lastDate} firstDate={firstDate} />
                <ArticleList articles={filteredArticles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

	handleSelectChange = (selection) => this.props.selectionChange(selection)

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
	selection: state.selection,
	range: state.range
}), { selectionChange })(App)