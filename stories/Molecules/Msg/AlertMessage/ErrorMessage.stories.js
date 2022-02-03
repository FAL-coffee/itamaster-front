import errorMessage from "@molecules/Msg/AlertMessage/ErrorMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/AlertMessage/ErrorMessage",
  components: { errorMessage },
  argTypes: {
    readed: { action: "readed" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { errorMessage },
  template: '<errorMessage v-bind="$props" @readed="readed"/>',
});
export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  error: {
    displayFlag: true,
    status: "error",
    messages: ["testError01", "testError02"],
  },
};
