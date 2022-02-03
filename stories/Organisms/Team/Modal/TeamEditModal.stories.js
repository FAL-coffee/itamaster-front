import teamEditModal from "@organisms/Team/Modal/TeamEditModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Team/Modal/TeamEditModal",
  components: { teamEditModal },
  argTypes: {
    teamIdCheck: {
      control: {
        type: "select",
        options: ["NotChecked", "Checking", "Okay", "PleaseChange"],
      },
    },
    close: { action: "close" },
    idChange: { action: "idChange" },
    idCheck: { action: "idCheck" },
    save: { action: "save" },
    destroy: { action: "destroy" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { teamEditModal },
  template:
    //'<teamEditModal v-bind="$props" @save="save" @destroy="destroy"/>',
    '<teamEditModal v-bind="$props" @close="close" @idChange="idChange" @idCheck="idCheck" @save="save" @destroy="destroy"/>',
});

export const TeamEditModalNew = Template.bind({});
TeamEditModalNew.args = {
  edit: false,
  teamIdCheck: "NotChecked",
};

export const TeamEditModalEdit = Template.bind({});
TeamEditModalEdit.args = {
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
  team: {
    id: 1,
    teamId: "itamasterDevelopmentTeam",
    name: "Itamaster Development Team",
    memo:
      'We are the team that develops the integrated test management tool of the system development team called "Itamaster".',
    adminUserId: 1,
    private: true,
    isPaidTeam: true,
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
      {
        id: 2,
        initials: "TE",
        name: "tester",
        email: "tester@Itamaster.co.jp",
        color: "red",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
      {
        id: 3,
        initials: "PG",
        name: "programer",
        email: "programer@Itamaster.co.jp",
        color: "green",
        simpleIcon: true,
        // bgImg:'',
        iconImg: { url: "" },
        message: "this is message",
      },
    ],
  },
  teamIdCheck: "Okay",
};
