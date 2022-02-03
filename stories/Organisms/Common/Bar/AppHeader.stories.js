import appHeader from "@organisms/Common/Bar/AppHeader.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/Bar/AppHeader",
  components: { appHeader },
  argTypes: {
    en: { action: "en" },
    jp: { action: "jp" },
    signin: { action: "signin" },
    signup: { action: "signup" },
    signout: { action: "signout" },
    profile: { action: "profile" },
    profileRegist: { action: "profileRegist" },
    // changePassword:{action:"changePassword"},
    // changeEmails:{action:"changeEmails"},
    // myTaskList:{action:"myTaskList"},
    bellMenuOpen: { action: "bellMenuOpen" },
    join: { action: "join" },
    reject: { action: "reject" },
    dataLoad: { action: "dataLoad" },
    dataAllLoad: { action: "dataAllLoad" },
    toPayment: { action: "toPayment" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { appHeader },
  template:
    // @changePassword="changePassword" @changeEmail="changeEmail" @myTaskList="myTaskList" />',
    `<appHeader v-bind="$props" @signin="signin" @signup="signup" @signout="signout" @profile="profile" @profileRegist="profileRegist" 
            @bellMenuOpen="bellMenuOpen" @join="join" @reject="reject" @dataLoad="dataLoad" @dataAllLoad="dataAllLoad"
                @en="en" @jp="jp" @toPayment="toPayment"
        />`,
});
export const AppHeader_afterLogin = Template.bind({});
AppHeader_afterLogin.args = {
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
  notLatestData: true,
};

export const AppHeader_beforeLogin = Template.bind({});
AppHeader_beforeLogin.args = {
  user: {
    id: 0,
  },
};
