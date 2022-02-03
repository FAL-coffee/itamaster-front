import completionConfMessage from "@molecules/Msg/CompletionConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/CompletionConfMessage",
  components: { completionConfMessage },
  argTypes: {
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { completionConfMessage },
  template: '<completionConfMessage v-bind="$props" @completion="completion"/>',
});
export const CompletionConfMessage = Template.bind({});
CompletionConfMessage.args = {};
