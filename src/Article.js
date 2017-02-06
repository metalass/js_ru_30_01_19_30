import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
		{/*Вот с этим перемудрил, надо было просто <CommentList/> здесь написать*/}
	            {this.getComments()}
            </section>
        )
    }

	getComments() {
		const {comments} = this.props.article;
		return (
			<CommentList comments={comments}/>
		)
	}

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
