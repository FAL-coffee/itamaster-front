import runningBtns from "@organisms/TestCase/grouping/RunningBtns.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestCase/grouping/RunningBtns",
  components: { runningBtns },
  argTypes: {
    locked: { control: { type: "boolean" } },
    enabled: { control: { type: "boolean" } },
    lock: { action: "lock" },
    unlock: { action: "unlock" },
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { runningBtns },
  template:
    '<runningBtns @lock="lock" @unlock="unlock" @completion="completion"/>',
});
export const RunningBtns = Template.bind({});
RunningBtns.args = {
  locked: true,
  enabled: true,
};
