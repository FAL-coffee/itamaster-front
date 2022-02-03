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
          {{ testSuite.title }}
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
          <span style="white-space: pre-line;">{{ testSuite.remarks }}</span>
        </v-card-text>

        <v-card-text>
          <div v-if="testSuite.creatorId != 0">
            <div>{{ $t("general.creator") }}：</div>
            <div>
              <userInfoModal
                @profile="profile"
                :user="personsFromId(testSuite.creatorId)"
              />
              {{ personsFromId(testSuite.creatorId).name }}
            </div>
            <v-divider></v-divider>
          </div>

          <div v-if="testSuite.steps != 0" class="pt-2">
            <div>{{ $t("general.steps") }}：</div>
            <div>
              {{ testSuite.steps }}
            </div>
            <v-divider></v-divider>
          </div>

          <div v-if="testSuite.writers != []" class="pt-2">
            <div>{{ $t("general.writers") }}：</div>
            <div v-for="(writerId, i) in testSuite.writers" :key="i">
              <userInfoModal
                @profile="profile"
                :user="personsFromId(writerId)"
              />
              {{ personsFromId(writerId).name }}
            </div>
            <v-divider></v-divider>
          </div>

          <div class="pt-4">
            {{ $t("general.testcase") }}：{{ testSuite.testcase
            }}{{ $t("general.how_many_number") }}
            <v-divider></v-divider>
          </div>

          <div class="pt-3 pb-5">
            <div>
              {{ $t("general.complete") }}：{{ testSuite.complete
              }}{{ $t("general.how_many_number") }}
            </div>
            <div>
              {{ $t("general.retest") }}：{{ testSuite.retest
              }}{{ $t("general.how_many_number") }}
            </div>
            <div>
              {{ $t("general.issue") }}：{{ testSuite.issue
              }}{{ $t("general.how_many_number") }}
            </div>
            <v-divider></v-divider>
          </div>
          <statusBar
            :testcase="testSuite.testcase"
            :complete="testSuite.complete"
            :retest="testSuite.retest"
            :issue="testSuite.issue"
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
  import statusBar from "@molecules/TestSuite/StatusBar.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";

  export default {
    name: "testSuiteInfoModal",
    data() {
      return {
        dialog: false,
      };
    },
    components: {
      statusBar,
      userInfoModal,
    },
    props: {
      testSuite: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          title: "",
          remarks: "",
          steps: 0,
          creatorId: 0,
          writers: [],
          steps: 0,
          testcase: 0,
          complete: 0,
          retest: 0,
          issue: 0,
        }),
      },
      persons: {
        type: Array,
        require: false,
        default: () => [],
        // array[id]
      },
    },
    methods: {
      profile(id) {
        return this.$emit("profile", id);
      },
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
    },
  };
</script>
