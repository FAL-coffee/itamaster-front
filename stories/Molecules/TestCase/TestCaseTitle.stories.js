import testCaseTitle from "@molecules/TestCase/TestCaseTitle.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestCase/TestCaseTitle",
  components: { testCaseTitle },
  argTypes: {
    testCaseTitleChanged: { action: "testCaseTitleChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testCaseTitle },
  template:
    '<testCaseTitle v-bind="$props" @testCaseTitleChanged="testCaseTitleChanged"/>',
});
export const TestCaseTitle = Template.bind({});
TestCaseTitle.args = {
  testCaseTitle: "",
};
