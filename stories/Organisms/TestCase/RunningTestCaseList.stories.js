import runningTestCaseList from "@organisms/TestCase/RunningTestCaseList.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestCase/RunningTestCaseList",
  components: { runningTestCaseList },
  argTypes: {
    locked: { control: { type: "boolean" } },
    lock: { action: "lock" },
    unlock: { action: "unlock" },
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { runningTestCaseList },
  template:
    '<runningTestCaseList v-bind="$props" @lock="lock" @unlock="unlock" @completion="completion"/>',
});
export const RunningTestCaseList = Template.bind({});
RunningTestCaseList.args = {
  locked: true,
  user: {
    id: 1,
    writer: true,
    name: "loginUser",
  },
  testCases: [
    {
      id: 1,
      order: 1,
      status: "retest",
      title: "Test Case Title 01",
      creator: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      lastEditor: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      tester: {
        id: 2,
        name: "writer2",
        initials: "W2",
        email: "writer1@Itamaster.co.jp",
        color: "red",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
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
    },
    {
      id: 2,
      order: 2,
      status: "retest",
      title: "Test Case Title 02",
      creator: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      lastEditor: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      tester: {
        id: 2,
        name: "writer2",
        initials: "W2",
        email: "writer1@Itamaster.co.jp",
        color: "red",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      importance: 2,
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
    },
    {
      id: 3,
      order: 3,
      status: "notRunning",
      title: "Test Case Title 03",
      creator: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      lastEditor: {
        id: 1,
        name: "creator",
        initials: "CR",
        email: "creator@Itamaster.co.jp",
        color: "blue",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      tester: {
        id: 3,
        name: "writer3",
        initials: "W3",
        email: "writer3@Itamaster.co.jp",
        color: "green",
        simpleIcon: true,
        /*bgImg:"",*/ iconImg: { url: "" },
      },
      importance: 3,
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
    },
  ],
};
