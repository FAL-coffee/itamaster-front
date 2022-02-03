import teamCard from "@organisms/Team/Card/TeamCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Card/TeamCard",
  components: { teamCard },
  argTypes: {
    idChange: { action: "idChange" },
    idCheck: { action: "idCheck" },
    close: { action: "close" },
    save: { action: "save" },
    destroy: { action: "destroy" },
    profile: { action: "profile" },
    toProjectPage: { action: "toProjectPage" },
    memberEdit: { action: "memberEdit" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamCard },
  template: `
            <teamCard v-bind="$props" @close="close" @idChange="idChange" @idCheck="idCheck" @save="save" @exit="exit"
                @destroy="destroy" @profile="profile" @toProjectPage="toProjectPage" @memberEdit="memberEdit"
            />`,
});
export const TeamCard = Template.bind({});
TeamCard.args = {
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
