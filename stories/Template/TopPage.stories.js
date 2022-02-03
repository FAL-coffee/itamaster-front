import topPage from "@template/TopPage.vue";
import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import appFooter from "@organisms/Common/Bar/AppFooter.vue";

import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Template/TopPage",
  components: { topPage, appHeader, appFooter },
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

    demo: { action: "demo" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { topPage, appHeader, appFooter },
  template: `
            <div>
                <appHeader class="mb-5"
                    @signin="signin" @signout="signout" @signup="signup" @profile="profile" @profileRegist="profileRegist" 
                        @dataLoad="dataLoad" @dataAllLoad="dataAllLoad" @toPayment="toPayment" @demo="demo"
                            @bellMenuOpen="bellMenuOpen" @join="join" @reject="reject" @toGuide="toGuide"
                />
                <topPage 
                    @signin="signin"  @signup="signup" @demo="demo"
                />
                
            </div>
            `,
});
export const TopPage = Template.bind({});
TopPage.args = {};
