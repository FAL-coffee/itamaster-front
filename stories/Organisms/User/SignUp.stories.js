import signUp from "@organisms/User/SignUp.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/SignUp",
  components: { signUp },
  argTypes: {
    signup: { action: "signup" },
    toPrivacyPolicy: { action: "toPrivacyPolicy" },
    toTerms: { action: "toTerms" },
    toSpecifiedNotation: { action: "toSpecifiedNotation" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { signUp },
  template:
    '<signUp v-bind="$props" @signup="signup" @toPrivacyPolicy="toPrivacyPolicy" @toTerms="toTerms" @toSpecifiedNotation="toSpecifiedNotation" />',
});
export const SignUp = Template.bind({});
SignUp.args = {};
