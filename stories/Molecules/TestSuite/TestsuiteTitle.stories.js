import titles from "@molecules/TestSuite/TestsuiteTitle.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestSuite/TestsuiteTitle",
  components: { titles },
  argTypes: {
    titleChanged: { action: "titleChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { titles },
  template: '<titles v-bind="$props" @titleChanged="titleChanged"/>',
});
export const TestsuiteTitle = Template.bind({});
TestsuiteTitle.args = {
  text: "text",
};
