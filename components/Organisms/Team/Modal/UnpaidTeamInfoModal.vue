<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="600" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon depressed>
          <v-icon x-large color="blue">mdi-information</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ team.name }}
          <v-spacer></v-spacer>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-icon v-if="team.private" large color="grey">mdi-lock</v-icon>
                <v-icon v-else-if="!team.private" large color="grey"
                  >mdi-lock-open</v-icon
                >
              </div>
            </template>
            <span>{{ team.private ? "private" : "public" }}</span>
          </v-tooltip>
          <v-btn
            elevation="0"
            fab
            color="transparent"
            small
            @click="dialog = false"
          >
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-5">
          <span style="white-space: pre-line;">{{ team.memo }}</span>
        </v-card-text>

        <v-card-text>
          <div class="mb-3">
            {{ $t("general.admin") }}
            <br />
            <userInfoModal
              @profile="profile"
              :user="team.teamMember.find((v) => v.id === team.adminUserId)"
            />
            {{ team.teamMember.find((v) => v.id === team.adminUserId).name }}
            <v-divider></v-divider>
            <div class="mt-5" />
            <v-alert dense outlined text type="warning">
              {{
                $t(
                  "organisms.team.modal.unpaid_team_info_modal.admin_isnot_paid"
                )
              }}
              <br />
              {{
                $t("organisms.team.modal.unpaid_team_info_modal.team_is_frozen")
              }}
            </v-alert>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            {{ $t("general.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  export default {
    name: "unpaidTeamInfoModal",
    components: {
      linkBtn,
      userInfoModal,
    },
    data() {
      return {
        dialog: false,
      };
    },
    props: {
      team: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          teamId: "",
          isPaidTeam: false,
        }),
      },
    },
    computed: {},
    methods: {
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
