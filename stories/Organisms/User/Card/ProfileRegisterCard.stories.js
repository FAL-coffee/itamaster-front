import profileRegisterCard from "@organisms/User/Card/ProfileRegisterCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/Card/ProfileRegisterCard",
  components: { profileRegisterCard },
  argTypes: {
    profileSave: { action: "profileSave" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { profileRegisterCard },
  template:
    '<profileRegisterCard v-bind="$props" @profileSave="profileSave" />',
});
export const ProfileRegisterCard = Template.bind({});
ProfileRegisterCard.args = {
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
};
