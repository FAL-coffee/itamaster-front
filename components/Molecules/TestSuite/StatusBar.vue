<template>
  <div class="container">
    <v-tooltip top v-if="complete > 0">
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="item item1"
          :style="'width:' + widthCalc(complete) + '%'"
        >
          <span class="item_label"></span>
        </div>
      </template>
      <span
        >{{ $t("general.complete") }}：{{ complete }}
        {{ $t("general.how_many_number") }}</span
      >
    </v-tooltip>

    <v-tooltip top v-if="retest > 0">
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="item item2"
          :style="'width:' + widthCalc(retest) + '%'"
        >
          <span class="item_label"></span>
        </div>
      </template>
      <span
        >{{ $t("general.retest") }}：{{ retest }}
        {{ $t("general.how_many_number") }}</span
      >
    </v-tooltip>

    <v-tooltip top v-if="issue > 0">
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="item item3"
          :style="'width:' + widthCalc(issue) + '%'"
        >
          <span class="item_label"></span>
        </div>
      </template>
      <span
        >{{ $t("general.issue") }}：{{ issue }}
        {{ $t("general.how_many_number") }}</span
      >
    </v-tooltip>

    <v-tooltip top v-if="testcase - complete - retest - issue > 0">
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="item item4"
          :style="notRunningWidth()"
        >
          <span class="item_label"></span>
        </div>
      </template>
      <span
        >{{ $t("general.notRunning") }}：{{
          testcase - complete - retest - issue
        }}
        {{ $t("general.how_many_number") }}</span
      >
    </v-tooltip>
  </div>
</template>
<script>
  export default {
    name: "statusBar",
    props: {
      testcase: {
        type: Number,
        require: true,
        default: 0,
      },
      complete: {
        type: Number,
        require: true,
        default: 0,
      },
      retest: {
        type: Number,
        require: true,
        default: 0,
      },
      issue: {
        type: Number,
        require: true,
        default: 0,
      },
    },
    computed: {},
    methods: {
      notRunningWidth() {
        return (
          "width:" +
          (100 -
            this.widthCalc(this.$props.complete) -
            this.widthCalc(this.$props.retest) -
            this.widthCalc(this.$props.issue)) +
          "%"
        );
      },
      widthCalc(num) {
        return (100 / this.$props.testcase) * num;
      },
    },
  };
</script>
<style scoped>
  .container {
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row; /* 要素を横に並べる */
    justify-content: space-evenly; /* 要素を均等間隔に分散させる */
  }

  .item {
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 4px;
  }

  .item_label {
    white-space: nowrap;
  }

  .item1 {
    background-color: #7eddf5;
  }

  .item2 {
    background-color: #f1f7a4;
  }

  .item3 {
    background-color: #ff8484;
  }

  .item4 {
    background-color: #c0c0c0;
    width: 15%;
  }
</style>
