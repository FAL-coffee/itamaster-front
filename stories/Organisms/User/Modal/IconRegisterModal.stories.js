import iconRegisterModal from "@organisms/User/Modal/IconRegisterModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/Modal/IconRegisterModal",
  components: { iconRegisterModal },
  argTypes: {
    save: { action: "save" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { iconRegisterModal },
  template: '<iconRegisterModal v-bind="$props" @save="save" />',
});
export const IconRegisterModal = Template.bind({});
IconRegisterModal.args = {};
