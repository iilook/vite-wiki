const config = require('./config')

const generatePages = ['/', '/about', '/faq', '/whitePaper']
let generateRoutes = [].concat(generatePages)
config.langs.forEach(item => {
  generateRoutes = generateRoutes.concat(generatePages.map(page => {
    return `/${item.key}${page}`
  }))
})

module.exports = {
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'description', hid: 'description', content: 'A fast, feeless, decentralized transaction ledger'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'author', content: 'vite lab'},
      {name: 'keywords', content: 'vite,crypto,dag,bitcoin,vitecoin,contract platform'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#7FB2FE'
  },
  build: {
    extractCSS: true,
    vendor: ['vue-i18n', 'babel-polyfill', 'vue-typer'],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false // Fix bulma css warnings
        }
      }
    },
    extend (config) {
      config.resolve.alias['chart.js'] = 'chart.js/dist/Chart.min'
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js', '~/plugins/fontawesome'],
  generate: {
    routes: generateRoutes
  },
  modules: [
    '@nuxtjs/pwa',
    ['xui-module', {
      'mdi': {
        active: false // Do not load Material Design Icons
      },
      'bulma': {
        active: false
      },
      'hover.css': {
        active: false
      },
      'spacing': {
        active: false
      },
      'vue-headroom': {
        active: true
      }
    }],
    'nuxtent'
  ],
  css: [
    '~/assets/main.scss'
  ],
  render: {
    gzip: { threshold: 1 }
  }
}