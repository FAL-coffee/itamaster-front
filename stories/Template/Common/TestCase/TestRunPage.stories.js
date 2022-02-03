import testRunPage from "@template/Common/TestCase/TestRunPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Common/TestCase/TestRunPage",
  components: {
    testRunPage,
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

    lock: { action: "lock" },
    unlock: { action: "unlock" },
    completion: { action: "completion" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: {
    testRunPage,
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
                
                <testRunPage v-bind="$props"
                    @lock="lock" @unlock="unlock" @completion="completion"
                />

                <appFooter :user="user" class="mt-5"
                    @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" @demo="demo"
                    @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation"  @toGuide="toGuide"
                />
                <loadingProgressCircle :api="api" />
                <alertMessage :error="error" @readed="readed" />
            </div>
        `,
});
export const TestRunPage = Template.bind({});
TestRunPage.args = {
  api: false,
  notLatestData: false,
  locked: true,
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
