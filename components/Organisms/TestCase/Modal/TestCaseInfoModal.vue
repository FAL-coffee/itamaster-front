<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon depressed>
          <v-icon x-large color="blue">mdi-information</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ testCase.title }}
          <v-spacer></v-spacer>
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

        <v-card-text>
          <v-row style="margin: 15px 0 0 0;">
            {{ $t("general.status") }}
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <div
                    class="statusSquare"
                    :style="bgColors"
                    style="margin-left: 10px;"
                  ></div>
                </div>
              </template>
              <span>{{ testCase.status }}</span>
            </v-tooltip>
          </v-row>
        </v-card-text>

        <v-card-text>
          <div>
            {{ $t("general.importance") }}
            <importanceRatings
              v-if="dialog"
              :importance="testCase.importance"
              readOnly
            />
          </div>

          <div v-if="testCase.creatorId != 0">
            <div>{{ $t("general.creator") }}</div>
            <div>
              <userInfoModal
                @profile="profile"
                :user="personsFromId(testCase.creatorId)"
              />
              {{ personsFromId(testCase.creatorId).name }}
            </div>
            <v-divider></v-divider>
          </div>

          <div v-if="testCase.lastEditorId != 0" class="pt-2">
            <div>{{ $t("general.lasteditor") }}</div>
            <div>
              <userInfoModal
                @profile="profile"
                :user="personsFromId(testCase.lastEditorId)"
              />
              {{ personsFromId(testCase.lastEditorId).name }}
            </div>
            <v-divider></v-divider>
          </div>

          <div v-if="testCase.testerId != 0" class="pt-2">
            <div>{{ $t("general.tester") }}</div>
            <div>
              <userInfoModal
                @profile="profile"
                :user="personsFromId(testCase.testerId)"
              />
              {{ personsFromId(testCase.testerId).name }}
            </div>
            <v-divider></v-divider>
          </div>
        </v-card-text>

        <v-card-text>
          <detailsList
            :prerequisites="testCase.prerequisites"
            :process="testCase.process"
            :expect="testCase.expect"
          />
        </v-card-text>

        <v-card-text>
          <testLogsList
            :persons="persons"
            :testLogs="testCase.testLogs"
            @profile="profile"
          />
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
  import detailsList from "@molecules/TestCase/DetailsList.vue";
  import importanceRatings from "@molecules/TestCase/ImportanceRatings.vue";
  import testLogsList from "@organisms/TestCase/grouping/TestLogsList.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  export default {
    name: "testCaseInfoModal",
    data() {
      return {
        dialog: false,
      };
    },
    components: {
      importanceRatings,
      userInfoModal,
      detailsList,
      testLogsList,
    },
    props: {
      testCase: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          order: 0,
          status: "notRunning",
          title: "testcase",
          creatorId: 0,
          lastEditorId: 0,
          testerId: 0,
          importance: 1,
          prerequisites: [],
          process: [],
          expect: [],
          testLogs: [],
        }),
      },
      persons: {
        type: Array,
        require: true,
        default: () => [],
      },
    },
    computed: {
      bgColors() {
        return (
          "background:" +
          ["gray", "rgb(41, 160, 240)", "rgb(204, 201, 4)", "red"][
            ["notRunning", "complete", "retest", "issue"].indexOf(
              this.$props.testCase.status
            )
          ] +
          ";"
        );
      },
    },
    methods: {
      personsFromId(id) {
        const index = this.$props.persons.findIndex((item) => item.id === id);
        if (index === -1) {
          return {
            id: -1,
            name: "No Name",
            iconImg: { url: "" },
            message:
              "The user was not found. This user may no longer exist on your team.",
            simpleIcon: true,
            color: "black",
          };
        }
        return this.$props.persons[index];
      },
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
<style scoped>
  .statusSquare {
    margin-top: 5px;
    width: 40px;
    height: 10px;
    border-radius: 4px;
  }
</style>
