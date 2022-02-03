import userSelectCard from "@organisms/Demo/UserSelectCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Demo/UserSelectCard",
  components: { userSelectCard },
  argTypes: {
    userSelect: { action: "userSelect" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { userSelectCard },
  template: '<userSelectCard v-bind="$props" @userSelect="userSelect"/>',
});
export const UserSelectCard = Template.bind({});
UserSelectCard.args = {
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    iconImg: { url: "" },
    message: "this is message",
    trialed: true,
  },
};
