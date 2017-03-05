import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
export {MenuItem}

class Menu extends Component {
    static propTypes = {

    };

	static contextTypes = {
		msg: PropTypes.object
	}

    render() {
        return (
            <div>
                <h2>{this.context.msg.MAIN_MENU}:</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu