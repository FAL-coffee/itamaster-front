import teamManageList from "@organisms/Team/TeamManageList.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/TeamManageList",
  components: { teamManageList },
  argTypes: {
    profile: { action: "profile" },
    toProjectPage: { action: "toProjectPage" },
    teamSave: { action: "teamSave" },
    teamDestroy: { action: "teamDestroy" },
    close: { action: "close" },
    idCheck: { action: "idCheck" },
    idChange: { action: "idChange" },
    memberKick: { action: "memberKick" },
    invitationCancel: { action: "invitationCancel" },
    memberEdit: { action: "memberEdit" },
    invitation: { action: "invitation" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamManageList },
  template: `
            <teamManageList v-bind="$props" 
                @profile="profile" @toProjectPage="toProjectPage"
                    @teamSave="teamSave" @teamDestroy="teamDestroy" @close="close" @idChange="idChange" @idCheck="idCheck" @exit="exit"
                        @memberKick="memberKick" @invitationCancel="invitationCancel"  @memberEdit="memberEdit" @invitation="invitation"
            />
        `,
});
export const TeamManageList = Template.bind({});
TeamManageList.args = {
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
    addressChecking: true,
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
    invitations: [
      {
        email: "invitation01@Itamaster.co.jp",
        invitation: true,
      },
      {
        email: "invitation02@Itamaster.co.jp",
        invitation: true,
      },
    ],
  },
  teamIdCheckData: {
    id: 0,
    status: "",
  },
};
