<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="600" persistent>
      <template v-slot:activator="{ on, attrs }">
        <div v-if="edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="cyan"
            small
            elevation="0"
            @click="initialize"
          >
            <v-icon small dark>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div v-else-if="!edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="pink"
            small
            @click="initialize"
          >
            <v-icon small dark>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ $t("organisms.team.modal.team_edit_modal.modal_name") }}
          <v-spacer></v-spacer>
          <div v-if="edit">
            <v-icon v-if="team.private" large color="grey">mdi-lock</v-icon>
            <v-icon v-else-if="!team.private" large color="grey"
              >mdi-lock-open</v-icon
            >
          </div>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-5">
          <div>
            {{ $t("general.team") }} ID
            <v-form>
              <v-row>
                <v-col cols="10">
                  <v-text-field
                    v-if="dialog"
                    class=""
                    v-model="teamId"
                    counter="40"
                    :rules="teamIdrules"
                    :hint="
                      $t('organisms.team.modal.team_edit_modal.team_id_remarks')
                    "
                    :error-messages="errorMessage"
                    filled
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <div style="margin-left: -5px;" v-bind="attrs" v-on="on">
                        <v-icon
                          v-if="teamIdCheck === 'NotChecked'"
                          class="mt-3"
                          color="warning"
                          large
                          >mdi-alert-circle-check-outline</v-icon
                        >
                        <v-progress-circular
                          v-if="teamIdCheck === 'Checking'"
                          class="mt-3"
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                        <v-icon
                          v-if="teamIdCheck === 'Okay'"
                          class="mt-3"
                          color="primary"
                          large
                          >mdi-hand-okay</v-icon
                        >
                        <v-icon
                          v-if="teamIdCheck === 'PleaseChange'"
                          class="mt-3"
                          color="error"
                          large
                          >mdi-account-alert-outline</v-icon
                        >
                      </div>
                    </template>
                    <span>{{ teamIdCheck }}</span>
                  </v-tooltip>
                </v-col>

                <v-col cols="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <div
                        style="margin-left: -5px; margin-top: 2px;"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-btn
                          elevation="0"
                          fab
                          class="mt-2"
                          small
                          @click="idChecked()"
                        >
                          <v-icon large dark color="primary">mdi-reload</v-icon>
                        </v-btn>
                      </div>
                    </template>
                    <span>{{
                      $t("organisms.team.modal.team_edit_modal.please_id_check")
                    }}</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <div class="mt-3">
            {{ $t("organisms.team.modal.team_edit_modal.team_name") }}
            <v-form>
              <v-text-field
                v-if="dialog"
                class=""
                v-model="teamName"
                counter="30"
                :rules="teamNamerules"
                filled
                required
              ></v-text-field>
            </v-form>
          </div>
          <div class="mt-3">
            {{ $t("general.team") }} {{ $t("general.memo") }}
            <v-form>
              <v-textarea
                v-if="dialog"
                class=""
                v-model="teamMemo"
                counter="300"
                :rules="teamMemorules"
                filled
                required
              ></v-textarea>
            </v-form>
          </div>
          <div class="mt-3">
            private : {{ editTeamData.private }}
            <lockConfMessage
              v-if="!editTeamData.private"
              class="ml-3"
              @lock="lock"
            >
              <template v-slot:alertText>
                {{ $t("organisms.team.modal.team_edit_modal.private_conf") }}
                {{ $t("organisms.team.modal.team_edit_modal.private_remarks") }}
                <br />
                ※{{
                  $t(
                    "organisms.team.modal.team_edit_modal.register_since_being_done_config_change"
                  )
                }}
              </template>
            </lockConfMessage>
            <unlockConfMessage
              v-else-if="editTeamData.private"
              class="ml-3"
              @unlock="unlock"
            >
              <template v-slot:alertText>
                {{ $t("organisms.team.modal.team_edit_modal.public_conf") }}
                {{ $t("organisms.team.modal.team_edit_modal.public_remarks") }}
                <br />
                ※{{
                  $t(
                    "organisms.team.modal.team_edit_modal.register_since_being_done_config_change"
                  )
                }}
              </template>
            </unlockConfMessage>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!edit" disabled>
            {{ $t("general.delete") }}
          </v-btn>
          <deleteConfMessage
            v-else-if="edit"
            @deleteClick="destroy(), close()"
          />
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="save(), close()"
            class="ml-3"
          >
            {{ $t("general.save") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
  import lockConfMessage from "@molecules/Msg/LockConfMessage.vue";
  import unlockConfMessage from "@molecules/Msg/UnlockConfMessage.vue";
  export default {
    name: "teamEditModal",
    components: {
      deleteConfMessage,
      lockConfMessage,
      unlockConfMessage,
    },
    data() {
      return {
        dialog: false,
        disabled: true,
        teamIdValid: false,
        teamNameValid: false,
        teamMemoValid: false,
        teamIdrules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            v.length <= 40 || this.$t("general.input_alert_msg.less_than_40"),
          (v) =>
            /^([a-zA-Z0-9]{6,})$/.test(v) ||
            this.$t("general.input_alert_msg.more_than_6"),
        ],
        teamNamerules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            v.length <= 30 || this.$t("general.input_alert_msg.less_than_30"),
        ],
        teamMemorules: [
          (v) =>
            v.length <= 300 || this.$t("general.input_alert_msg.less_than_300"),
        ],
        editTeamData: {
          id: 0,
          teamId: "",
          name: "",
          memo: "",
          adminUserId: 0,
          private: true,
        },
      };
    },
    props: {
      edit: {
        type: Boolean,
        require: false,
        default: false,
      },
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
    computed: {
      errorMessage() {
        if (this.$props.teamIdCheck === "PleaseChange")
          return this.$t(
            "organisms.team.modal.team_edit_modal.id_please_change"
          );
        else return "";
      },
      teamId: {
        get() {
          return this.$data.editTeamData.teamId;
        },
        set(v) {
          this.$set(this.$data.editTeamData, "teamId", v);
          this.$data.teamIdValid =
            !!v && v.length <= 40 && /^([a-zA-Z0-9]{6,})$/.test(v);
          if (
            this.$props.teamIdCheck === "Okay" ||
            this.$props.teamIdCheck === "" ||
            this.$props.teamIdCheck === "PleaseChange"
          )
            this.idChanged();
          this.$data.disabled = true;
        },
      },
      teamName: {
        get() {
          return this.$data.editTeamData.name;
        },
        set(v) {
          this.$set(this.$data.editTeamData, "name", v);
          this.$data.teamNameValid = !!v && v.length <= 30;
          this.disabledCheck();
        },
      },
      teamMemo: {
        get() {
          return this.$data.editTeamData.memo;
        },
        set(v) {
          this.$set(this.$data.editTeamData, "memo", v);
          this.$data.teamMemoValid = v.length <= 300;
          this.disabledCheck();
        },
      },
    },
    watch: {
      teamIdCheck: function (status) {
        if (status === "Okay") this.disabledCheck();
        // this.disabledCheck();
      },
    },
    methods: {
      lock() {
        this.$set(this.editTeamData, "private", true);
        this.disabledCheck();
      },
      unlock() {
        this.$set(this.editTeamData, "private", false);
        this.disabledCheck();
      },
      idChanged() {
        return this.$emit("idChange", this.$data.editTeamData.id);
      },
      idChecked() {
        if (this.$props.teamIdCheck === "Okay") return;
        return this.$emit("idCheck", {
          id: this.$data.editTeamData.id,
          teamId: this.$data.editTeamData.teamId,
        });
      },
      close() {
        this.$emit("close");
        this.$data.dialog = false;
      },
      disabledCheck() {
        this.$data.disabled = !(
          this.$data.teamIdValid &&
          this.$data.teamNameValid &&
          this.$data.teamMemoValid &&
          this.$props.teamIdCheck === "Okay"
        );
      },
      initialize() {
        this.close();
        this.$data.disabled = true;
        if (this.$props.edit) {
          this.$data.teamIdValid = true;
          this.$data.teamNameValid = true;
          this.$data.teamMemoValid = true;
          this.$set(this.$data.editTeamData, "id", this.$props.team.id);
          this.$set(this.$data.editTeamData, "teamId", this.$props.team.teamId);
          this.$set(this.$data.editTeamData, "name", this.$props.team.name);
          this.$set(this.$data.editTeamData, "memo", this.$props.team.memo);
          this.$set(
            this.$data.editTeamData,
            "adminUserId",
            this.$props.team.adminUserId
          );
          this.$set(
            this.$data.editTeamData,
            "private",
            this.$props.team.private
          );
        } else if (!this.$props.edit) {
          this.$data.teamIdValid = false;
          this.$data.teamNameValid = false;
          this.$data.teamMemoValid = true;
          this.$set(this.$data.editTeamData, "id", 0);
          this.$set(this.$data.editTeamData, "teamId", "");
          this.$set(this.$data.editTeamData, "name", "");
          this.$set(this.$data.editTeamData, "memo", "");
          this.$set(
            this.$data.editTeamData,
            "adminUserId",
            this.$props.user.id
          );
          this.$set(this.$data.editTeamData, "private", false);
        }
      },
      save() {
        return this.$emit("save", this.$data.editTeamData);
      },
      destroy() {
        return this.$emit("destroy", this.$data.editTeamData.id);
      },
    },
  };
</script>
