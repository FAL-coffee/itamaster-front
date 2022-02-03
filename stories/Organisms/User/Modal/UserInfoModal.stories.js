import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/User/Modal/UserInfoModal",
  components: { userInfoModal },
  argTypes: {
    profile: { action: "profile" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { userInfoModal },
  template: '<userInfoModal v-bind="$props" @profile="profile"/>',
});
export const UserInfoModal = Template.bind({});
UserInfoModal.args = {
  user: {
    id: 1,
    name: "user",
    initials: "UR",
    email: "user@Itamaster.co.jp",
    color: "brown",
    simpleIcon: true,
    // bgImg:'',
    iconImg: { url: "" },
    trialed: false,
  },
};
