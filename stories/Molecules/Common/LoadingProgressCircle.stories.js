import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Common/LoadingProgressCircle",
  components: { loadingProgressCircle },
  argTypes: {
    api: { control: { type: "boolean" } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { loadingProgressCircle },
  template: '<loadingProgressCircle v-bind="$props" @linkClick="linkClick"/>',
});
export const LoadingProgressCircle = Template.bind({});
LoadingProgressCircle.args = {
  api: false,
};
