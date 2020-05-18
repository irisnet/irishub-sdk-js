const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const root = path.resolve(`${__dirname}/..`);
const srcRoot = `${root}/src`;
const production = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: `${srcRoot}/index.ts`,
    output: {
        path: `${root}/dist`,
        filename: 'index.js',
        library: 'irishub-sdk',
        libraryTarget: 'umd'
    },
    externals: {
        "@irisnet/amino-js": "https://github.com/irisnet/amino-js#ibc-alpha"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.ts$/,
            include: [srcRoot],
            use: [{
                loader: 'eslint-loader',
                options: {
                    failOnWarning: production
                }
            }]
        }, {
            test: /\.ts$/,
            include: [srcRoot],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: [
                            '@babel/preset-typescript',
                            ['@babel/preset-env', {
                                targets: {
                                    chrome: '73',
                                    ie: '11',
                                    firefox: '66',
                                    safari: '12'
                                }
                            }]
                        ]
                    }
                }
            ]
        }]
    }
};
