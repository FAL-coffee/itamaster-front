import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locales: [
    { code: "ja", name: "Japanese", iso: "ja_JP", file: "ja.json" },
    { code: "en", name: "English", iso: "en-US", file: "en.json" },
  ],
  langDir: "../locales",
});
