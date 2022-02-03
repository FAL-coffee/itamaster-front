import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/DeleteConfMessage",
  components: { deleteConfMessage },
  argTypes: {
    deleteClick: { action: "deleteClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { deleteConfMessage },
  template: '<deleteConfMessage v-bind="$props" @deleteClick="deleteClick"/>',
});
export const DeleteConfMessage = Template.bind({});
DeleteConfMessage.args = {};
