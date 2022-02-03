import testSuiteActions from "@organisms/TestSuite/TestSuiteActions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestSuite/TestSuiteActions",
  components: { testSuiteActions },
  argTypes: {
    save: { action: "save" },
    destroy: { action: "destroy" },
    profile: { action: "profile" },
    testSuiteOpen: { action: "testSuiteOpen" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testSuiteActions },
  template:
    '<testSuiteActions v-bind="$props" @save="save" @destroy="destroy" @profile="profile" @testSuiteOpen="testSuiteOpen"/>',
});
export const TestSuiteActions = Template.bind({});
TestSuiteActions.args = {
  user: { id: 1 },
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
  persons: [
    {
      id: 1,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 2,
      initials: "TE",
      name: "tester",
      email: "tester@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 3,
      initials: "PG",
      name: "programer",
      email: "programer@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 4,
      initials: "PM",
      name: "manager",
      email: "manager@Itamaster.co.jp",
      color: "red",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 5,
      initials: "純",
      name: "純一",
      email: "junniti@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 6,
      initials: "FW",
      name: "forward",
      email: "forward@Itamaster.co.jp",
      color: "blue",
      simpleIcon: true,
      iconImg: { url: "" },
    },
  ],
};
