import precautionaryStatementCard from "@organisms/Demo/PrecautionaryStatementCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Demo/PrecautionaryStatementCard",
  components: { precautionaryStatementCard },
  argTypes: {
    userSelect: { action: "userSelect" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { precautionaryStatementCard },
  template: '<precautionaryStatementCard v-bind="$props"/>',
});
export const PrecautionaryStatementCard = Template.bind({});
PrecautionaryStatementCard.args = {};
