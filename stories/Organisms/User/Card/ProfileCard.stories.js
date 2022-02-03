import profileCard from "@organisms/User/Card/ProfileCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/Card/ProfileCard",
  components: { profileCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { profileCard },
  template: '<profileCard v-bind="$props" />',
});
export const ProfileCard = Template.bind({});
ProfileCard.args = {
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
