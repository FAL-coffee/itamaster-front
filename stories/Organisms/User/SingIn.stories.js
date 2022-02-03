import signIn from "@organisms/User/SignIn.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/SignIn",
  components: { signIn },
  argTypes: {
    signin: { action: "signin" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { signIn },
  template: '<signIn v-bind="$props" @signin="signin" />',
});
export const SignIn = Template.bind({});
SignIn.args = {};
