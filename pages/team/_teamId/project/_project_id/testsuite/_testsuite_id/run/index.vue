<template>
  <testRunPage
    :user="user"
    :testCases="testCases"
    :locked="locked"
    @profile="profile"
    @lock="lock"
    @unlock="unlock"
    @completion="completion"
  />
</template>

<script>
  import testRunPage from "@template/Common/TestCase/TestRunPage.vue";
  export default {
    name: "index",
    components: {
      testRunPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },
      locked() {},
      testCases() {
        // テストスイートのidから、testcaseのリストを取得
        // this.$store.state.modules.testcaseModule.testcases.filter(element => element.testsuite_id == this.$nuxt.$route.params.testsuite_id)
        // ↑ から、ログインユーザーがtesterに指定されているtestcaseを取得する
        let testcases = this.$store.state.modules.testcaseModule.testcases
          .filter(
            (element) =>
              element.testsuite_id == this.$nuxt.$route.params.testsuite_id
          )
          .filter((element) => element.testerId === this.user.id);
        return testcases;
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      lock(userId) {
        // 未実装
      },
      unlock() {
        // 未実装
      },
      completion(data) {
        // テスト実行を完了し、サーバーに送信する。その後、myteamに遷移
        const request = {
          team_id: this.$store.state.modules.teamModule.teams.find(
            (element) => element.teamId === this.$nuxt.$route.params.teamId
          ).id,
          project_id: this.$nuxt.$route.params.project_id,
          testsuite_id: this.$nuxt.$route.params.testsuite_id,
          completion: data,
        };
        return this.$store.dispatch(
          "modules/testcaseModule/testcaseConfirm",
          request
        );
      },
      profile(id) {
        return this.$profile(id);
      },
    },
  };
</script>
