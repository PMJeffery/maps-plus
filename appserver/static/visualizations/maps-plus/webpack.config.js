var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['maps-plus'],
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    output: {
        filename: 'visualization.js',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /leaflet\.spin\.js$/,
                use: 'imports-loader?L=leaflet'
            },
            {
                test: /HeatLayer\.js$/,
                use: ['imports-loader?L=leaflet', 'imports-loader?simpleheat']
            },
            {
                test: /leaflet\.awesome-markers\.js$/,
                use: 'imports-loader?L=leaflet'
            },
            {
                test: /leaflet-vector-markers\.js$/,
                use: 'imports-loader?L=leaflet'
            },
            {
                test: /leaflet\.featuregroup\.subgroup-src\.js$/,
                use: 'imports-loader?define=>false'
            },
            {
                test: /Modal\.js$/,
                use: 'imports-loader?_=underscore'
            },
            {
                test: /CLDRPluralRuleParser\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.emitter\.bidi\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.emitter\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.fallbacks\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.language\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.messagestore\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /jquery\.i18n\.parser\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            },
            {
                test: /leaflet-measure\.js$/,
                use: ['imports-loader?L=leaflet', 'transform-loader/cacheable?brfs']
            },
            {
                test: /LeafletPlayback\.js$/,
                use: 'imports-loader?$=jquery,jQuery=jquery'
            }
        ]
    },
    externals: [
        'api/SplunkVisualizationBase',
        'api/SplunkVisualizationUtils',
        'splunkjs/mvc'
    ]
};
