var path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ]
    },


	watch: true,
	plugins: [
		new LiveReloadPlugin()
	]
}