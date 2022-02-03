<template>
  <teamCardListPage
    :user="user"
    :teams="teams"
    :teamIdCheckData="teamIdCheckData"
    :userIsPaid="userIsPaid"
    @profile="profile"
    @toProjectPage="toProjectPage"
    @memberEdit="memberEdit"
    @exit="exit"
    @teamSave="teamSave"
    @teamDestroy="teamDestroy"
    @close="close"
    @idChange="idChange"
    @idCheck="idCheck"
  />
</template>

<script>
  import teamCardListPage from "@template/Common/Team/TeamCardListPage.vue";
  export default {
    name: "index",
    components: {
      teamCardListPage,
    },
    computed: {
      user() {
        // return this.$store.state.modules.userModule.user
        return this.$store.getters["modules/demo/userModule/getUser"];
      },
      teams() {
        // 自分の所属するチームのリスト
        return this.$store.state.modules.demo.teamModule.teams;
      },
      teamIdCheckData() {
        return this.$store.state.modules.demo.teamModule.teamIdCheckData;
      },
      userIsPaid() {
        return true;
      },
    },
    methods: {
      teamSave(data) {
        // teamの登録/更新処理
        if (data.id === 0) {
          return this.$store.dispatch(
            "modules/demo/teamModule/teamCreate",
            data
          );
        } else if (data.id != 0) {
          return this.$store.dispatch(
            "modules/demo/teamModule/teamUpdate",
            data
          );
        }
      },
      teamDestroy(id) {
        return this.$store.dispatch("modules/demo/teamModule/teamDelete", id);
      },
      close() {
        return this.$store.commit("modules/demo/teamModule/teamIdInitialize");
      },
      exit(id) {
        return this.$store.dispatch("modules/demo/teamModule/exit", id);
      },
      idChange(id) {
        return this.$store.commit("modules/demo/teamModule/teamIdChanged", id);
      },
      idCheck(v) {
        return this.$store.dispatch(
          "modules/demo/teamModule/teamIdCheckRequest",
          v
        );
      },

      toProjectPage(teamId) {
        return this.$toDemoProjects(teamId);
      },
      memberEdit(teamId) {
        return this.$toDemoTeamManage(teamId);
      },

      profile(id) {
        return this.$demoProfile(id);
      },
    },
  };
</script>
