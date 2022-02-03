<template>
  <div>
    <teamInfoModal
      :team="team"
      @profile="profile"
      @toProjectPage="toProjectPage"
    />
    <teamEditModal
      v-if="
        user.id === team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      edit
      :team="team"
      :user="user"
      :teamIdCheck="teamIdCheck"
      @save="save"
      @destroy="destroy"
      @close="close"
      @idChange="idChange"
      @idCheck="idCheck"
    />
    <v-btn
      v-else-if="
        user.id != team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      fab
      small
      elevation="0"
      disabled
    >
      <v-icon small dark>mdi-pencil</v-icon>
    </v-btn>

    <v-btn
      v-if="
        user.id === team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      fab
      small
      elevation="0"
      color="pink"
      dark
      @click="$emit('memberEdit', team.teamId)"
    >
      <!-- <v-btn
            v-if="user.id===team.teamMember.find((v)=>v.id===team.adminUserId).id"
            fab
            small
            elevation="0"
            disabled
        > -->
      <v-icon small dark>mdi-account-edit</v-icon>
    </v-btn>
    <v-btn
      v-else-if="
        user.id != team.teamMember.find((v) => v.id === team.adminUserId).id
      "
      fab
      small
      elevation="0"
      disabled
    >
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
  import teamEditModal from "@organisms/Team/Modal/TeamEditModal.vue";
  import teamInfoModal from "@organisms/Team/Modal/TeamInfoModal.vue";
  export default {
    name: "teamActions",
    components: {
      teamExitConfMessage,
      teamEditModal,
      teamInfoModal,
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
      teamIdCheck: {
        type: String,
        require: true,
        default: "NotChecked",
        // NotChecked -> Checking -> okay || PleaseChange
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
      save(data) {
        return this.$emit("save", data);
      },
      destroy(id) {
        return this.$emit("destroy", id);
      },
      close() {
        return this.$emit("close");
      },
      idChange(id) {
        return this.$emit("idChange", id);
      },
      idCheck(v) {
        return this.$emit("idCheck", v);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
      toProjectPage() {
        return this.$emit("toProjectPage", this.$props.team.id);
      },
    },
  };
</script>
