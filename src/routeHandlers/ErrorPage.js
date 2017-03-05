import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h1>{this.context.msg.ERROR}: {this.props.location.query.message}</h1>
            </div>
        )
    }
}

export default ErrorPage