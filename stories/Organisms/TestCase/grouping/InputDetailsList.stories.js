import inputDetailsList from "@organisms/TestCase/grouping/InputDetailsList.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestCase/grouping/InputDetailsList",
  components: { inputDetailsList },
  argTypes: {
    add: { action: "add" },
    destroy: { action: "destroy" },
    valChange: { action: "valChange" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { inputDetailsList },
  template:
    '<inputDetailsList v-bind="$props" @add="add" @destroy="destroy" @valChange="valChange" />',
});
export const InputDetailsList = Template.bind({});
InputDetailsList.args = {
  prerequisites: [
    {
      id: 0,
      order: 1,
      contents: "Prerequisites at1",
    },
    {
      id: 1,
      order: 2,
      contents: "Prerequisites at2",
    },
  ],
  process: [
    {
      id: 0,
      order: 1,
      contents: "Process at1",
    },
    {
      id: 1,
      order: 2,
      contents: "Process at2",
    },
  ],
  expect: [
    {
      id: 0,
      order: 1,
      contents: "Expect at1",
    },
    {
      id: 1,
      order: 2,
      contents: "Expect at2",
    },
  ],
};
