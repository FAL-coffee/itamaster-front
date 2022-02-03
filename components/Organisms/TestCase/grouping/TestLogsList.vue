<template>
  <div style="margin: -12px 0 0 0;">
    <v-list-group prepend-icon="mdi-book-open-page-variant">
      <template v-slot:activator>
        <v-list-item-title>LOGS</v-list-item-title>
      </template>
      <div v-if="testLogs != []">
        <v-list-group
          v-for="testLog in testLogs"
          :key="testLog.numberOfTime"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                [{{ testLog.created_at.substr(0, 10) }}]:
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="status"
                      :style="bgColors(testLog.beforeStatus)"
                      style="margin-left: 10px;"
                    ></div>
                  </template>
                  <span>{{ testLog.beforeStatus }}</span>
                </v-tooltip>
                <v-icon>mdi-arrow-right-bold</v-icon>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <div
                      v-bind="attrs"
                      v-on="on"
                      class="status"
                      :style="bgColors(testLog.afterStatus)"
                      style="margin-right: 10px;"
                    ></div>
                  </template>
                  <span>{{ testLog.afterStatus }}</span>
                </v-tooltip>
                <userInfoModal
                  @profile="profile"
                  :user="personsFromId(testLog.testerId)"
                />
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-textarea
              ml-2
              :label="$t('general.reason')"
              :value="testLog.reason"
              readonly
              filled
            >
            </v-textarea>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list-group>
    <v-divider></v-divider>
  </div>
</template>
<script>
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  export default {
    name: "testLogsList",
    components: {
      userInfoModal,
    },
    props: {
      testLogs: {
        type: Array,
        require: false,
        default: () => [],
        /*
         *  testLogs[{
         *    numberOfTime(num),
         *    created_at(str),
         *    tester{
         *      id,initial,name,email,color
         *    },
         *    beforeStatus(str),
         *    afterStatus(str),
         *    reason(str)
         *  }]
         */
      },
      persons: {
        type: Array,
        require: true,
        default: () => [],
      },
    },
    methods: {
      bgColors(status) {
        return (
          "background:" +
          ["gray", "rgb(41, 160, 240)", "rgb(204, 201, 4)", "red"][
            ["notRunning", "complete", "retest", "issue"].indexOf(status)
          ]
        );
        +";";
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
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
<style scoped>
  .status {
    display: inline-block;
    margin-top: 5px;
    width: 20px;
    height: 10px;
    border-radius: 4px;
  }

  .contents {
    flex-direction: row; /* 要素を横に並べる */
  }
</style>
