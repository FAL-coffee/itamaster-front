import stepsInput from "@molecules/TestSuite/StepsInput.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestSuite/StepsInput",
  components: { stepsInput },
  argTypes: {
    stepsInputEnableSwitch: { action: "stepsInputEnableSwitch" },
    stepsChanged: { action: "stepsChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { stepsInput },
  template:
    '<stepsInput v-bind="$props" @stepsInputEnableSwitch="stepsInputEnableSwitch" @stepsChanged="stepsChanged"/>',
});
export const StepsInput = Template.bind({});
StepsInput.args = {
  steps: 50,
  stepsInputEnable: true,
};
