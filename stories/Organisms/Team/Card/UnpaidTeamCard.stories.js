import unpaidTeamCard from "@organisms/Team/Card/UnpaidTeamCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Card/UnpaidTeamCard",
  components: { unpaidTeamCard },
  argTypes: {
    profile: { action: "profile" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { unpaidTeamCard },
  template: `
            <unpaidTeamCard v-bind="$props" @exit="exit" @profile="profile"/>`,
});
export const UnpaidTeamCard = Template.bind({});
UnpaidTeamCard.args = {
  user: { id: 1 },
  team: {
    id: 1,
    teamId: "itamasterDevelopmentTeam",
    name: "Itamaster Development Team",
    memo:
      'We are the team that develops the integrated test management tool of the system development team called "Itamaster".',
    adminUserId: 1,
    private: true,
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
};
