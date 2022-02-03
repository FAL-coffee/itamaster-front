import exportOption from "@molecules/Project/ExportOption.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Project/ExportOption",
  components: { exportOption },
  argTypes: {
    opt: { control: { type: "boolean" } },
    optSwitch: { action: "optSwitch" },
    valChange: { action: "valChange" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { exportOption },
  template:
    '<exportOption v-bind="$props" @optSwitch="optSwitch" @valChange="valChange"/>',
});
export const ExportOption = Template.bind({});
ExportOption.args = {
  opt: false,
  val: "",
};
