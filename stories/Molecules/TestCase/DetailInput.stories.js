import detailInput from "@molecules/TestCase/DetailInput.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/TestCase/DetailInput",
  components: { detailInput },
  argTypes: {
    detailChange: { action: "detailChange" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { detailInput },
  template: '<detailInput v-bind="$props" @detailChange="detailChange"/>',
});
export const DetailInput = Template.bind({});
DetailInput.args = {
  name: "detailSample",
  text: "",
};
