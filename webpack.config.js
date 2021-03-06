var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('dist/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/dist')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())
    .enableReactPreset()
    .addEntry('chessdb', './src/chessdb.jsx')
    .enableSassLoader()
    .cleanupOutputBeforeBuild()
    .enableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();
