<template>
  <v-card elevation="8">
    <v-card-title>
      <div style="width: 20%;" />
      <div class="d-inline text-center" style="width: 60%;">
        <v-tooltip top v-if="project.gitCooperation">
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="d-inline"
              style="margin-left: 0px;"
            >
              <v-icon color="indigo darken-4">mdi-github</v-icon>
            </div>
          </template>
          <span>This project is linked to GitHub</span>
        </v-tooltip>
        {{ project.name }}
      </div>
      <v-spacer></v-spacer>
      <testResultExportModal
        :team="team"
        :project="project"
        @fileExport="fileExport"
      />
      <projectEditModal
        class="ml-3"
        v-if="user.id === team.adminUserId"
        :destroyOk="destroyOk()"
        :user="user"
        :project="project"
        :team="team"
        edit
        @save="projectEditSave"
        @destroy="destroy"
      />
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle class="text-center mt-3">
      <div v-if="project.memo != ''">
        <span style="white-space: pre-line;">{{ project.memo }}</span>
      </div>
      <div class="mt-3">{{ $t("general.team") }}： {{ team.name }}</div>
    </v-card-subtitle>

    <v-card-text class="text-center mt-3">
      <div v-if="project.enabled">
        <div>
          {{ $t("general.testsuite") }}：{{ project.testSuits.length
          }}{{ $t("general.how_many_number") }}
          <br />
          {{ $t("general.testcase") }}：{{ statusBarProps.testcase
          }}{{ $t("general.how_many_number") }}
          <statusBar
            :testcase="statusBarProps.testcase"
            :complete="statusBarProps.complete"
            :retest="statusBarProps.retest"
            :issue="statusBarProps.issue"
          />
        </div>
        <div>
          <v-btn
            v-if="project.createEnvironmentSteps"
            class="mt-3"
            depressed
            rounded
            text
            @click="$emit('toCreateEnvironmentSteps')"
          >
            <v-icon color="blue">mdi-arrow-right-bold-outline</v-icon>
            <span class="blue--text">Create Environment Steps Page</span>
          </v-btn>
          <v-btn
            v-if="project.testEnvironmentURL != ''"
            class="mt-3"
            depressed
            rounded
            text
            @click="$emit('toTestEnvironment', project.testEnvironmentURL)"
          >
            <v-icon color="blue">mdi-arrow-right-bold-outline</v-icon>
            <span class="blue--text">Test Environment URL</span>
          </v-btn>
          <v-btn
            v-if="project.repositoryURL != ''"
            class="mt-3"
            depressed
            rounded
            text
            @click="$emit('toRepository', project.repositoryURL)"
          >
            <v-icon color="blue">mdi-arrow-right-bold-outline</v-icon>
            <span class="blue--text">Repository URL</span>
          </v-btn>
        </div>
      </div>
      <div v-else-if="!project.enabled">
        {{ $t("organisms.project.card.project_card.project_is_not_valid") }}
        <br />
        {{ $t("organisms.project.card.project_card.you_can_enabled_to_modal") }}
      </div>
      <slot name="testSuiteTable" />
    </v-card-text>
  </v-card>
</template>
<script>
  import statusBar from "@molecules/TestSuite/StatusBar.vue";
  import projectEditModal from "@organisms/Project/Modal/ProjectEditModal.vue";
  import testResultExportModal from "@organisms/Project/Modal/TestResultExportModal.vue";
  export default {
    name: "projectCard",
    components: {
      statusBar,
      projectEditModal,
      testResultExportModal,
    },
    data() {
      return {};
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({ id: 0 }),
      },
      project: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          name: "",
          memo: "",
          tester: [],
          createEnvironmentSteps: false,
          testEnvironmentURL: "",
          repositoryURL: "",
          gitCooperation: false,
          testSuits: [],
        }),
      },
      team: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          teamId: "",
          name: "",
          memo: "",
          adminUserId: 0,
          private: true,
          isPaidTeam: true,
          teamMember: [{ id: 0, name: "" }],
        }),
      },
    },
    computed: {
      statusBarProps() {
        const statusBarProps = {
          testcase: 0,
          complete: 0,
          retest: 0,
          issue: 0,
        };
        for (var i = 0; i < 4; i++) {
          statusBarProps[
            ["testcase", "complete", "retest", "issue"][i]
          ] = this.statusTotalCalc(
            ["testcase", "complete", "retest", "issue"][i]
          );
        }
        return statusBarProps;
      },
    },
    methods: {
      statusTotalCalc(target) {
        return this.$props.project.testSuits.reduce(
          (sum, i) => sum + i[target],
          0
        );
      },
      destroyOk() {
        let destroyOk = false;
        if (
          this.statusTotalCalc("testcase") === this.statusTotalCalc("complete")
        ) {
          destroyOk = true;
        }
        if (this.$props.project.testSuits.length === 0) {
          destroyOk = true;
        }
        return destroyOk;
      },
      projectEditSave(data) {
        return this.$emit("projectEditSave", data);
      },
      destroy(id) {
        return this.$emit("projectDestroy", id);
      },
      fileExport(data) {
        const request = {
          project_id: this.$props.project.id,
          team_id: this.$props.team.id,
          type: data.type,
          system_name: data.system_name,
          sub_system_name: data.sub_system_name,
          leader: data.leader,
          team_name: data.team_name,
          begin_date: data.begin_date,
          end_date: data.end_date,
          fileName: data.fileName,
        };
        return this.$emit("fileExport", request);
      },
    },
  };
</script>
