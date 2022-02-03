import memberCard from "@molecules/Team/MemberCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Team/MemberCard",
  components: { memberCard },
  argTypes: {
    detailChange: { action: "detailChange" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { memberCard },
  template: '<memberCard v-bind="$props"/>',
});
export const MemberCard = Template.bind({});
MemberCard.args = {};
