import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class Paging extends Component {
	static propTypes = {

	};

	render() {
		const { page, perPage, total, url } = this.props

		const totalPages = total > 0 ? (total + perPage - 1) / perPage : 0
		let pages = [];

		if (page != 1) {
			pages.push(<span key="prev"><Link to={`${url}${page - 1}`}>previous</Link> </span>)
		}
		for (let p = 1; p <= totalPages; p++) {
			pages.push(p == page ? <span key={p}>{p} </span> : <span key={p}><Link to={`${url}${p}`}>{p}</Link> </span>);
		}
		if (page != totalPages) {
			pages.push(<span key="next"><Link to={`${url}${+page + 1}`}>next</Link> </span>)
		}

		return <div>Pages: {pages}</div>
	}
}

export default Paging