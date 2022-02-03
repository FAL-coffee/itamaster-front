import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import vuetify from '../plugins/vuetify.js'
import i18n from '../plugins/i18n.js'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'

const vuetifyOptions = {}

Vue.use(Vuetify, {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
})

Vue.use(VueI18n)
Vue.mixin({
    i18n: new VueI18n({ locale: 'sg' }),
    localePath: (route, locale) => ({ route, locale }),
});
// export const parameters = {
//   backgrounds: {
//     value: [
//       { name: 'Sample BG 1', value: '#CCCCCC', default: true },
//       { name: 'Sample BG 2', value: '#000000' },
//     ],
//   },
// }

export const decorators = [
  () => {
    return (
    { vuetify,i18n,template: `<v-app><v-main><story/></v-main></v-app>`,}
  )}
]