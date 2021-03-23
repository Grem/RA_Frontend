const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isProduction ? 'none' : '#inline-source-map',
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /(node-modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    },
};