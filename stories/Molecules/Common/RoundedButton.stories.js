import roundedButton from "@molecules/Common/RoundedButton.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Common/RoundedButton",
  components: { roundedButton },
  argTypes: {
    btnClick: { action: "btnClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { roundedButton },
  template: '<roundedButton v-bind="$props" @btnClick="btnClick"/>',
});
export const RoundedButton = Template.bind({});
RoundedButton.args = {
  text: "rounded",
};
