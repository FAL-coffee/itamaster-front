import memberEditModal from "@organisms/Team/Modal/MemberEditModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Modal/MemberEditModal",
  components: { memberEditModal },
  argTypes: {
    edit: { control: { type: "boolean" } },
    save: { action: "save" },
    destroy: { action: "destroy" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { memberEditModal },
  template:
    '<memberEditModal v-bind="$props" @save="save" @destroy="destroy"/>',
});

export const MemberEditModalNew = Template.bind({});
MemberEditModalNew.args = {
  edit: false,
};

export const MemberEditModalEdit = Template.bind({});
MemberEditModalEdit.args = {
  edit: true,
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
  },
};
