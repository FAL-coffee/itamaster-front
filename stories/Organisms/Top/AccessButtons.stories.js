import accessButtons from "@organisms/Top/AccessButtons.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/AccessButtons",
  components: { accessButtons },
  argTypes: {
    signin: { action: "signin" },
    signup: { action: "signup" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { accessButtons },
  template: '<accessButtons @signin="signin" @signup="signup"/>',
});
export const AccessButtons = Template.bind({});
AccessButtons.args = {};
