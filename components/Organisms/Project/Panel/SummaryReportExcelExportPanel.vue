<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step editable step="1">
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.output_example"
        )
      }}
      <small>{{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.data_table_image"
        )
      }}</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-img
        :src="exportSample"
        max-height="400px"
        max-width="850px"
        :aspect-ratio="16 / 6"
        class="mb-5"
      />
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.excel_output_explanation"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.completation_calculation_method"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.test_density_calculation_method"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.defect_density_calculation_method"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.defect_rate_calculation_method"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.guessing_residual_defect_calculation_method"
        )
      }}
      <v-divider></v-divider>
      <v-btn class="mt-3" color="primary" @click="e6 = 2">
        {{ $t("general.continue") }}
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="2" editable>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.output_example"
        )
      }}
      <small>{{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.graph_image"
        )
      }}</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-img
        :src="exportSample2"
        max-height="800px"
        max-width="650px"
        :aspect-ratio="16 / 8"
        class="mb-5"
      />
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.graph_export_explanation"
        )
      }}
      <v-divider></v-divider>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.graph_is_not_export_if_test_not_found"
        )
      }}
      <v-divider></v-divider>
      <v-btn class="mt-3" color="primary" @click="e6 = 3">
        {{ $t("general.continue") }}
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      editable
      :complete="e6 > 3"
      :rules="informationRules"
      step="3"
    >
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.enter_information"
        )
      }}
      <small>{{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.please_enter_information_for_output_template"
        )
      }}</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <exportOptions
        :systemName="systemName"
        :subSystemName="subSystemName"
        :leader="leader"
        :teamName="teamName"
        :beginDate="beginDate"
        :endDate="endDate"
        @systemNameChanged="systemNameChanged"
        @subSystemNameChanged="subSystemNameChanged"
        @leaderChanged="leaderChanged"
        @teamNameChanged="teamNameChanged"
        @beginDateChanged="beginDateChanged"
        @endDateChanged="endDateChanged"
      />
      <v-btn color="primary" @click="e6 = 4">
        {{ $t("general.continue") }}
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4" editable>
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.output_check"
        )
      }}
    </v-stepper-step>
    <v-stepper-content step="4">
      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.file_name_in_advance"
        )
      }}
      <v-text-field
        class="mt-2"
        v-model="fileNames"
        :label="$t('general.file_name')"
        filled
        style="display: block;"
        required
      ></v-text-field>
      <div
        v-for="(e, i) in [
          systemName,
          subSystemName,
          leader,
          teamName,
          beginDate,
          endDate,
        ]"
        :key="i"
      >
        <v-row v-if="e != ''">
          <v-col cols="4">
            {{
              $t(
                [
                  "general.system_name",
                  "general.sub_system_name",
                  "general.leader",
                  "general.team_name",
                  "general.begin_date",
                  "general.end_date",
                ][i]
              )
            }}：
          </v-col>
          <v-col cols="8">
            {{ e }}
          </v-col>
        </v-row>
        <v-divider v-if="e != ''"></v-divider>
      </div>

      {{
        $t(
          "organisms.project.panel.summary_report_excel_export_panel.input_information_check"
        )
      }}
      <v-divider></v-divider>
      <v-btn
        class="mt-5"
        :disabled="disabled"
        color="primary"
        @click="summaryReportExcelExport"
      >
        {{ $t("general.export") }}
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
  import exportOptions from "@organisms/Project/grouping/ExportOptions.vue";
  export default {
    name: "testRunResultExcelExportPanel",
    components: {
      exportOptions,
    },
    data() {
      return {
        e6: 1,
        exportSample: require("@/assets/Export/SummaryReportExcelExportPanel/データ.png"),
        exportSample2: require("@/assets/Export/SummaryReportExcelExportPanel/グラフ.png"),
        systemName: this.$props.project.name,
        subSystemName: "",
        leader: this.teamLeaderNameFromId(this.$props.team.adminUserId),
        teamName: this.$props.team.name,
        beginDate: "",
        endDate: "",
        fileName: "サマリーレポート",
        informationRules: [
          (systemName) => this.$data.systemName.length <= 30,
          (subSystemName) => this.$data.subSystemName.length <= 30,
          (leader) => this.$data.leader.length <= 30,
          (teamName) => this.$data.teamName.length <= 30,
          (beginDate) => this.$data.beginDate.length <= 30,
          (endDate) => this.$data.endDate.length <= 30,
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
    computed: {
      disabled() {
        const tar = [
          this.$data.systemName,
          this.$data.subSystemName,
          this.$data.leader,
          this.$data.teamName,
          this.$data.beginDate,
          this.$data.endDate,
        ];
        let disabled = false;
        tar.forEach((element) => {
          if (!disabled) disabled = element.length > 30 ? true : false;
        });
        return disabled;
      },
      fileNames: {
        get() {
          return this.$data.fileName;
        },
        set(v) {
          this.$data.fileName = v;
        },
      },
    },
    methods: {
      systemNameChanged(v) {
        this.$data.systemName = v;
      },
      subSystemNameChanged(v) {
        this.$data.subSystemName = v;
      },
      leaderChanged(v) {
        this.$data.leader = v;
      },
      teamNameChanged(v) {
        this.$data.teamName = v;
      },
      beginDateChanged(v) {
        this.$data.beginDate = v;
      },
      endDateChanged(v) {
        this.$data.endDate = v;
      },

      teamLeaderNameFromId(id) {
        const index = this.$props.team.teamMember.findIndex(
          (item) => item.id === id
        );
        return this.$props.team.teamMember[index].name;
      },
      summaryReportExcelExport() {
        /************
         *  options
         * ***********
         */
        const request = {
          type: "summary",
          system_name: this.$data.systemName,
          sub_system_name: this.$data.subSystemName,
          leader: this.$data.leader,
          team_name: this.$data.teamName,
          begin_date: this.$data.beginDate,
          end_date: this.$data.endDate,
          fileName:
            this.$data.fileName === ""
              ? "サマリーレポート"
              : this.$data.fileName,
        };
        return this.$emit("resultExport", request);
      },
    },
  };
</script>
