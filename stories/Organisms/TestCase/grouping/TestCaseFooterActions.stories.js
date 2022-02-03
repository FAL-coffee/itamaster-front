import testCaseFooterActions from "@organisms/TestCase/grouping/TestCaseFooterActions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/TestCase/grouping/TestCaseFooterActions",
  components: { testCaseFooterActions },
  argTypes: {
    save: { action: "save" },
    sortMode: { action: "sortMode" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { testCaseFooterActions },
  template:
    '<testCaseFooterActions v-bind="$props" @save="save" @sortMode="sortMode"/>',
});
export const TestCaseFooterActions = Template.bind({});
TestCaseFooterActions.args = {
  user: { id: 1, writer: true },
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
