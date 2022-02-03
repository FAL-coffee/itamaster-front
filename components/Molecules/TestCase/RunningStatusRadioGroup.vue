<template>
  <v-radio-group v-model="status" column>
    <v-radio
      label="complete"
      color="rgb(41, 160, 240)"
      value="complete"
    ></v-radio>
    <v-radio label="Retest" color="rgb(204, 201, 4)" value="retest"></v-radio>
    <v-radio label="Issue" color="red" value="issue"></v-radio>
  </v-radio-group>
</template>
<script>
  export default {
    name: "runningStatusRadioGroup",
    components: {},
    props: {
      index: {
        type: Number,
        require: true,
        default: 0,
      },
      futureStatus: {
        type: String,
        require: false,
        default: "notRunning",
      },
    },
    computed: {
      status: {
        get() {
          return this.$props.futureStatus;
        },
        set(val) {
          return this.$emit("statusSelect", this.$props.index, val);
        },
      },
    },
  };
</script>
