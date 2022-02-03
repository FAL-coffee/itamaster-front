import cannotDeletedMessage from "@molecules/Msg/CannotDeletedMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/CannotDeletedMessage",
  components: { CannotDeletedMessage },
  argTypes: {
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { cannotDeletedMessage },
  template: '<cannotDeletedMessage v-bind="$props" @completion="completion"/>',
});
export const CannotDeletedMessage = Template.bind({});
CannotDeletedMessage.args = {};
