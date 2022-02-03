import projectOptions from "@organisms/Project/grouping/ProjectOptions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Project/grouping/ProjectOptions",
  components: { projectOptions },
  argTypes: {
    createEnvironmentStepsSwitch: { action: "createEnvironmentStepsSwitch" },
    testEnvironmentURLChanged: { action: "testEnvironmentURLChanged" },
    repositoryURLChanged: { action: "repositoryURLChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { projectOptions },
  template:
    '<projectOptions v-bind="$props" @createEnvironmentStepsSwitch="createEnvironmentStepsSwitch" @testEnvironmentURLChanged="testEnvironmentURLChanged" @repositoryURLChanged="repositoryURLChanged" />',
});
export const ProjectOptions = Template.bind({});
ProjectOptions.args = {
  // テスト環境構築手順書の有無
  createEnvironmentSteps: true,
  // テスト環境URL
  testEnvironmentURL: "localhost/itamaster/",
  // ソースコード管理URL
  repositoryURL: "https://github.com/",
  // git連携の有無
  gitCooperation: false,
};
