import teamInfoModal from "@organisms/Team/Modal/TeamInfoModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Modal/TeamInfoModal",
  components: { teamInfoModal },
  argTypes: {
    profile: { action: "profile" },
    toProjectPage: { action: "toProjectPage" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamInfoModal },
  template:
    '<teamInfoModal v-bind="$props" @profile="profile" @toProjectPage="toProjectPage"/>',
});
export const TeamInfoModal = Template.bind({});
TeamInfoModal.args = {
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
};
