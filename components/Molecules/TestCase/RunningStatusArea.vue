<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="status"
          :style="statusbgColors"
          style="margin-left: 10px; margin-right: 5px;"
        ></div>
      </template>
      <span>{{ status }}</span>
    </v-tooltip>
    <v-icon>mdi-arrow-right-bold</v-icon>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <div style="display: inline-block;" v-bind="attrs" v-on="on">
          <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn icon depressed small v-bind="attrs" v-on="on" class="pb-2">
                <div
                  v-if="futureStatus != 'notRunning'"
                  v-bind="attrs"
                  class="status"
                  :style="futureStatusbgColors"
                />
                <v-skeleton-loader
                  v-else-if="futureStatus === 'notRunning'"
                  v-bind="attrs"
                  class="status"
                  type="card"
                />
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(status, i) in ['complete', 'retest', 'issue']"
                :key="i"
                link
                @click="statusSelect(status)"
              >
                <v-list-item-title v-text="status"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <span>{{ futureStatus }}</span>
    </v-tooltip>
  </div>
</template>
<script>
  export default {
    name: "runningStatusArea",
    components: {},
    props: {
      index: {
        type: Number,
        require: true,
        default: 0,
      },
      status: {
        type: String,
        require: false,
        default: "notRunning",
      },
      futureStatus: {
        type: String,
        require: false,
        default: "notRunning",
      },
    },
    computed: {
      statusbgColors() {
        return (
          "background:" +
          ["gray", "rgb(41, 160, 240)", "rgb(204, 201, 4)", "red"][
            ["notRunning", "complete", "retest", "issue"].indexOf(
              this.$props.status
            )
          ] +
          ";"
        );
      },
      futureStatusbgColors() {
        return (
          "background:" +
          ["gray", "rgb(41, 160, 240)", "rgb(204, 201, 4)", "red"][
            ["notRunning", "complete", "retest", "issue"].indexOf(
              this.$props.futureStatus
            )
          ] +
          ";"
        );
      },
    },
    methods: {
      statusSelect(status) {
        return this.$emit("statusSelect", this.$props.index, status);
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
