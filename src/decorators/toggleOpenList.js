import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
	state = {
		openArticleId: null
	}

	toggleOpenArticle = openArticleId => ev => {
		ev && ev.preventDefault && ev.preventDefault()
		this.setState({
			openArticleId: openArticleId == this.state.openArticleId ? null : openArticleId
		})
	}

	render() {
		return <Component {...this.props} {...this.state} openArticleId={this.state.openArticleId} toggleOpen={this.toggleOpenArticle}/>
	}
}