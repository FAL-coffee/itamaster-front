import teamCardList from "@organisms/Team/TeamCardList.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/TeamCardList",
  components: { teamCardList },
  argTypes: {
    idChange: { action: "idChange" },
    idCheck: { action: "idCheck" },
    close: { action: "close" },
    save: { action: "save" },
    destroy: { action: "destroy" },
    profile: { action: "profile" },
    memberEdit: { action: "memberEdit" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamCardList },
  template: `
    <teamCardList v-bind="$props" @close="close" @idChange="idChange" @idCheck="idCheck" 
        @save="save" @destroy="destroy" @profile="profile" @memberEdit="memberEdit" @exit="exit"
    />`,
});
export const TeamCardList = Template.bind({});
TeamCardList.args = {
  user: { id: 1 },
  userIsPaid: true,
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
      isPaidTeam: false,
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
      ],
    },
  ],
  teamIdCheckData: {
    id: 0,
    status: "NotChecked",
  },
};

export const TeamCardList_userIsNotPaid = Template.bind({});
TeamCardList_userIsNotPaid.args = {
  user: { id: 1 },
  userIsPaid: false,
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
  ],
  teamIdCheckData: {
    id: 0,
    status: "NotChecked",
  },
};
