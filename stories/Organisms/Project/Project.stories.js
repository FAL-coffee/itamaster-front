import project from "@organisms/Project/Project.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Project/Project",
  components: { project },
  argTypes: {
    toCreateEnvironmentSteps: { action: "toCreateEnvironmentSteps" },
    toTestEnvironment: { action: "toTestEnvironment" },
    toRepository: { action: "toRepository" },
    projectEditSave: { action: "projectEditSave" },
    projectDestroy: { action: "projectDestroy" },
    profile: { action: "profile" },
    testSuiteSave: { action: "testSuiteSave" },
    testSuiteDestroy: { action: "testSuiteDestroy" },
    testSuiteOpen: { action: "testSuiteOpen" },
    fileExport: { action: "fileExport" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { project },
  template: `
        <project v-bind="$props" @toCreateEnvironmentSteps="toCreateEnvironmentSteps" @toTestEnvironment="toTestEnvironment" 
            @toRepository="toRepository" @projectEditSave="projectEditSave" @projectDestroy="projectDestroy" @fileExport="fileExport"
                @testSuiteSave="testSuiteSave" @testSuiteDestroy="testSuiteDestroy" @profile="profile" @testSuiteOpen="testSuiteOpen"
        />`,
});
export const Project = Template.bind({});
Project.args = {
  user: { id: 1 },
  projects: [
    {
      id: 1,
      name: "Itamaster Development Project",
      memo:
        "This project aims to develop and release a test management tool called Itamaster.",
      tester: [
        {
          id: 1,
          initials: "UR",
          name: "user",
          email: "user@Itamaster.co.jp",
          color: "blue",
          simpleIcon: false,
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
          iconImg: { url: "" },
          message: "this is message",
        },
      ],
      // テスト環境構築手順書の有無
      createEnvironmentSteps: true,
      // テスト環境URL
      testEnvironmentURL: "localhost/itamaster/",
      // ソースコード管理URL
      repositoryURL: "https://github.com/",
      // git連携の有無
      gitCooperation: false,
      testSuits: [
        {
          id: 1,
          title: "Test Suite Title",
          remarks:
            "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
          creatorId: 1,
          writers: [1, 2, 3],
          steps: 50,
          testcase: 20,
          complete: 0,
          retest: 0,
          issue: 3,
        },
        {
          id: 2,
          title: "Test Suite Title",
          remarks:
            "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
          creatorId: 1,
          writers: [1, 2, 3],
          steps: 50,
          testcase: 19,
          complete: 5,
          retest: 1,
          issue: 2,
        },
      ],
      enabled: true,
    },
    {
      id: 2,
      name: "Itamaster Development Project2",
      memo:
        "This project aims to develop and release a test management tool called Itamaster2.",
      tester: [
        {
          id: 1,
          initials: "UR",
          name: "user",
          email: "user@Itamaster.co.jp",
          color: "blue",
          simpleIcon: false,
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
          iconImg: { url: "" },
          message: "this is message",
        },
      ],
      // テスト環境構築手順書の有無
      createEnvironmentSteps: true,
      // テスト環境URL
      testEnvironmentURL: "localhost/itamaster/",
      // ソースコード管理URL
      repositoryURL: "https://github.com/",
      // git連携の有無
      gitCooperation: false,
      testSuits: [
        {
          id: 1,
          title: "Test Suite Title",
          remarks:
            "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
          creatorId: 1,
          writers: [1, 2, 3],
          steps: 50,
          testcase: 20,
          complete: 0,
          retest: 0,
          issue: 3,
        },
        {
          id: 2,
          title: "Test Suite Title",
          remarks:
            "This space is the remarks column of the test suite. You cannot enter it. The remarks of the test suite registered using the edit test suite dialog are displayed.",
          creatorId: 1,
          writers: [1, 2, 3],
          steps: 50,
          testcase: 19,
          complete: 5,
          retest: 1,
          issue: 2,
        },
      ],
      enabled: true,
    },
  ],
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
        iconImg: { url: "" },
        message: "this is message",
      },
    ],
  },
};
