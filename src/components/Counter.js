import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <a href="#" onClick={this.handleIncrement}>{this.context.msg.INCREMENT}</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect((state) => {
    return {
        count: state.count
    }
}, { increment }, null, {pure: false})(Counter)