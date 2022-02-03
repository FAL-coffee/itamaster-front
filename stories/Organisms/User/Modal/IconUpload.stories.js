import iconUpload from "@organisms/User/Modal/IconUpload.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/Modal/IconUpload",
  components: { iconUpload },
  argTypes: {
    imgCrop: { action: "imgCrop" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { iconUpload },
  template: '<iconUpload v-bind="$props" @imgCrop="imgCrop" />',
});
export const IconUpload = Template.bind({});
IconUpload.args = {};
