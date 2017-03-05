import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h1>{this.context.msg.H1_ARTICLE}</h1>
            </div>
        )
    }
}

export default ArticleIndexPage