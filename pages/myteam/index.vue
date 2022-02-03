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
        return this.$store.getters["modules/userModule/getUser"];
      },
      teams() {
        // 自分の所属するチームのリスト
        return this.$store.state.modules.teamModule.teams;
      },
      teamIdCheckData() {
        return this.$store.state.modules.teamModule.teamIdCheckData;
      },
      userIsPaid() {
        return this.$store.getters["modules/paymentModule/userIsPaid"];
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
