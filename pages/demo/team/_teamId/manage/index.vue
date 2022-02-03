<template>
  <teamManagePage
    :user="user"
    :team="team"
    :teamIdCheckData="teamIdCheckData"
    @profile="profile"
    @toProjectPage="toProjectPage"
    @invitation="invitation"
    @teamSave="teamSave"
    @teamDestroy="teamDestroy"
    @close="close"
    @idChange="idChange"
    @idCheck="idCheck"
    @exit="exit"
    @memberKick="memberKick"
    @invitationCancel="invitationCancel"
    @memberEdit="memberEdit"
  />
</template>

<script>
  import teamManagePage from "@template/Admin/Team/TeamManagePage.vue";
  export default {
    name: "index",
    components: {
      teamManagePage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/demo/userModule/getUser"];
      },
      team() {
        return this.$store.state.modules.demo.teamModule.teams.find(
          (element) => element.teamId == this.$nuxt.$route.params.teamId
        );
      },
      teamIdCheckData() {
        return this.$store.state.modules.demo.teamModule.teamIdCheckData;
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
        // teamの削除処理
        return this.$store.dispatch("modules/demo/teamModule/teamDelete", id);
      },
      memberKick(data) {
        // チームメンバーをチームから除外する
        return this.$store.dispatch("modules/demo/teamModule/kickout", data);
      },
      invitation(data) {
        // チームへ招待する
        return this.$store.dispatch("modules/demo/teamModule/invitation", data);
      },
      invitationCancel(data) {
        // チームへの招待を取り消す
        return this.$store.dispatch(
          "modules/demo/teamModule/invitationCancel",
          data
        );
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
