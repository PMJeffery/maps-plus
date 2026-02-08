var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['google_street_view'],
    resolve: {
        extensions: ['.js'],
        alias: {
            'google_street_view': path.join(__dirname, 'src/google_street_view.js')
        }
    },
    output: {
        filename: 'visualization.js',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /Modal\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        _: 'underscore'
                    }
                }
            }
        ]
    },
    externals: [
        'api/SplunkVisualizationBase',
        'api/SplunkVisualizationUtils'
    ]
};
