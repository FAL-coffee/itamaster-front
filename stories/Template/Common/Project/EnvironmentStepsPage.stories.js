import environmentStepsPage from "@template/Common/Project/EnvironmentStepsPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Common/Project/EnvironmentStepsPage",
  components: {
    environmentStepsPage,
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: {
    environmentStepsPage,
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
                
                <environmentStepsPage />

                <appFooter :user="user" class="mt-5"
                    @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" @demo="demo"
                    @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation" @toGuide="toGuide" 
                />
                <loadingProgressCircle :api="api" />
                <alertMessage :error="error" @readed="readed" />
            </div>
        `,
});
export const EnvironmentStepsPage = Template.bind({});
EnvironmentStepsPage.args = {
  api: false,
  notLatestData: false,
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    // bgImg:'',
    iconImg: { url: "" },
    message: "this is message",
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
  project: {
    id: 1,
    name: "Itamaster Development Project",
    memo:
      "This project aims to develop and release a test management tool called Itamaster.",
    tester: [
      {
        id: 1,
        initials: "UR",
        name: "user",
        email: "user@Itamaster.co.jp",
        color: "blue",
        simpleIcon: false,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
      {
        id: 2,
        initials: "TE",
        name: "tester",
        email: "tester@Itamaster.co.jp",
        color: "red",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
      {
        id: 3,
        initials: "PG",
        name: "programer",
        email: "programer@Itamaster.co.jp",
        color: "green",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
    ],
    // テスト環境構築手順書の有無
    createEnvironmentSteps: true,
    // テスト環境URL
    testEnvironmentURL: "localhost/itamaster/",
    // ソースコード管理URL
    repositoryURL: "https://github.com/",
    // git連携の有無
    gitCooperation: false,
    testSuits: [
      {
        id: 1,
        no: 1,
        title: "Test Suite Title",
        remarks:
          "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
        createrId: 1,
        writers: [1, 2, 3],
        steps: 50,
        auth: false,
        testcase: 20,
        complete: 0,
        retest: 0,
        issue: 3,
      },
      {
        id: 2,
        no: 2,
        title: "Test Suite Title",
        remarks:
          "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
        createrId: 1,
        writers: [1, 2, 3],
        steps: 50,
        auth: true,
        testcase: 19,
        complete: 5,
        retest: 1,
        issue: 2,
      },
    ],
    enabled: true,
  },
  team: {
    id: 1,
    teamId: "itamasterDevelopmentTeam",
    name: "Itamaster Development Team",
    memo:
      'We are the team that develops the integrated test management tool of the system development team called "Itamaster".',
    adminUserId: 1,
    private: true,
    isPaidTeam: true,
    teamMember: [
      {
        id: 1,
        initials: "UR",
        name: "user",
        email: "user@Itamaster.co.jp",
        color: "blue",
        simpleIcon: false,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
      {
        id: 2,
        initials: "TE",
        name: "tester",
        email: "tester@Itamaster.co.jp",
        color: "red",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
      {
        id: 3,
        initials: "PG",
        name: "programer",
        email: "programer@Itamaster.co.jp",
        color: "green",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
    ],
  },
};
