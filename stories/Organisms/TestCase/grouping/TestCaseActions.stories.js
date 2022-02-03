import testCaseActions from "@organisms/TestCase/grouping/TestCaseActions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestCase/grouping/TestCaseActions",
  components: { testCaseActions },
  argTypes: {
    save: { action: "save" },
    destroy: { action: "destroy" },
    profile: { action: "profile" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testCaseActions },
  template:
    '<testCaseActions v-bind="$props" @save="save" @destroy="destroy" @profile="profile"/>',
});
export const TestCaseActions = Template.bind({});
TestCaseActions.args = {
  user: { id: 1, writer: true },
  testCase: {
    id: 1,
    order: 1,
    status: "retest",
    title: "Test Case Title 01",
    creatorId: 1,
    lastEditorId: 1,
    testerId: 2,
    importance: 1,
    prerequisites: [
      {
        id: 0,
        order: 1,
        contents: "Prerequisites at1",
      },
      {
        id: 1,
        order: 2,
        contents: "Prerequisites at2",
      },
    ],
    process: [
      {
        id: 0,
        order: 1,
        contents: "Process at1",
      },
      {
        id: 1,
        order: 2,
        contents: "Process at2",
      },
    ],
    expect: [
      {
        id: 0,
        order: 1,
        contents: "Expect at1",
      },
      {
        id: 1,
        order: 2,
        contents: "Expect at2",
      },
    ],
    testLogs: [
      {
        id: 0,
        numberOfTime: 1,
        created_at: "2000-01-01",
        testerId: 2,
        beforeStatus: "notRunning",
        afterStatus: "retest",
        reason:
          "notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1notRunning -> retest  --matter1",
      },
      {
        id: 1,
        numberOfTime: 2,
        created_at: "2000-01-01",
        testerId: 2,
        beforeStatus: "retest",
        afterStatus: "retest",
        reason: "retest -> retest  --matter2",
      },
    ],
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
