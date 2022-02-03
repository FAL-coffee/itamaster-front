import exceptionMessage from "@molecules/Msg/AlertMessage/ExceptionMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/AlertMessage/ExceptionMessage",
  components: { exceptionMessage },
  argTypes: {
    readed: { action: "readed" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { exceptionMessage },
  template: '<exceptionMessage v-bind="$props" @readed="readed"/>',
});
export const ExceptionMessage = Template.bind({});
ExceptionMessage.args = {
  error: {
    displayFlag: true,
    status: "error",
    messages: ["testError01", "testError02"],
  },
};
