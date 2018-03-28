import config from '~/config.js'

export const state = () => ({
  locales: config.langs.map(item => item.key),
  locale: 'en',
  loadedLangs: ['en'],
  indexNav: {}
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setIndexNav (state, ob) {
    state.indexNav = ob
  }
}