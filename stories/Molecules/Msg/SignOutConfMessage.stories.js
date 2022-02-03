import signOutConfMessage from "@molecules/Msg/SignOutConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/SignOutConfMessage",
  components: { signOutConfMessage },
  argTypes: {
    signout: { action: "signout" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { signOutConfMessage },
  template: '<signOutConfMessage v-bind="$props" @signout="signout"/>',
});
export const SignOutConfMessage = Template.bind({});
SignOutConfMessage.args = {};
