import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import {addComment} from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
	    const { user, text } = this.state
	    const { articleid } = this.props

        ev.preventDefault()
	    this.props.addComment(user, text, articleid);
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, { addComment })(NewCommentForm)