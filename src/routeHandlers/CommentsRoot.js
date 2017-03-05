import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h1>{this.context.msg.H1_COMMENTS_ROOT}</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot