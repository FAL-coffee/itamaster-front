<template>
  <div>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <teamCard
          class="mt-10"
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
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>

    <div class="text-center mt-10 mb-5 headline">
      {{ $t("general.member") }}
    </div>
    <v-row v-for="(item, i) in team.teamMember" :key="i">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <membersCard
          class="mt-3"
          :user="item"
          :isAdmin="item.id == team.adminUserId"
          @memberKick="memberKick"
        />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <v-row
      v-for="(item, j) in team.invitations"
      :key="j + team.teamMember.length"
    >
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <membersCard
          class="mt-3"
          :user="item"
          @invitationCancel="invitationCancel"
        />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="text-right">
      <memberEditModal
        class="ma-5"
        :edit="false"
        :user="user"
        @save="memberSave"
      />
    </div>
  </div>
</template>
<script>
  import teamCard from "@organisms/Team/Card/TeamCard.vue";
  import membersCard from "@organisms/Team/Card/MembersCard.vue";
  import memberEditModal from "@organisms/Team/Modal/MemberEditModal.vue";
  export default {
    name: "teamCardList",
    components: {
      teamCard,
      membersCard,
      memberEditModal,
    },
    props: {
      user: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          name: "",
          initials: "",
          email: "",
          color: "",
          simpleIcon: false,
          // bgImg:'',
          iconImg: { url: "" },
          message: "",
        }),
      },
      team: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          teamId: "",
          isPaidTeam: true,
        }),
      },
      teamIdCheckData: {
        type: Object,
        require: false,
        default: () => ({ id: 0, status: "" }),
      },
    },
    methods: {
      teamSave(data) {
        return this.$emit("teamSave", data);
      },
      teamDestroy(id) {
        return this.$emit("teamDestroy", id);
      },
      memberKick(id) {
        return this.$emit("memberKick", {
          user_id: id,
          team_id: this.$props.team.id,
        });
      },
      invitationCancel(email) {
        return this.$emit("invitationCancel", {
          email: email,
          team_id: this.$props.team.id,
        });
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
      memberSave(data) {
        const query = { ...data, team_id: this.$props.team.id };
        return this.$emit("invitation", query);
      },
    },
  };
</script>
