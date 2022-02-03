<template>
  <v-card elevation="4">
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
        <v-col cols="3">
          <linkBtn
            icon="mdi-arrow-right-bold-outline"
            :text="$t('general.to_project_page')"
            @linkClick="toProjectPage"
          />
        </v-col>
        <v-col cols="3">
          <teamActions
            :team="team"
            :user="user"
            :teamIdCheck="teamIdCheck"
            @close="close"
            @idChange="idChange"
            @idCheck="idCheck"
            @save="save"
            @destroy="destroy"
            @exit="exit"
            @profile="profile"
            @toProjectPage="toProjectPage"
            @memberEdit="memberEdit"
          />
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  import teamActions from "@organisms/Team/grouping/TeamActions.vue";
  export default {
    name: "teamCard",
    components: {
      linkBtn,
      teamActions,
      userInfoModal,
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
    methods: {
      idChange(id) {
        return this.$emit("idChange", id);
      },
      idCheck(v) {
        return this.$emit("idCheck", v);
      },
      close() {
        return this.$emit("close");
      },
      exit(id) {
        return this.$emit("exit", id);
      },
      save(v) {
        return this.$emit("save", v);
      },
      destroy(v) {
        return this.$emit("destroy", v);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
      toProjectPage() {
        return this.$emit("toProjectPage", this.$props.team.teamId);
      },
      memberEdit(id) {
        return this.$emit("memberEdit", id);
      },
    },
  };
</script>
