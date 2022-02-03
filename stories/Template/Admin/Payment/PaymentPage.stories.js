import paymentPage from "@template/Admin/Payment/PaymentPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";
import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
import alertMessage from "@molecules/Common/AlertMessage.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Admin/Payment/PaymentPage",
  components: {
    paymentPage,
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

    // alertMessage
    readed: { action: "readed" },

    tokenGenerate: { action: "tokenGenerate" },
    terminate: { action: "terminate" },

    paidStatus: {
      control: {
        type: "select",
        options: ["intactive", "trialing", "active", "canceled"],
      },
    },
    aboutStatus: {
      control: {
        type: "select",
        options: ["intactive", "trialing", "active", "canceled"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: {
    paymentPage,
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
                <paymentPage 
                    :pk="pulishableKey" 
                    :paidStatus="paidStatus" 
                    :userIsTrialing="userIsTrialing" 
                    :user="user"
                    :aboutStatus="aboutStatus"
                    :trialPeriod="trialPeriod"
                    :subscriptionPeriod="subscriptionPeriod"

                    @tokenGenerate="tokenGenerate" 
                    @terminate="terminate"
                />
                <appFooter :user="user" class="mt-5"
                    @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" 
                        @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation" @demo="demo"
                />
                <loadingProgressCircle :api="api" />
                <alertMessage :error="error" @readed="readed" />
            </div>
        `,
});
export const PaymentPage = Template.bind({});
PaymentPage.args = {
  pulishableKey:
    "pk_test_51JX437DTpy4CIFhxR1Htxx5ZYqMCFStRqiw4w5F8frcnkoQD3WaAe96d6XHBfmjKYAr85yxzxZiwcsxivIe9ALbf00ay8fmctm",
  demoKeyNumber: "4242 4242 4242 4242",
  api: false,
  notLatestData: false,
  userIsTrialing: false,
  paidStatus: "active",
  aboutStatus: "active",
  trialPeriod: {
    trial_start: "2019/9/4",
    trial_end: "2019/9/4",
  },
  subscriptionPeriod: {
    subscriptionStart: "2019/9/4",
    subscriptionEnd: "2019/9/4",
  },
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
  error: {
    displayFlag: false,
    status: "success",
    messages: ["testError01", "testError02"],
  },
};
