import projectEditModal from "@organisms/Project/Modal/ProjectEditModal.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Project/Modal/ProjectEditModal",
  components: { projectEditModal },
  argTypes: {
    edit: { control: { type: "boolean" } },
    save: { action: "save" },
    destroy: { action: "destroy" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { projectEditModal },
  template:
    '<projectEditModal v-bind="$props" @save="save" @destroy="destroy"/>',
});
export const ProjectEditModalEdit = Template.bind({});
ProjectEditModalEdit.args = {
  edit: true,
  user: { id: 1 },
  project: {
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
        creater: {
          id: 1,
          name: "creater",
          initials: "CR",
          email: "creater@Itamaster.co.jp",
          color: "blue",
          simpleIcon: true,
          /*bgImg:"",*/ iconImg: { url: "" },
        },
        writers: [
          {
            id: 1,
            initials: "W1",
            name: "writer1",
            email: "writer1@Itamaster.co.jp",
            color: "red",
            simpleIcon: true,
            /*bgImg:"",*/ iconImg: { url: "" },
          },
          {
            id: 2,
            initials: "W2",
            name: "writer2",
            email: "writer2@Itamaster.co.jp",
            color: "brown",
            simpleIcon: true,
            /*bgImg:"",*/ iconImg: { url: "" },
          },
        ],
        auth: false,
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
        creater: {
          id: 1,
          name: "creater",
          initials: "CR",
          email: "creater@Itamaster.co.jp",
          color: "blue",
          simpleIcon: true,
          /*bgImg:"",*/ iconImg: { url: "" },
        },
        writers: [
          {
            id: 1,
            initials: "W1",
            name: "writer1",
            email: "writer1@Itamaster.co.jp",
            color: "red",
            simpleIcon: true,
            /*bgImg:"",*/ iconImg: { url: "" },
          },
          {
            id: 2,
            initials: "W2",
            name: "writer2",
            email: "writer2@Itamaster.co.jp",
            color: "brown",
            simpleIcon: true,
            /*bgImg:"",*/ iconImg: { url: "" },
          },
        ],
        auth: true,
        testcase: 19,
        complete: 5,
        retest: 1,
        issue: 2,
      },
    ],
    enabled: true,
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
  destroyOk: false,
};

export const ProjectEditModalNew = Template.bind({});
ProjectEditModalNew.args = {
  user: { id: 1 },
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
};
