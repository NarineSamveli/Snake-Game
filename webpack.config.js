const path = require('path');

module.exports = {
    entry: './src/classes/main.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
      },
    
      watch: true,
      watchOptions: {
        aggregateTimeout: 300, // Add a delay before rebuilding once the first file changed
        poll: 1000, // Check for changes every second 
        ignored: /node_modules/
      },

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    }
};