import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired,

		// Не знаю, нужно ли это указывать, т.к. декоратор можно убрать и тогда ошибки повалятся, но с другой стороны проверять в декораторе нет возможности, а проверять возможно нужно
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

    static defaultProps = {
        comments: []
    }

    render() {
        const actionText = this.props.isOpen ? 'hide' : 'show'
	    return (
            <div>
                <a href="#" onClick={this.props.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

// Не удержался, сделал-таки компонент stateless с декоратором, тем более вы его уже запрогали
export default toggleOpen(CommentList);