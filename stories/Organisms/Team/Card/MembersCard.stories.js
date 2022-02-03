import membersCard from "@organisms/Team/Card/MembersCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Card/MembersCard",
  components: { membersCard },
  argTypes: {
    memberKick: { action: "memberKick" },
    invitingCancel: { action: "invitingCancel" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { membersCard },
  template:
    '<membersCard v-bind="$props" @memberKick="memberKick" @invitingCancel="invitingCancel"/>',
});
export const MembersCard_UserisMember = Template.bind({});
MembersCard_UserisMember.args = {
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
    inviting: false,
  },
};

export const MembersCard_UserisnotMember = Template.bind({});
MembersCard_UserisnotMember.args = {
  user: {
    email: "user@Itamaster.co.jp",
    inviting: true,
  },
};
