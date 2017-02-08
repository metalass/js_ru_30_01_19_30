import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpenList from '../decorators/toggleOpenList'

class ArticleList extends Component {

	static propTypes = {
		articles: PropTypes.array.isRequired,

		// Не знаю, нужно ли это указывать, т.к. декоратор можно убрать и тогда ошибки повалятся, но с другой стороны проверять в декораторе нет возможности, а проверять возможно нужно
		//стоит - уберешь декоратор, ошики повалятся не просто так - надо будет как-то по другому передавать
		openArticleId: PropTypes.string,
		toggleOpen: PropTypes.func
	}

    render() {
        const {articles, openArticleId, toggleOpen} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                toggleOpen={toggleOpen(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
}

export default toggleOpenList(ArticleList)
