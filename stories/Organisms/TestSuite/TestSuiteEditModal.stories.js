import testSuiteEditModal from "@organisms/TestSuite/TestSuiteEditModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestSuite/TestSuiteEditModal",
  components: { testSuiteEditModal },
  argTypes: {
    edit: { control: { type: "boolean" } },
    save: { action: "save" },
    destroy: { action: "destroy" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testSuiteEditModal },
  template:
    '<testSuiteEditModal v-bind="$props" @save="save" @destroy="destroy"/>',
});

export const TestSuiteEditModalNew = Template.bind({});
TestSuiteEditModalNew.args = {
  edit: false,
  user: { id: 1 },
  persons: [
    {
      id: 1,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 2,
      initials: "TE",
      name: "tester",
      email: "tester@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 3,
      initials: "PG",
      name: "programer",
      email: "programer@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 4,
      initials: "PM",
      name: "manager",
      email: "manager@Itamaster.co.jp",
      color: "red",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 5,
      initials: "純",
      name: "純一",
      email: "junniti@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 6,
      initials: "FW",
      name: "forward",
      email: "forward@Itamaster.co.jp",
      color: "blue",
      simpleIcon: true,
      iconImg: { url: "" },
    },
  ],
};

export const TestSuiteEditModalEdit = Template.bind({});
TestSuiteEditModalEdit.args = {
  edit: true,
  user: { id: 1 },
  testSuite: {
    id: 1,
    creatorId: 1,
    title: "test suite title",
    remarks: "test suite remarks",
    steps: 50,
    writers: [1, 2],
  },
  persons: [
    {
      id: 1,
      initials: "UR",
      name: "user",
      email: "user@Itamaster.co.jp",
      color: "blue",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 2,
      initials: "TE",
      name: "tester",
      email: "tester@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 3,
      initials: "PG",
      name: "programer",
      email: "programer@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 4,
      initials: "PM",
      name: "manager",
      email: "manager@Itamaster.co.jp",
      color: "red",
      simpleIcon: false,
      iconImg: { url: "" },
    },
    {
      id: 5,
      initials: "純",
      name: "純一",
      email: "junniti@Itamaster.co.jp",
      color: "red",
      simpleIcon: true,
      iconImg: { url: "" },
    },
    {
      id: 6,
      initials: "FW",
      name: "forward",
      email: "forward@Itamaster.co.jp",
      color: "blue",
      simpleIcon: true,
      iconImg: { url: "" },
    },
  ],
};
