import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isOpenItem} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpenItem(article.id)}
                toggleOpen={toggleOpenItem(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)

ArticleList.defaultProps = {
    articles: [],
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}