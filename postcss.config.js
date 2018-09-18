module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
            ],
        },
        'cssnano': {},
        'postcss-flexbugs-fixes': {}
    },
}