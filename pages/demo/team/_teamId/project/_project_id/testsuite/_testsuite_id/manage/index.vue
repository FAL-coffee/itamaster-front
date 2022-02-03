<template>
  <testManagePage
    :user="user"
    :testCases="testCases"
    :persons="persons"
    @profile="profile"
    @testCaseSave="testCaseSave"
    @testCaseDestroy="testCaseDestroy"
    @sortMode="sortMode"
  />
</template>

<script>
  import testManagePage from "@template/Common/TestCase/TestManagePage.vue";
  export default {
    name: "index",
    components: {
      testManagePage,
    },
    computed: {
      user() {
        // userが該当するtestsuiteのwriter権限を所持しているか、teamのadminUserであるか、testsuiteのcreaterである場合、user.writer=true
        // element.testSuits = scope.$store.getters['modules/demo/testsuiteModule/getTestSuitsAllBelow'](element.id)
        // if(this.$props.team.adminUserId===this.$props.user.id) propsProjects[i].testSuits[j].auth=true;
        // if(propsProjects[i].testSuits[j].createrId===this.$props.user.id) propsProjects[i].testSuits[j].auth=true;
        // if(propsProjects[i].testSuits[j].writers.includes(this.$props.user.id)) propsProjects[i].testSuits[j].auth=true;
        const user = this.$store.getters["modules/demo/userModule/getUser"];
        user.writer = false;
        // userが該当するtestsuiteを所持する、teamの管理者である場合、user.writerをtrueにし、testcaseの登録/更新/削除、ソートモード移行を有効にする
        if (
          this.$store.state.modules.demo.teamModule.teams.find(
            (element) => element.teamId == this.$nuxt.$route.params.teamId
          ).adminUserId === user.id
        )
          user.writer = true;
        // userが該当するtestsuiteの作成者である場合、user.writerをtrueにし、testcaseの登録/更新/削除、ソートモード移行を有効にする
        if (
          this.$store.state.modules.demo.testsuiteModule.testsuits.find(
            (element) => element.id == this.$nuxt.$route.params.testsuite_id
          ).createrId === user.id
        )
          user.writer = true;
        // userが該当するtestsuiteの編集権限保持者である場合、user.writerをtrueにし、testcaseの登録/更新/削除、ソートモード移行を有効にする
        if (
          this.$store.state.modules.demo.testsuiteModule.testsuits
            .find(
              (element) => element.id == this.$nuxt.$route.params.testsuite_id
            )
            .writers.includes(user.id)
        )
          user.writer = true;
        return user;
      },
      persons() {
        // teamMemberからpersonsを取得する
        return this.$store.state.modules.demo.teamModule.teams.find(
          (element) => element.teamId === this.$nuxt.$route.params.teamId
        ).teamMember;
      },
      testCases() {
        // testsuite_idによってtestsuiteに従属するtestcaseの配列を取得する
        return this.$store.state.modules.demo.testcaseModule.testcases.filter(
          (element) =>
            element.testsuite_id == this.$nuxt.$route.params.testsuite_id
        );
      },
    },
    methods: {
      testCaseSave(data) {
        // テストケースの作成/更新
        const request = {
          team_id: this.$store.state.modules.demo.teamModule.teams.find(
            (element) => element.teamId === this.$nuxt.$route.params.teamId
          ).id,
          project_id: this.$nuxt.$route.params.project_id,
          testsuite_id: this.$nuxt.$route.params.testsuite_id,
          testcase: data,
        };
        if (data.id === 0)
          return this.$store.dispatch(
            "modules/demo/testcaseModule/testcaseCreate",
            request
          );
        if (data.id != 0)
          return this.$store.dispatch(
            "modules/demo/testcaseModule/testcaseUpdate",
            request
          );
      },
      testCaseDestroy(id) {
        // テストケースを一件削除する
        const request = {
          team_id: this.$store.state.modules.demo.teamModule.teams.find(
            (element) => element.teamId === this.$nuxt.$route.params.teamId
          ).id,
          project_id: this.$nuxt.$route.params.project_id,
          testsuite_id: this.$nuxt.$route.params.testsuite_id,
          testcase_id: id,
        };
        return this.$store.dispatch(
          "modules/demo/testcaseModule/testcaseDelete",
          request
        );
      },
      sortMode() {
        // sortモードに移行するボタンを開発する。それまではソート昨日は取り置き。
      },
      profile(id) {
        return this.$demoProfile(id);
      },
    },
  };
</script>
