import notLatestDataBar from "@molecules/Common/NotLatestDataBar.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Common/NotLatestDataBar",
  components: { notLatestDataBar },
  argTypes: {
    dataLoad: { action: "dataLoad" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { notLatestDataBar },
  template: '<notLatestDataBar v-bind="$props" @dataLoad="dataLoad"/>',
});
export const NotLatestDataBar = Template.bind({});
NotLatestDataBar.args = {
  notLatestData: true,
};
