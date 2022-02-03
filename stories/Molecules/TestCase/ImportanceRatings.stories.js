import importanceRatings from "@molecules/TestCase/ImportanceRatings.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestCase/ImportanceRatings",
  components: { importanceRatings },
  argTypes: {
    importanceChanged: { action: "importanceChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { importanceRatings },
  template:
    '<importanceRatings v-bind="$props" @importanceChanged="importanceChanged"/>',
});
export const ImportanceRatings_1 = Template.bind({});
ImportanceRatings_1.args = {
  readOnly: false,
  importance: 1,
};
export const ImportanceRatings_2 = Template.bind({});
ImportanceRatings_2.args = {
  readOnly: false,
  importance: 2,
};
export const ImportanceRatings_3 = Template.bind({});
ImportanceRatings_3.args = {
  readOnly: false,
  importance: 3,
};
export const ImportanceRatings_readOnly = Template.bind({});
ImportanceRatings_readOnly.args = {
  readOnly: true,
  importance: 3,
};
