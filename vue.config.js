module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/frontEnd/'
    : '/',
  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
