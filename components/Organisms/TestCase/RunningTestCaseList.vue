<template>
  <div>
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(testCase, i) in runningTestCases" :key="i">
        <v-expansion-panel-header>
          <v-row no-gutters>
            <v-col cols="8">
              {{ testCase.title }}
            </v-col>
            <v-col cols="2" class="text--secondary">
              <runningStatusArea
                :status="testCase.status"
                :futureStatus="testCase.futureStatus"
                :index="i"
                @statusSelect="statusSelect"
              />
            </v-col>
            <v-col cols="2" class="text--secondary">
              <v-icon v-if="testCase.reason.length > 300" color="red"
                >mdi-alert-circle-outline</v-icon
              >
              <v-icon
                v-if="testCase.futureStatus === 'notRunning'"
                color="warning"
                >mdi-do-not-disturb</v-icon
              >
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-col cols="8">
              <detailsList
                :open="true"
                :prerequisites="testCase.prerequisites"
                :process="testCase.process"
                :expect="testCase.expect"
              />
            </v-col>
            <v-spacer></v-spacer>

            <v-divider vertical class="mx-4"></v-divider>

            <v-col cols="3">
              {{
                $t(
                  "organisms.testcase.running_testcase_list.please_enter_test_result"
                )
              }}
              <br />
              <runningStatusRadioGroup
                :index="i"
                :futureStatus="testCase.futureStatus"
                @statusSelect="statusSelect"
              />
              <reason
                class="mt-3"
                :isDisabled="testCase.futureStatus == 'complete'"
                :text="testCase.reason"
                :index="i"
                @reasonChanged="reasonChanged"
              />
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <runningBtns
      :enabled="reasonEnabled"
      :locked="locked"
      @lock="$emit('lock', user.id)"
      @unlock="$emit('unlock')"
      @completion="completion"
    />
  </div>
</template>

<script>
  import runningBtns from "@organisms/TestCase/grouping/RunningBtns.vue";
  import runningStatusArea from "@molecules/TestCase/RunningStatusArea.vue";
  import detailsList from "@molecules/TestCase/DetailsList.vue";
  import runningStatusRadioGroup from "@molecules/TestCase/RunningStatusRadioGroup.vue";
  import reason from "@molecules/TestCase/Reason.vue";
  export default {
    name: "runningTestCaseList",
    components: {
      runningBtns,
      runningStatusArea,
      detailsList,
      runningStatusRadioGroup,
      reason,
    },
    data() {
      return {
        runningTestCases: [],
        reasonEnabled: false,
      };
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          writer: false,
        }),
      },
      testCases: {
        type: Array,
        require: true,
        default: () => [],
      },
      locked: {
        type: Boolean,
        require: true,
        default: true,
      },
    },
    mounted() {
      this.$data.runningTestCases = this.$props.testCases.map(function (
        element
      ) {
        element.futureStatus = "notRunning";
        element.reason = "";
        return element;
      });
    },
    computed: {},
    methods: {
      disabledCheck() {
        for (var i = 0; i < this.$data.runningTestCases.length; i++) {
          this.$data.reasonEnabled =
            this.$data.runningTestCases[i].reason.length <= 300;
          if (!this.$data.reasonEnabled) break;
        }
      },
      statusSelect(index, status) {
        this.$set(this.$data.runningTestCases[index], "futureStatus", status);
        this.$data.runningTestCases.splice();
        this.disabledCheck();
      },
      reasonChanged(index, val) {
        this.$set(this.$data.runningTestCases[index], "reason", val);
        this.$data.runningTestCases.splice();
        this.disabledCheck();
      },
      completion() {
        let resultList = [];
        this.$data.runningTestCases.map(function (element) {
          if (element.futureStatus != "notRunning") {
            resultList.push({
              id: element.id,
              status: element.status,
              futureStatus: element.futureStatus,
              reason: element.reason,
            });
          }
        });
        return this.$emit("completion", resultList);
      },
    },
  };
</script>
