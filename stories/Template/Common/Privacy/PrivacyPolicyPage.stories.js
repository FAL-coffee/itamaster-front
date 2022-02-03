import privacyPolicy from "@template/Common/Privacy/PrivacyPolicyPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Common/Privacy/PrivacyPolicyPage",
  components: {
    privacyPolicy,
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
    privacyPolicy,
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
            
            <privacyPolicy />

            <appFooter :user="user" class="mt-5"
                @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" @demo="demo" 
                @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation" @toGuide="toGuide"
            />
            <loadingProgressCircle :api="api" />
            <alertMessage :error="error" @readed="readed" />
        </div>
        `,
});
export const PrivacyPolicyPage = Template.bind({});
PrivacyPolicyPage.args = {
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
};
