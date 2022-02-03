import remarks from "@molecules/TestSuite/Remarks.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestSuite/remarks",
  components: { remarks },
  argTypes: {
    remarksChanged: { action: "remarksChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { remarks },
  template: '<remarks v-bind="$props" @remarksChanged="remarksChanged"/>',
});
export const Remarks = Template.bind({});
Remarks.args = {
  text: "text",
};
