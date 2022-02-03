<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="1000" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          elevation="0"
          color="success"
          dark
          @click="close"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" dark>mdi-microsoft-excel</v-icon>
            </template>
            <span>{{
              $t(
                "organisms.project.modal.test_result_export_modal.modal_overview"
              )
            }}</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-select
            class="mt-5 mr-8 ml-8"
            v-model="exportTemplate"
            :items="exportItems"
            :label="
              $t(
                'organisms.project.modal.test_result_export_modal.select_template'
              )
            "
            solo
          />
          <div v-if="exportTemplate === ''" class="text-center mt-5">
            {{
              $t(
                "organisms.project.modal.test_result_export_modal.please_select_template"
              )
            }}
            <br />
            {{
              $t(
                "organisms.project.modal.test_result_export_modal.displayed_export_form"
              )
            }}
          </div>
          <testRunResultExcelExportPanel
            v-if="
              exportTemplate ===
              $t(
                'organisms.project.modal.test_result_export_modal.test_run_result_file'
              )
            "
            :team="team"
            :project="project"
            @resultExport="fileExport"
          />
          <summaryReportExcelExportPanel
            v-if="
              exportTemplate ===
              $t(
                'organisms.project.modal.test_result_export_modal.summary_file'
              )
            "
            :team="team"
            :project="project"
            @resultExport="fileExport"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import testRunResultExcelExportPanel from "@organisms/Project/Panel/TestRunResultExcelExportPanel.vue";
  import summaryReportExcelExportPanel from "@organisms/Project/Panel/SummaryReportExcelExportPanel.vue";
  export default {
    name: "testResultExportModal",
    components: {
      testRunResultExcelExportPanel,
      summaryReportExcelExportPanel,
    },
    data() {
      return {
        dialog: false,
        exportTemplate: "",
        exportItems: [
          this.$t(
            "organisms.project.modal.test_result_export_modal.test_run_result_file"
          ),
          this.$t(
            "organisms.project.modal.test_result_export_modal.summary_file"
          ),
        ],
      };
    },
    props: {
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
    },
    computed: {},
    methods: {
      fileExport(data) {
        this.$emit("fileExport", data);
        this.close();
        return;
      },
      close() {
        this.$data.dialog = false;
        this.$data.exportTemplate = "";
      },
    },
  };
</script>
