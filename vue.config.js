module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  }
};
