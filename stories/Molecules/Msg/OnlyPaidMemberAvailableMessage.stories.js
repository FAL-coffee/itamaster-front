import onlyPaidMemberAvailableMessage from "@molecules/Msg/OnlyPaidMemberAvailableMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/OnlyPaidMemberAvailableMessage",
  components: { onlyPaidMemberAvailableMessage },
  argTypes: {
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { onlyPaidMemberAvailableMessage },
  template: "<onlyPaidMemberAvailableMessage />",
});
export const OnlyPaidMemberAvailableMessage = Template.bind({});
OnlyPaidMemberAvailableMessage.args = {};
