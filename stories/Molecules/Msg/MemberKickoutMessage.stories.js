import memberKickoutMessage from "@molecules/Msg/MemberKickoutMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/MemberKickoutMessage",
  components: { memberKickoutMessage },
  argTypes: {
    kickClick: { action: "kickClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { memberKickoutMessage },
  template: '<memberKickoutMessage v-bind="$props" @kickClick="kickClick"/>',
});
export const MemberKickoutMessage = Template.bind({});
MemberKickoutMessage.args = {};
