import React, { Component, PropTypes } from 'react'

class CommentNew extends Component {
	static propTypes = {
		articleId: PropTypes.string.isRequired
	}

	state = {
		newCommentTitle: "",
		newCommentText: ""
	}

	render() {
		const { articleId } = this.props

		return (
			<div className="addComment">
				<input type="hidden" name="articleId" value={articleId}/>
				<div><input type="text" name="title" value={this.state.newCommentTitle} onChange={this.handleFormChange('Title')}/></div>
				<div><textarea name="text" onChange={this.handleFormChange('Text')} value={this.state.newCommentText}/></div>
				<div><input type="submit" onClick={this.handleSubmitForm} value="Add comment"/></div>
			</div>
		)
	}

	handleFormChange = field => ev => {
		var newState = {};
		newState["newComment" + field] = ev.target.value;
		this.setState(newState);
	}

	handleSubmitForm = ev => {
		if (this.state.newCommentTitle && this.state.newCommentText) { // TODO VALIDATE
			// TODO send datas to server
			this.setState({
				newCommentTitle: "",
				newCommentText: ""
			});
			// TODO form sent message
		} else {
			alert("Все поля обязательные для заполнения"); // TODO Message
		}
	}
}

export default CommentNew