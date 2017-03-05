import React, { PropTypes } from 'react'

function Loader(props, context) {
	return (
        <h2>{context.msg.LOADING}</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
	msg: PropTypes.object
}

export default Loader