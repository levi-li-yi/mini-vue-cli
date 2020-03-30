module.exports = {
    plugins: {
        autoprefixer: {},
        '@moohng/postcss-px2vm': {
            viewportWidth: 750,
            rootValue: 750,
            unitPrecision: 6,
            minPixelValue: 1
        }
    }
}