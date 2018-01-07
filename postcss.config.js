module.exports = {
    plugins: [
        require('postcss-cssnext')({
            compress: true
        }),
        require('cssnano')({autoprefixer: false}),
    ]
}