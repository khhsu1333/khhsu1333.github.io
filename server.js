var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use('/assets', express.static(__dirname + '/assets'));
app.use(webpackMiddleware(compiler, {
    // public path should be the same with webpack config
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function () {
    console.log('Server listening on port 3000 🌏');
});
