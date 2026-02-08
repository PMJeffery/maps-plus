var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['maps-plus'],
    resolve: {
        extensions: ['.js'],
        alias: {
            'maps-plus': path.join(__dirname, 'src/maps-plus.js')
        }
    },
    output: {
        filename: 'visualization.js',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /leaflet\.spin\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        L: 'leaflet'
                    }
                }
            },
            {
                test: /HeatLayer\.js$/,
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            L: 'leaflet',
                            simpleheat: 'simpleheat'
                        }
                    }
                ]
            },
            {
                test: /leaflet\.awesome-markers\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        L: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet-vector-markers\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        L: 'leaflet'
                    }
                }
            },
            {
                test: /leaflet\.featuregroup\.subgroup-src\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        L: 'leaflet'
                    }
                }
            },
            {
                test: /Modal\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        _: 'underscore'
                    }
                }
            },
            {
                test: /CLDRPluralRuleParser\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.emitter\.bidi\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.emitter\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.fallbacks\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.language\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.messagestore\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /jquery\.i18n\.parser\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            },
            {
                test: /leaflet-measure\.js$/,
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            L: 'leaflet'
                        }
                    }
                ]
            },
            {
                test: /LeafletPlayback\.js$/,
                use: {
                    loader: 'imports-loader',
                    options: {
                        $: 'jquery',
                        jQuery: 'jquery'
                    }
                }
            }
        ]
    },
    externals: [
        'api/SplunkVisualizationBase',
        'api/SplunkVisualizationUtils',
        'splunkjs/mvc'
    ]
};
