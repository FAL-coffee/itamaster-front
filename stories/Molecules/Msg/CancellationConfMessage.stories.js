import cancellationConfMessage from "@molecules/Msg/CancellationConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/CancellationConfMessage",
  components: { cancellationConfMessage },
  argTypes: {
    terminateClick: { action: "terminateClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { cancellationConfMessage },
  template:
    '<cancellationConfMessage v-bind="$props" @terminateClick="terminateClick"/>',
});
export const CancellationConfMessage = Template.bind({});
CancellationConfMessage.args = {};
