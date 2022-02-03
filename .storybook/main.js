const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false
      }
    },
    "storybook-addon-i18n"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@":path.resolve(__dirname, "../"),
      "@molecules":path.resolve(__dirname, "../components/Molecules"),
      "@organisms":path.resolve(__dirname, "../components/Organisms"),
      "@template":path.resolve(__dirname, "../components/Template"),
      "@v-plugin":path.resolve(__dirname, "../plugins")
    };
    config.resolve.extensions.push(".js");
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
}
