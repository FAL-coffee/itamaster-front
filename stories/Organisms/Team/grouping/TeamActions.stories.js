import teamActions from "@organisms/Team/grouping/TeamActions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/grouping/TeamActions",
  components: { teamActions },
  argTypes: {
    idChange: { action: "idChange" },
    idCheck: { action: "idCheck" },
    close: { action: "close" },
    save: { action: "save" },
    destroy: { action: "destroy" },
    profile: { action: "profile" },
    memberEdit: { action: "memberEdit" },
    toProjectPage: { action: "toProjectPage" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamActions },
  template: `
        <teamActions v-bind="$props" @close="close" @idChange="idChange" @idCheck="idCheck" 
            @save="save" @destroy="destroy" @profile="profile" @toProjectPage="toProjectPage" @memberEdit="memberEdit" @exit="exit"
        />`,
});

export const TeamActions_admin = Template.bind({});
TeamActions_admin.args = {
  user: { id: 1 },
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
  teamIdCheck: "Okay",
};

export const TeamActions_notAdmin = Template.bind({});
TeamActions_notAdmin.args = {
  user: { id: 2 },
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
  teamIdCheck: "Okay",
};
