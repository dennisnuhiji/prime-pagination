var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Pagination.tsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Pagination.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader']
            }
        ]
        
    }
}