import teamCardListPage from "@template/Common/Team/TeamCardListPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Common/Team/TeamCardListPage",
  components: {
    teamCardListPage,
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

    idChange: { action: "idChange" },
    idCheck: { action: "idCheck" },
    close: { action: "close" },
    exit: { action: "exit" },
    save: { action: "save" },
    destroy: { action: "destroy" },
    toProjectPage: { action: "toProjectPage" },
    memberEdit: { action: "memberEdit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: {
    teamCardListPage,
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
                
                <teamCardListPage v-bind="$props"
                    @memberEdit="memberEdit" @close="close" @idChange="idChange" @idCheck="idCheck" 
                        @save="save" @destroy="destroy" @toProjectPage="toProjectPage" @exit="exit"
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
export const TeamCardListPage = Template.bind({});
TeamCardListPage.args = {
  api: false,
  notLatestData: false,
  userIsPaid: true,
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
  teams: [
    {
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
    {
      id: 2,
      teamId: "itamasterDevelopmentTeam2",
      name: "Itamaster Development Team2",
      memo:
        'We are the team that develops the integrated test management tool of the system development team called "Itamaster"2.',
      adminUserId: 1,
      private: false,
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
  ],
  teamIdCheckData: {
    id: 0,
    status: "",
  },
};
