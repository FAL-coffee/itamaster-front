import simpleDesign from "@organisms/Top/SimpleDesign.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/SimpleDesign",
  components: { simpleDesign },
  argTypes: {
    signin: { action: "signin" },
    signup: { action: "signup" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { simpleDesign },
  template: '<simpleDesign @signin="signin" @signup="signup"/>',
});
export const SimpleDesign = Template.bind({});
SimpleDesign.args = {};
