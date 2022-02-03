<template>
  <projectPage
    :user="user"
    :projects="projects"
    :team="team"
    @profile="profile"
    @toCreateEnvironmentSteps="toCreateEnvironmentSteps"
    @toTestEnvironment="toTestEnvironment"
    @toRepository="toRepository"
    @projectEditSave="projectEditSave"
    @projectDestroy="projectDestroy"
    @fileExport="fileExport"
    @testSuiteSave="testSuiteSave"
    @testSuiteDestroy="testSuiteDestroy"
    @testSuiteOpen="testSuiteOpen"
  />
</template>

<script>
  import projectPage from "@template/Common/Project/ProjectPage.vue";
  export default {
    name: "index",
    components: {
      projectPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },

      team() {
        // this.$nuxt.$route.params.teamId
        return this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId === this.$nuxt.$route.params.teamId
        );
      },
      projects() {
        // this.$nuxt.$route.params.teamIdを元にteam_idを特定する
        // team_idをteamのidとして持つprojectを特定し、配列型で取得する
        // vuex getterを利用する。 => projectはtester(projectMemberみたいな配列)を用意する必要がある。また、従属させるtestsuiteをtestSuits配列で格納する。
        //                          testsuite一件には、従属させるtestcaseの件数、状態別の件数が必要( testcase:num,complete,retest,issue )
        const team_id = this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId === this.$nuxt.$route.params.teamId
        ).id;
        let projects = this.$store.state.modules.projectModule.projects.filter(
          (element) => element.team_id === team_id
        );
        const scope = this;
        projects.map(function (element) {
          // thisのスコープが違う
          element.tester = scope.$store.state.modules.teamModule.teams.find(
            (element) => element.teamId === scope.$nuxt.$route.params.teamId
          ).teamMember;
          // element.testsuits = scope.$store.getters.modules.testsuiteModule.getTestSuitsAllBelow(element.id)
          element.testSuits = scope.$store.getters[
            "modules/testsuiteModule/getTestSuitsAllBelow"
          ](element.id);
          return element;
        });
        return projects;
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      toCreateEnvironmentSteps(id) {
        let query = { teamId: this.$nuxt.$route.params.teamId, project_id: id };
        return this.$toCreateEnvironmentSteps(query);
      },
      toTestEnvironment(url) {
        return window.open(url, "_blank");
      },
      toRepository(url) {
        return window.open(url, "_blank");
      },
      projectEditSave(data) {
        // プロジェクトを作成/更新する
        const request = {
          team_id: this.$store.state.modules.teamModule.teams.find(
            (element) => element.teamId === this.$nuxt.$route.params.teamId
          ).id,
          name: data.name,
          memo: data.memo,
          enabled: data.enabled,
          createEnvironmentSteps: data.createEnvironmentSteps,
          gitCooperation: data.gitCooperation,
          repositoryURL: data.repositoryURL,
          testEnvironmentURL: data.testEnvironmentURL,
        };
        if (data.id === 0) {
          return this.$store.dispatch(
            "modules/projectModule/projectCreate",
            request
          );
        } else if (data.id != 0) {
          request.id = data.id;
          return this.$store.dispatch(
            "modules/projectModule/projectUpdate",
            request
          );
        }
      },
      projectDestroy(id) {
        // プロジェクトを削除する
        const data = {
          project_id: id,
          team_id: this.$store.state.modules.teamModule.teams.find(
            (element) => element.teamId === this.$nuxt.$route.params.teamId
          ).id,
        };
        return this.$store.dispatch(
          "modules/projectModule/projectDelete",
          data
        );
      },
      // from.testSuiteTable
      testSuiteSave(data) {
        // テストスイートを作成/更新する
        data.team_id = this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId === this.$nuxt.$route.params.teamId
        ).id;
        if (data.testsuite.id === 0)
          return this.$store.dispatch(
            "modules/testsuiteModule/testsuiteCreate",
            data
          );
        if (data.testsuite.id != 0)
          return this.$store.dispatch(
            "modules/testsuiteModule/testsuiteUpdate",
            data
          );
      },
      testSuiteDestroy(data) {
        // テストスイートを削除する
        data.team_id = this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId === this.$nuxt.$route.params.teamId
        ).id;
        return this.$store.dispatch(
          "modules/testsuiteModule/testsuiteDelete",
          data
        );
      },
      testSuiteOpen(data) {
        // data[0] => run or manage
        // data[1] => project_id
        // data[2] => testsuite_id
        let query = {
          teamId: this.$nuxt.$route.params.teamId,
          project_id: data[1],
          testsuite_id: data[2],
        };
        if (data[0] === "run") return this.$toTestSuiteRun(query);
        if (data[0] === "manage") return this.$toTestSuiteManage(query);
      },
      fileExport(data) {
        return this.$store.dispatch("modules/projectModule/fileExport", data);
      },
      profile(id) {
        return this.$profile(id);
      },
    },
  };
</script>
