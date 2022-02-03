import imageCard from "@organisms/Top/ImageCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/ImageCard",
  components: { imageCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { imageCard },
  template: "<imageCard/>",
});
export const ImageCard = Template.bind({});
ImageCard.args = {};
