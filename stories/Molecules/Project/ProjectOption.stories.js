import projectOption from "@molecules/Project/ProjectOption.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Project/ProjectOption",
  components: { projectOption },
  argTypes: {
    opt: { control: { type: "boolean" } },
    optSwitch: { action: "optSwitch" },
    valChange: { action: "valChange" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { projectOption },
  template:
    '<projectOption v-bind="$props" @optSwitch="optSwitch" @valChange="valChange"/>',
});
export const ProjectOption = Template.bind({});
ProjectOption.args = {
  opt: false,
  val: "",
};
