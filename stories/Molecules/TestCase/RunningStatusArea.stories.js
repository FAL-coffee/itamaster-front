import runningStatusArea from "@molecules/TestCase/RunningStatusArea.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestCase/RunningStatusArea",
  components: { runningStatusArea },
  argTypes: {
    status: {
      control: { type: "select", options: ["complete", "retest", "issue"] },
    },
    futureStatus: {
      control: { type: "select", options: ["complete", "retest", "issue"] },
    },
    statusSelect: { action: "statusSelect" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { runningStatusArea },
  template: '<runningStatusArea v-bind="$props" @statusSelect="statusSelect"/>',
});
export const RunningStatusArea = Template.bind({});
RunningStatusArea.args = {
  index: 1,
  status: "retest",
  futureStatus: "notRunning",
};
