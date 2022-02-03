import teamExitConfMessage from "@molecules/Msg/TeamExitConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/TeamExitConfMessage",
  components: { teamExitConfMessage },
  argTypes: {
    exitClick: { action: "exitClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamExitConfMessage },
  template: '<teamExitConfMessage v-bind="$props" @exitClick="exitClick"/>',
});
export const TeamExitConfMessage = Template.bind({});
TeamExitConfMessage.args = {};
