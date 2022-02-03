<template>
  <div>
    <v-row v-for="(team, i) in teams" :key="i">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <teamCard
          class="mt-10"
          v-if="team.isPaidTeam"
          :user="user"
          :team="team"
          :teamIdCheck="
            team.id === teamIdCheckData.id ? teamIdCheckData.status : 'Okay'
          "
          @profile="profile"
          @toProjectPage="toProjectPage"
          @memberEdit="memberEdit"
          @exit="exit"
          @save="teamSave"
          @destroy="teamDestroy"
          @close="close"
          @idChange="idChange"
          @idCheck="idCheck"
        />
        <unpaidTeamCard
          class="mt-10"
          v-else-if="!team.isPaidTeam"
          :user="user"
          :team="team"
          @profile="profile"
          @exit="exit"
        />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <div class="text-right">
      <teamEditModal
        class="ma-5"
        v-if="userIsPaid"
        :teamIdCheck="teamIdCheckData.status"
        :edit="false"
        :user="user"
        @save="teamSave"
        @close="close"
        @idChange="idChange"
        @idCheck="idCheck"
      />
      <onlyPaidMemberAvailableMessage class="ma-5" v-else-if="!userIsPaid" />
    </div>
  </div>
</template>
<script>
  import onlyPaidMemberAvailableMessage from "@molecules/Msg/OnlyPaidMemberAvailableMessage.vue";
  import teamEditModal from "@organisms/Team/Modal/TeamEditModal.vue";
  import teamCard from "@organisms/Team/Card/TeamCard.vue";
  import unpaidTeamCard from "@organisms/Team/Card/UnpaidTeamCard.vue";
  export default {
    name: "teamCardList",
    components: {
      onlyPaidMemberAvailableMessage,
      teamEditModal,
      teamCard,
      unpaidTeamCard,
    },
    props: {
      teams: {
        type: Array,
        require: false,
        default: () => [],
      },
      teamIdCheckData: {
        type: Object,
        require: true,
        default: () => ({ id: 0, status: "NotChecked" }),
      },
      userIsPaid: {
        type: Boolean,
        require: false,
        default: false,
      },
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
    },
    methods: {
      teamSave(data) {
        return this.$emit("teamSave", data);
      },
      teamDestroy(id) {
        return this.$emit("teamDestroy", id);
      },
      close() {
        return this.$emit("close");
      },
      exit(id) {
        return this.$emit("exit", id);
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
      toProjectPage(id) {
        return this.$emit("toProjectPage", id);
      },
      memberEdit(id) {
        return this.$emit("memberEdit", id);
      },
    },
  };
</script>
