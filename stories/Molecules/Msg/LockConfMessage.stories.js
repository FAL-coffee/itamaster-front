import lockConfMessage from "@molecules/Msg/LockConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/LockConfMessage",
  components: { lockConfMessage },
  argTypes: {
    lock: { action: "lock" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { lockConfMessage },
  template: '<lockConfMessage v-bind="$props" @lock="lock"/>',
});
export const LockConfMessage = Template.bind({});
LockConfMessage.args = {};
