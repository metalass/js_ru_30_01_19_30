import React, {Component, PropTypes} from 'react'

class Comment extends Component {
	static propTypes = {
		comment: PropTypes.shape({
			text: PropTypes.string.isRequired,
			user: PropTypes.string.isRequired,
			title: PropTypes.string
		}).isRequired
	}

	render() {
		const {text, user, title} = this.props.comment;
		return (
			<div>
				{title ? <h4><b>{title}</b></h4> : ''}
	            {text}
	            {user && <b> by {user}</b>}
			</div>
		)
	}
}


export default Comment