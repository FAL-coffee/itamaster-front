import linkBtn from "@molecules/Common/LinkBtn.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Common/LinkBtn",
  components: { linkBtn },
  argTypes: {
    icon: {
      control: { type: "select", options: ["mdi-arrow-right-bold-outline"] },
    },
    linkClick: { action: "linkClick" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { linkBtn },
  template: '<linkBtn v-bind="$props" @linkClick="linkClick"/>',
});
export const LinkBtn = Template.bind({});
LinkBtn.args = {
  text: "",
  icon: "",
};
