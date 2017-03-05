import React, { Component, PropTypes } from 'react'

class NotFoundPage extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h1>{this.context.msg.ERROR_PAGE_NOT_FOUND}</h1>
            </div>
        )
    }
}

export default NotFoundPage