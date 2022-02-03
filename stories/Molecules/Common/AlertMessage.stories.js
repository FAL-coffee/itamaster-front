import alertMessage from "@molecules/Common/AlertMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
import i18n from "@v-plugin/i18n.js";
export default {
  title: "Molecules/Common/AlertMessage",
  components: { alertMessage },
  argTypes: {
    readed: { action: "readed" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { alertMessage },
  i18n,
  vuetify,
  template: '<alertMessage v-bind="$props" @readed="readed"/>',
});
export const ErrorAlertMessage = Template.bind({});
ErrorAlertMessage.args = {
  error: {
    displayFlag: true,
    status: "error",
    messages: ["testError01", "testError02"],
  },
};
export const ExceptionAlertMessage = Template.bind({});
ExceptionAlertMessage.args = {
  error: {
    displayFlag: true,
    status: "exception",
    messages: ["testError01", "testError02"],
  },
};
