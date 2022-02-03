import solveExcelProblemCard from "@organisms/Top/SolveExcelProblemCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/SolveExcelProblemCard",
  components: { solveExcelProblemCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { solveExcelProblemCard },
  template: "<solveExcelProblemCard/>",
});
export const SolveExcelProblemCard = Template.bind({});
SolveExcelProblemCard.args = {};
