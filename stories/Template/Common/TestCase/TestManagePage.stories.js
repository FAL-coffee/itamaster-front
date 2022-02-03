import testManagePage from "@template/Common/TestCase/TestManagePage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Common/TestCase/TestManagePage",
  components: {
    testManagePage,
    appHeader,
    appFooter,
    loadingProgressCircle,
    alertMessage,
  },
  argTypes: {
    // header
    signin: { action: "signin" },
    signup: { action: "signup" },
    signout: { action: "signout" },
    profile: { action: "profile" },
    bellMenuOpen: { action: "bellMenuOpen" },
    join: { action: "join" },
    reject: { action: "reject" },
    profileRegist: { action: "profileRegist" },
    dataLoad: { action: "dataLoad" },
    dataAllLoad: { action: "dataAllLoad" },
    toPayment: { action: "toPayment" },
    demo: { action: "demo" },
    // changePassword:{action:"changePassword"},
    // changeEmails:{action:"changeEmails"},
    // myTaskList:{action:"myTaskList"},

    // footer
    toContactForm: { action: "toContactForm" },
    toPrivacyPolicy: { action: "toPrivacyPolicy" },
    toTerms: { action: "toTerms" },
    toSpecifiedNotation: { action: "toSpecifiedNotation" },
    toTop: { action: "toTop" },
    toHome: { action: "toHome" },
    toGuide: { action: "toGuide" },

    // alertMessage
    readed: { action: "readed" },

    testCaseSave: { action: "testCaseSave" },
    testCaseDestroy: { action: "testCaseDestroy" },
    sortMode: { action: "sortMode" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: {
    testManagePage,
    appHeader,
    appFooter,
    loadingProgressCircle,
    alertMessage,
  },
  // @changePassword="changePassword" @changeEmail="changeEmail" @myTaskList="myTaskList"
  template: `
            <div>
                <appHeader :user="user" :unreadCount="unreadCount" :invitations="invitations" :notLatestData="notLatestData" class="mb-5"
                    @signin="signin" @signout="signout" @signup="signup" @profile="profile" @profileRegist="profileRegist" 
                        @dataLoad="dataLoad" @dataAllLoad="dataAllLoad" @toPayment="toPayment" @demo="demo"
                            @bellMenuOpen="bellMenuOpen" @join="join" @reject="reject" @toGuide="toGuide"
                />
                
                <testManagePage v-bind="$props"
                    @testCaseSave="testCaseSave" @testCaseDestroy="testCaseDestroy" @profile="profile" @sortMode="sortMode"
                />

                <appFooter :user="user" class="mt-5"
                    @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome"  @demo="demo"
                    @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation" @toGuide="toGuide"
                />
                <loadingProgressCircle :api="api" />
                <alertMessage :error="error" @readed="readed" />
            </div>
        `,
});
export const TestManagePage = Template.bind({});
TestManagePage.args = {
  api: false,
  notLatestData: false,
  user: {
    id: 1,
    writer: true,
    name: "loginUser",
    trialed: false,
  },
  error: {
    displayFlag: false,
    status: "success",
    messages: ["testError01", "testError02"],
  },
  unreadCount: 2,
  invitations: [
    {
      id: 1,
      teamName: "itamasterTeam",
      teamId: "itamasterDevTeam",
    },
    {
      id: 2,
      teamName: "itamasterTeam2",
      teamId: "itamasterDevTeam2",
    },
  ],
  testCases: [
    {
      id: 1,
      no: 1,
      order: 1,
      status: "retest",
      title: "Test Case Title 01",
      creatorId: 1,
      lastEditorId: 1,
      testerId: 1,
      importance: 1,
      prerequisites: [
        {
          id: 0,
          // order:1,
          contents: "Prerequisites at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Prerequisites at2",
        },
      ],
      process: [
        {
          id: 0,
          // order:1,
          contents: "Process at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Process at2",
        },
      ],
      expect: [
        {
          id: 0,
          // order:1,
          contents: "Expect at1",
        },
        {
          id: 1,
          // order:2,
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
    {
      id: 2,
      no: 3,
      order: 2,
      status: "retest",
      title: "Test Case Title 02",
      creatorId: 1,
      lastEditorId: 2,
      testerId: 2,
      importance: 2,
      prerequisites: [
        {
          id: 0,
          // order:1,
          contents: "Prerequisites at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Prerequisites at2",
        },
      ],
      process: [
        {
          id: 0,
          // order:1,
          contents: "Process at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Process at2",
        },
      ],
      expect: [
        {
          id: 0,
          // order:1,
          contents: "Expect at1",
        },
        {
          id: 1,
          // order:2,
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
    {
      id: 3,
      no: 4,
      order: 3,
      status: "notRunning",
      title: "Test Case Title 03",
      creatorId: 1,
      lastEditorId: 1,
      testerId: 3,
      importance: 3,
      prerequisites: [
        {
          id: 0,
          // order:1,
          contents: "Prerequisites at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Prerequisites at2",
        },
      ],
      process: [
        {
          id: 0,
          // order:1,
          contents: "Process at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Process at2",
        },
      ],
      expect: [
        {
          id: 0,
          // order:1,
          contents: "Expect at1",
        },
        {
          id: 1,
          // order:2,
          contents: "Expect at2",
        },
      ],
      testLogs: [],
    },
  ],
  persons: [
    {
      id: 1,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: "",
    },
    {
      id: 2,
      initials: "TE",
      name: "tester",
      email: "tester@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: "",
    },
    {
      id: 3,
      initials: "PG",
      name: "programer",
      email: "programer@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: "",
    },
    {
      id: 4,
      initials: "PM",
      name: "manager",
      email: "manager@Itamaster.co.jp",
      color: "red",
      simpleIcon: false,
      iconImg: "",
    },
    {
      id: 5,
      initials: "純",
      name: "純一",
      email: "junniti@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: "",
    },
    {
      id: 6,
      initials: "FW",
      name: "forward",
      email: "forward@Itamaster.co.jp",
      color: "blue",
      simpleIcon: true,
      iconImg: "",
    },
  ],
};
