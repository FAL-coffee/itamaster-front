import contactSuccessMessage from "@molecules/Msg/ContactSuccessMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/ContactSuccessMessage",
  components: { contactSuccessMessage },
  argTypes: {
    read: { action: "read" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { contactSuccessMessage },
  template: '<contactSuccessMessage v-bind="$props" @read="read"/>',
});
export const ContactSuccessMessage = Template.bind({});
ContactSuccessMessage.args = {};
