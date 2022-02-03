import colors from "vuetify/es5/util/colors";
import { resolve } from "path";
require("dotenv").config();
const { API_KEY } = process.env;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: "static",
  telemetry: false,
  ssr: false,
  performance: {
    hints: false,
  },
  env: {
    API_KEY,
  },
  generate: {
    fallback: true,
  },
  // // develop用
  // generate : {
  //    devtools: true
  // },
  server: {
    port: 8000, // デフォルト: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Itamaster",
    script: [{ src: "https://js.stripe.com/v3" }],
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vuetify/dist/vuetify.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // './plugins/vuetify.js'
    "./plugins/demoRoutePush.js",
    "./plugins/routePush.js",
    "./plugins/stripe.js",
    // './plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  gtm: {
    id: process.env.VUE_APP_GTAG_VALUE,
    pageTracking: true,
    pageViewEventName: "myCustomEvent",
  },

  "google-gtag": {
    id: process.env.VUE_APP_GTAG_VALUE,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/auth'
    // 'nuxt-stripe-module',
    "@nuxtjs/gtm",
    "@nuxtjs/google-gtag",

    [
      "nuxt-i18n",
      {
        // 使用する言語の設定
        locales: [
          { code: "en", name: "English", file: "en.json" },
          { code: "ja", name: "Japanese", file: "ja.json" },
        ],
        defaultLocale: "en", // デフォルトの言語
        langDir: "locales/", // 翻訳ファイルのディレクトリパス
        strategy: "prefix", // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
          // 翻訳ファイルが見つからなかった場合の言語を指定
          fallbackLocale: "en",
        },
        detectBrowserLanguage: {
          useCookie: true, // 検出・設定した言語をクッキーに保存する設定
          cookieKey: "i18n_redirected", // クッキーのキー名
        },
        seo: true,
        vueI18nLoader: true,
        lazy: true, // 遅延読み込みの有効化
      },
    ],
  ],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#2196F3",
          secondary: "#8345A5",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
    icons: {
      iconfont: "mdi",
    },
  },
  alias: {
    "@": resolve(__dirname),
    // '@': path.resolve(__dirname + '/resources/js'),
    "@molecules": resolve(__dirname, "/components/Molecules"),
    "@organisms": resolve(__dirname, "/components/Organisms"),
    "@template": resolve(__dirname, "/components/Template"),
    "@v-plugin": resolve(__dirname, "/plugins"),
    // '@component': __dirname + '/resources/js/components',
    // '@atoms': __dirname + '/resources/js/components/Atoms',
    // '@molecules': __dirname + '/resources/js/components/Molecules',
    // '@organisms': __dirname + '/resources/js/components/Organisms',
    // '@template': __dirname + '/resources/js/components/Template',
    // '@pages': __dirname + '/resources/js/components/Pages',
    // '@repositories':__dirname + '/resources/js/repositories',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  publicPath: "_nuxt/dist/",
  buildDir: "_nuxt",
  build: {
    // babel: {
    //   presets({ isServer }, [preset, options]) {
    //     options.loose = true
    //   },
    // },
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-private-methods",
          {
            loose: true,
          },
        ],
      ],
    },
    extend(config, ctx) {
      let path = require("path");
      (config.resolve.alias["@molecules"] = path.join(
        __dirname,
        "/components/Molecules"
      )),
        (config.resolve.alias["@organisms"] = path.join(
          __dirname,
          "/components/Organisms"
        )),
        (config.resolve.alias["@template"] = path.join(
          __dirname,
          "/components/Template"
        )),
        (config.resolve.alias["@parts"] = path.join(
          __dirname,
          "components/parts"
        ));
    },
  },
};
