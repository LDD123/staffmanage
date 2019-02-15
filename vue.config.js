// vue.config.js
module.exports = {
  configureWebpack: {
    // plugins: [
    //   new MyAwesomeWebpackPlugin(),
    // ],
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }

}
