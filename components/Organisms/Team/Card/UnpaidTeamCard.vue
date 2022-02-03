<template>
  <v-card elevation="4" color="blue-grey lighten-4">
    <v-card-title>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="pr-3">
            <v-icon v-if="team.private" large color="grey">mdi-lock</v-icon>
            <v-icon v-else-if="!team.private" large color="grey"
              >mdi-lock-open</v-icon
            >
          </div>
        </template>
        <span>{{ team.private ? "private" : "public" }}</span>
      </v-tooltip>
      {{ team.name }}
    </v-card-title>

    <v-card-subtitle class="">
      <v-row>
        <v-col cols="6">
          {{ $t("general.admin") }}:
          <userInfoModal
            size="large"
            :user="team.teamMember.find((v) => v.id === team.adminUserId)"
            @profile="profile"
          />
          {{ team.teamMember.find((v) => v.id === team.adminUserId).email }}
        </v-col>
        <v-col cols="3"> </v-col>
        <v-col cols="3">
          <unpaidTeamActions
            :team="team"
            :user="user"
            @exit="exit"
            @profile="profile"
          />
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  import unpaidTeamActions from "@organisms/Team/grouping/UnpaidTeamActions.vue";
  export default {
    name: "unpaidTeamCard",
    components: {
      linkBtn,
      userInfoModal,
      unpaidTeamActions,
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
    methods: {
      exit(id) {
        return this.$emit("exit", id);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
