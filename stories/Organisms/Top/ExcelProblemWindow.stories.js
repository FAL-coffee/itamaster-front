import excelProblemWindow from "@organisms/Top/ExcelProblemWindow.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/ExcelProblemWindow",
  components: { excelProblemWindow },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { excelProblemWindow },
  template: "<excelProblemWindow/>",
});
export const ExcelProblemWindow = Template.bind({});
ExcelProblemWindow.args = {};
