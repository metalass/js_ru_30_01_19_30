import React, {Component} from 'react'
import {comments} from './fixtures'

export default class Comment extends Component {

	render() {
		const {comment} = this.props;
		return (
			<div>
				<div className="user"><i>{comment.user}</i></div>
				{this.getTitle(comment.title)}
				<p>{comment.text}</p>
			</div>
		);
	}

	getTitle(title) {
		if (title) {
			return (
				<h4><b>{title}</b></h4>
			);
		} else {
			return null;
		}
	}
}