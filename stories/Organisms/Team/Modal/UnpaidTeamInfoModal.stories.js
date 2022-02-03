import unpaidTeamInfoModal from "@organisms/Team/Modal/UnpaidTeamInfoModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Modal/UnpaidTeamInfoModal",
  components: { unpaidTeamInfoModal },
  argTypes: {
    profile: { action: "profile" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { unpaidTeamInfoModal },
  template: '<unpaidTeamInfoModal v-bind="$props" @profile="profile"/>',
});
export const UnpaidTeamInfoModal = Template.bind({});
UnpaidTeamInfoModal.args = {
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
