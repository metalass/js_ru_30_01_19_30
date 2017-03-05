import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    }

    state = {
        text: '',
        user: ''
    }

	static contextTypes = {
		msg: PropTypes.object
	}

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { articleId, addComment } = this.props
        addComment(this.state, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                {this.context.msg.FORM_COMMENT}: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                {this.context.msg.FORM_USER}: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, {addComment}, null, {pure: false})(NewCommentForm)