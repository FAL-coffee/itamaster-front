import goTestCaseSelectModal from "@organisms/TestSuite/GoTestCaseSelectModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestSuite/GoTestCaseSelectModal",
  components: { goTestCaseSelectModal },
  argTypes: {
    testSuiteOpen: { action: "testSuiteOpen" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { goTestCaseSelectModal },
  template:
    '<goTestCaseSelectModal v-bind="$props" @testSuiteOpen="testSuiteOpen"/>',
});
export const GoTestCaseSelectModal = Template.bind({});
GoTestCaseSelectModal.args = {
  testSuite: {
    id: 1,
    creatorId: 1,
    title: "test suite title",
    remarks: "test suite remarks",
    writers: [1, 2],
    steps: 50,
    testcase: 19,
    complete: 5,
    retest: 1,
    issue: 2,
    auth: true,
  },
};
