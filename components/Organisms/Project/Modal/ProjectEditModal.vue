<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="800" persistent>
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
          {{ $t("organisms.project.modal.project_edit_modal.modal_name") }}
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-3">
          {{ $t("general.name") }}
          <v-form>
            <v-text-field
              v-if="dialog"
              class=""
              v-model="name"
              counter="60"
              :rules="nameRules"
              :label="$t('general.name')"
              filled
              required
            ></v-text-field>
          </v-form>

          {{ $t("general.memo") }}
          <v-form>
            <v-textarea
              v-if="dialog"
              class=""
              v-model="memo"
              counter="300"
              :rules="memoRules"
              :label="$t('general.memo')"
              filled
              required
            ></v-textarea>
          </v-form>

          {{ $t("general.options") }}
          <projectOptions
            style="margin-top: -30px;"
            :createEnvironmentSteps="editProjectData.createEnvironmentSteps"
            :testEnvironmentURL="editProjectData.testEnvironmentURL"
            :repositoryURL="editProjectData.repositoryURL"
            @createEnvironmentStepsSwitch="createEnvironmentStepsSwitch"
            @testEnvironmentURLChanged="testEnvironmentURLChanged"
            @repositoryURLChanged="repositoryURLChanged"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!edit" disabled>
            {{ $t("general.delete") }}
          </v-btn>
          <cannotDeletedMessage v-else-if="edit && !destroyOk" />
          <deleteConfMessage
            v-else-if="edit && destroyOk"
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
  import cannotDeletedMessage from "@molecules/Msg/CannotDeletedMessage.vue";
  import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
  import projectOptions from "@organisms/Project/grouping/ProjectOptions.vue";
  export default {
    name: "projectEditModal",
    components: {
      cannotDeletedMessage,
      deleteConfMessage,
      projectOptions,
    },
    data() {
      return {
        dialog: false,
        disabled: true,
        nameValid: false,
        memoValid: false,
        testEnvironmentURLValid: false,
        repositoryURLValid: false,
        nameRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 60) ||
            this.$t("general.input_alert_msg.less_than_60"),
        ],
        memoRules: [
          (v) =>
            v.length <= 300 || this.$t("general.input_alert_msg.less_than_300"),
        ],
        editProjectData: {
          id: 0,
          name: "",
          memo: "",
          // tester:[],
          createEnvironmentSteps: false,
          testEnvironmentURL: "",
          repositoryURL: "",
          gitCooperation: false,
          enabled: true,
        },
      };
    },
    props: {
      edit: {
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
      project: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          memo: "",
          // tester:[],
          createEnvironmentSteps: false,
          testEnvironmentURL: "",
          repositoryURL: "",
          gitCooperation: false,
          enabled: true,
        }),
      },
      team: {
        type: Object,
        require: true,
        default: () => ({
          teamMember: [],
        }),
      },
      destroyOk: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    computed: {
      name: {
        get() {
          return this.$data.editProjectData.name;
        },
        set(v) {
          this.$set(this.$data.editProjectData, "name", v);
          this.$data.nameValid = !!v && v.length <= 30;
          this.disabledCheck();
        },
      },
      memo: {
        get() {
          return this.$data.editProjectData.memo;
        },
        set(v) {
          this.$set(this.$data.editProjectData, "memo", v);
          this.$data.memoValid = v.length <= 300;
          this.disabledCheck();
        },
      },
    },
    methods: {
      createEnvironmentStepsSwitch(bool) {
        this.$set(this.$data.editProjectData, "createEnvironmentSteps", bool);
        this.disabledCheck();
      },
      testEnvironmentURLChanged([url, bool]) {
        this.$set(this.$data.editProjectData, "testEnvironmentURL", url);
        this.$data.testEnvironmentURLValid = bool
          ? url != "" && url.length <= 60
          : true;
        this.disabledCheck();
      },
      repositoryURLChanged([url, bool]) {
        this.$set(this.$data.editProjectData, "repositoryURL", url);
        this.$data.repositoryURLValid = bool
          ? url != "" && url.length <= 60
          : true;
        this.disabledCheck();
      },
      close() {
        this.$data.dialog = false;
      },
      disabledCheck() {
        this.$data.disabled = !(
          this.$data.nameValid &&
          this.$data.memoValid &&
          this.$data.testEnvironmentURLValid &&
          this.$data.repositoryURLValid
        );
      },
      initialize() {
        this.$data.disabled = true;
        if (this.$props.edit) {
          this.$set(this.$data.editProjectData, "id", this.$props.project.id);
          this.$set(
            this.$data.editProjectData,
            "name",
            this.$props.project.name
          );
          this.$set(
            this.$data.editProjectData,
            "memo",
            this.$props.project.memo
          );
          // this.$set(this.$data.editProjectData,'tester',this.$props.team.teamMember.map((obj)=>obj.id))
          this.$set(
            this.$data.editProjectData,
            "createEnvironmentSteps",
            this.$props.project.createEnvironmentSteps
          );
          this.$set(
            this.$data.editProjectData,
            "testEnvironmentURL",
            this.$props.project.testEnvironmentURL
          );
          this.$set(
            this.$data.editProjectData,
            "repositoryURL",
            this.$props.project.repositoryURL
          );
          this.$set(
            this.$data.editProjectData,
            "gitCooperation",
            this.$props.project.gitCooperation
          );
          this.$set(
            this.$data.editProjectData,
            "enabled",
            this.$props.project.enabled
          );
          this.$data.nameValid = true;
          this.$data.memoValid = true;
          this.$data.testEnvironmentURLValid = true;
          this.$data.repositoryURLValid = true;
        } else if (!this.$props.edit) {
          this.$set(this.$data.editProjectData, "id", 0);
          this.$set(this.$data.editProjectData, "name", "");
          this.$set(this.$data.editProjectData, "memo", "");
          // this.$set(this.$data.editProjectData,'tester',this.$props.team.teamMember.map((obj)=>obj.id))
          this.$set(
            this.$data.editProjectData,
            "createEnvironmentSteps",
            false
          );
          this.$set(this.$data.editProjectData, "testEnvironmentURL", "");
          this.$set(this.$data.editProjectData, "repositoryURL", "");
          this.$set(this.$data.editProjectData, "gitCooperation", false);
          this.$set(this.$data.editProjectData, "enabled", true);
          this.$data.nameValid = false;
          this.$data.memoValid = false;
          this.$data.testEnvironmentURLValid = true;
          this.$data.repositoryURLValid = true;
        }
      },
      save() {
        return this.$emit("save", this.$data.editProjectData);
      },
      destroy() {
        return this.$emit("destroy", this.$data.editProjectData.id);
      },
    },
  };
</script>
