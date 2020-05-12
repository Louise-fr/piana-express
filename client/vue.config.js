const CompressionPlugin = require('compression-webpack-plugin');
//const ImageminPlugin = require('imagemin-webpack-plugin').default;
//const imageminMozjpeg = require('imagemin-mozjpeg');


// const myImageminPlugin = new ImageminPlugin({
//     plugins: [
//         imageminMozjpeg({
//             quality: 100,
//             progressive: true
//         })
//     ]
// })

const myCompressionPlugin = new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.(jpeg|jpg|svg|png|jpg|js|css|eot|woff|ttf)$/i,
})

module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch');
    config.plugin('CompressionPlugin').use(myCompressionPlugin);
    //config.plugin('ImageminPlugin').use(myImageminPlugin);
  }
};
