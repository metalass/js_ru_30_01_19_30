import React from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'
import {articles} from './fixtures'

render(<ArticleList articles={articles} />, document.getElementById('container'));

if (!location.host) {
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = "http://localhost:35729/livereload.js";
	document.body.appendChild(js);
}