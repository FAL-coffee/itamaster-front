import testSuiteInfoModal from "@organisms/TestSuite/TestSuiteInfoModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestSuite/TestSuiteInfoModal",
  components: { testSuiteInfoModal },
  argTypes: {
    profile: { action: "profile" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testSuiteInfoModal },
  template: '<testSuiteInfoModal v-bind="$props"  @profile="profile" />',
});
export const TestSuiteInfoModal = Template.bind({});
TestSuiteInfoModal.args = {
  testSuite: {
    title: "Test Suite Title",
    remarks:
      "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
    creatorId: 1,
    writers: [1, 2, 3, 4, 5],
    steps: 50,
    testcase: 19,
    complete: 5,
    retest: 1,
    issue: 2,
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
