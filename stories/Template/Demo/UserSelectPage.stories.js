import userSelectPage from "@template/Demo/UserSelectPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/Demo/UserSelectPage",
  components: { userSelectPage, appHeader, appFooter },
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

    userSelect: { action: "userSelect" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { userSelectPage, appHeader, appFooter },
  template: `
            <div>
                <appHeader class="mb-5"
                    @signin="signin" @signout="signout" @signup="signup" @profile="profile" @profileRegist="profileRegist" 
                        @dataLoad="dataLoad" @dataAllLoad="dataAllLoad" @toPayment="toPayment" @demo="demo"
                            @bellMenuOpen="bellMenuOpen" @join="join" @reject="reject" @toGuide="toGuide"
                />
                <userSelectPage v-bind="$props" @userSelect="userSelect"
                />
                <appFooter class="mt-5"
                    @toContactForm="toContactForm" @toPrivacyPolicy="toPrivacyPolicy" @toHome="toHome" @demo="demo"
                    @toTerms="toTerms" @toTop="toTop" @toSpecifiedNotation="toSpecifiedNotation"  @toGuide="toGuide"
                />
            </div>
            `,
});
export const UserSelectPage = Template.bind({});
UserSelectPage.args = {
  userOptions: [
    {
      id: 1,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: { url: "" },
      message: "this is message",
      trialed: true,
    },
    {
      id: 2,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: true,
      iconImg: { url: "" },
      message: "this is message",
      trialed: true,
    },
    {
      id: 3,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: { url: "" },
      message: "this is message",
      trialed: true,
    },
  ],
};
