<template>
  <div>
    <unpaidTeamInfoModal
      :team="team"
      @profile="profile"
      @toProjectPage="toProjectPage"
    />
    <v-btn fab small elevation="0" disabled>
      <v-icon small dark>mdi-pencil</v-icon>
    </v-btn>

    <v-btn fab small elevation="0" disabled>
      <v-icon small dark>mdi-account-edit</v-icon>
    </v-btn>

    <!-- チームから抜ける確認メッセージを出す -->
    <teamExitConfMessage
      v-if="
        user.id != team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      @exitClick="exit"
    />
    <v-btn
      v-else-if="
        user.id === team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      fab
      small
      elevation="0"
      disabled
    >
      <v-icon small dark>mdi-exit-to-app</v-icon>
    </v-btn>
  </div>
</template>
<script>
  import teamExitConfMessage from "@molecules/Msg/TeamExitConfMessage.vue";
  import unpaidTeamInfoModal from "@organisms/Team/Modal/UnpaidTeamInfoModal.vue";
  export default {
    name: "unpaidTeamActions",
    components: {
      teamExitConfMessage,
      unpaidTeamInfoModal,
    },
    props: {
      team: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          teamId: "",
          isPaidTeam: true,
        }),
      },
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
    },
    computed: {},
    methods: {
      exit() {
        return this.$emit("exit", this.team.id);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
