import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import Loader from './Loader'
import { loadComments } from '../AC'
import {mapToArr} from '../utils'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
	    const comments = this.props.comments && this.props.comments.get(this.props.articleId);
        if (!this.state.isOpen || !this.props.comments || !comments) return null
	    if (!comments.isLoaded) return <Loader />

	    const commentsList = mapToArr(comments.entities),
		    id = this.props.articleId;

        if (!commentsList.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = commentsList.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }

	componentWillUpdate(nextProps, nextState) {
		const comments = nextProps.comments && nextProps.comments.get(this.props.articleId);
		if (nextState.isOpen && (!comments || (!comments.isLoading && !comments.isLoaded))) this.props.loadComments(this.props.articleId)
	}

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect(
	(state) => {
		return {
			comments: state.comments
		}
	},
	{ loadComments }
)(CommentList)