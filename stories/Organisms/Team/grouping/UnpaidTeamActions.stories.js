import unpaidTeamActions from "@organisms/Team/grouping/UnpaidTeamActions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/grouping/UnpaidTeamActions",
  components: { unpaidTeamActions },
  argTypes: {
    profile: { action: "profile" },
    exit: { action: "exit" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { unpaidTeamActions },
  template: `
        <unpaidTeamActions v-bind="$props"
            @profile="profile" @exit="exit"
        />`,
});

export const UnpaidTeamActions_admin = Template.bind({});
UnpaidTeamActions_admin.args = {
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

export const UnpaidTeamActions_notAdmin = Template.bind({});
UnpaidTeamActions_notAdmin.args = {
  user: { id: 2 },
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
