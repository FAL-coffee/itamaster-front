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
        return this.$store.getters["modules/userModule/getUser"];
      },
      team() {
        return this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId == this.$nuxt.$route.params.teamId
        );
      },
      teamIdCheckData() {
        return this.$store.state.modules.teamModule.teamIdCheckData;
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      teamSave(data) {
        // teamの登録/更新処理
        if (data.id === 0) {
          return this.$store.dispatch("modules/teamModule/teamCreate", data);
        } else if (data.id != 0) {
          return this.$store.dispatch("modules/teamModule/teamUpdate", data);
        }
      },
      teamDestroy(id) {
        // teamの削除処理
        return this.$store.dispatch("modules/teamModule/teamDelete", id);
      },
      memberKick(data) {
        // チームメンバーをチームから除外する
        return this.$store.dispatch("modules/teamModule/kickout", data);
      },
      invitation(data) {
        // チームへ招待する
        return this.$store.dispatch("modules/teamModule/invitation", data);
      },
      invitationCancel(data) {
        // チームへの招待を取り消す
        return this.$store.dispatch(
          "modules/teamModule/invitationCancel",
          data
        );
      },
      close() {
        // team editダイアログが閉じられた時、teamIdCheckDataを初期化する
        return this.$store.commit("modules/teamModule/teamIdInitialize");
      },
      exit(id) {
        return this.$store.dispatch("modules/teamModule/exit", id);
      },
      idChange(id) {
        // teamIdが変更された時、teamIdCheckDataを変更し、notCheckedにする
        return this.$store.commit("modules/teamModule/teamIdChanged", id);
      },
      idCheck(v) {
        // checkボタンがクリックされた時、APIを行いteamIdが使用可能かチェックし、teamIdCheckDataを変更する
        return this.$store.dispatch("modules/teamModule/teamIdCheckRequest", v);
      },

      toProjectPage(teamId) {
        return this.$toProjects(teamId);
      },
      memberEdit(teamId) {
        return this.$toTeamManage(teamId);
      },
      profile(id) {
        return this.$profile(id);
      },
    },
  };
</script>
