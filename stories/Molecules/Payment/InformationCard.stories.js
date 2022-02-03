import informationCard from "@molecules/Payment/InformationCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Payment/InformationCard",
  components: { informationCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { informationCard },
  template: "<informationCard/>",
});
export const InformationCard = Template.bind({});
InformationCard.args = {};
