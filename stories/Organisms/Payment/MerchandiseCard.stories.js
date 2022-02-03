import merchandiseCard from "@organisms/Payment/MerchandiseCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Payment/MerchandiseCard",
  components: { merchandiseCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { merchandiseCard },
  template: "<merchandiseCard/>",
});
export const MerchandiseCard = Template.bind({});
MerchandiseCard.args = {};
