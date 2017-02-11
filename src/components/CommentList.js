import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import CommentNew from './CommentNew'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
	    articleId: PropTypes.string.isRequired
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show',
	        { articleId } = this.props

        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
                <CommentNew articleId={articleId}/>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList