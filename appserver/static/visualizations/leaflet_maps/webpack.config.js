var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['leaflet_maps'],
    resolve: {
        extensions: ['.js'],
        alias: {
            'leaflet_maps': path.join(__dirname, 'src/leaflet_maps.js')
        }
    },
    output: {
        filename: 'visualization.js',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /leaflet\.markercluster-src\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        l: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet\.awesome-markers\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        l: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet-vector-markers\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        l: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet\.featuregroup\.subgroup-src\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        l: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet-measure\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        l: 'leaflet'
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
