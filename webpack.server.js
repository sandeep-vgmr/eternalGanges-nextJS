const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            }
        ]
    }
};