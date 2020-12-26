

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
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = 'Brooke\'s Point NHS';
      return args;
    });
  }
};
