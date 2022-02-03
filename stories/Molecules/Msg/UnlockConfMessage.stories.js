import unlockConfMessage from "@molecules/Msg/UnlockConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/UnlockConfMessage",
  components: { unlockConfMessage },
  argTypes: {
    sortMode: { action: "sortMode" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { unlockConfMessage },
  template: '<unlockConfMessage v-bind="$props" @sortMode="sortMode"/>',
});
export const UnlockConfMessage = Template.bind({});
UnlockConfMessage.args = {};
