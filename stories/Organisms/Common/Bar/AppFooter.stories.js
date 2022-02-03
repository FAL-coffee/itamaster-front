import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/Bar/AppFooter",
  components: { appFooter },
  argTypes: {
    toContactForm: { action: "toContactForm" },
    toPrivacyPolicy: { action: "toPrivacyPolicy" },
    toHome: { action: "toHome" },
    toTop: { action: "toTop" },
    toTerms: { action: "toTerms" },
    toSpecifiedNotation: { action: "toSpecifiedNotation" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { appFooter },
  template: `<appFooter v-bind="$props" @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" @toTerms="toTerms"
             @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation"/>`,
});
export const AppFooter = Template.bind({});
AppFooter.args = {};
