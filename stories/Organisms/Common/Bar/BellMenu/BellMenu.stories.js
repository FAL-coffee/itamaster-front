import bellMenu from "@organisms/Common/Bar/BellMenu/BellMenu.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/Bar/BellMenu/BellMenu",
  components: { bellMenu },
  argTypes: {
    bellMenuOpen: { action: "bellMenuOpen" },
    join: { action: "join" },
    reject: { action: "reject" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { bellMenu },
  template:
    '<bellMenu v-bind="$props" @bellMenuOpen="bellMenuOpen" @join="join" @reject="reject"/>',
});
export const ReadedBellMenu = Template.bind({});
ReadedBellMenu.args = {
  user: { id: 0 },
  unreadCount: 0,
  invitations: [],
};
export const UnreadBellMenu = Template.bind({});
UnreadBellMenu.args = {
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
    trialed: false,
  },
  unreadCount: 2,
  invitations: [
    {
      id: 1,
      teamName: "itamasterTeam",
      teamId: "itamasterDevTeam",
    },
    {
      id: 2,
      teamName: "itamasterTeam2",
      teamId: "itamasterDevTeam2",
    },
  ],
};
