var path = require('path');

var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'js', 'main.jsx')
    },
    output: {
      path: path.join(__dirname, 'assets'),
      publicPath: '/assets/',
      filename: '[name].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: '/node_modules/',
          include: __dirname,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {test: /\.css$/, loader: 'style-loader!css-loader!postcss'},
        {test: /\.scss$/, loader: 'style-loader!css-loader!postcss!sass-loader'},
        {
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=8192&name=img/img-[hash:6].[ext]"
        },
        {test: /\.json/, loader: 'json-loader'},
      ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    resolve: {
        extensions: ['', '.json','.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]
};
