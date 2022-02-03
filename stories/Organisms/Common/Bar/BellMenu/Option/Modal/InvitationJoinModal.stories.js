import invitationJoinModal from "@organisms/Common/Bar/BellMenu/Option/Modal/InvitationJoinModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/Bar/BellMenu/Option/Modal/InvitationJoinModal",
  components: { invitationJoinModal },
  argTypes: {
    join: { action: "join" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { invitationJoinModal },
  template: '<invitationJoinModal v-bind="$props" @join="join"/>',
});
export const InvitationJoinModal = Template.bind({});
InvitationJoinModal.args = {
  invitation: {
    id: 1,
    teamName: "itamasterTeam",
    teamId: "itamasterDevTeam",
  },
};
