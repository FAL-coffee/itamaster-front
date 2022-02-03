import invitation from "@organisms/Common/Bar/BellMenu/Option/Invitation.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/Bar/BellMenu/Option/Invitation",
  components: { invitation },
  argTypes: {
    join: { action: "join" },
    reject: { action: "reject" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { invitation },
  template: '<invitation v-bind="$props" @join="join" @reject="reject" />',
});
export const Invitation = Template.bind({});
Invitation.args = {
  invitation: {
    id: 1,
    teamName: "itamasterTeam",
    teamId: "itamasterDevTeam",
  },
};
