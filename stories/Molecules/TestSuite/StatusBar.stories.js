import statusBar from "@molecules/TestSuite/StatusBar.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestSuite/StatusBar",
  components: { statusBar },
  argTypes: {
    testcase: { control: { type: "range", min: 1, max: 100, step: 1 } },
    complete: { control: { type: "range", min: 1, max: 100, step: 1 } },
    retest: { control: { type: "range", min: 1, max: 100, step: 1 } },
    issue: { control: { type: "range", min: 1, max: 100, step: 1 } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { statusBar },
  template: '<statusBar v-bind="$props"/>',
});
export const StatusBar = Template.bind({});
StatusBar.args = {
  testcase: 30,
  complete: 10,
  retest: 5,
  issue: 8,
};
