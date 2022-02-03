import sortingModeMoveMessage from "@molecules/Msg/SortingModeMoveMessage.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Msg/SortingModeMoveMessage",
  components: { sortingModeMoveMessage },
  argTypes: {
    sortMode: { action: "sortMode" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { sortingModeMoveMessage },
  template: '<sortingModeMoveMessage v-bind="$props" @sortMode="sortMode"/>',
});
export const SortingModeMoveMessage = Template.bind({});
SortingModeMoveMessage.args = {};
