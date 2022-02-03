import descriptionOfItemCard from "@molecules/Payment/DescriptionOfItemCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Payment/DescriptionOfItemCard",
  components: { descriptionOfItemCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { descriptionOfItemCard },
  template: "<descriptionOfItemCard/>",
});
export const DescriptionOfItemCard = Template.bind({});
DescriptionOfItemCard.args = {};
