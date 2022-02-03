<template>
  <v-container>
    <v-checkbox v-model="stepsInputEnableSwitch">
      <template slot="label">
        {{ $t("molecules.testsuite.steps_input.label") }}
      </template>
    </v-checkbox>
    <v-expand-transition>
      <v-text-field
        v-if="stepsInputEnable"
        :rules="rules"
        counter="20"
        v-model="stepsValue"
        color="accent"
        filled
      ></v-text-field>
    </v-expand-transition>
  </v-container>
</template>
<script>
  export default {
    name: "stepsInput",
    data() {
      return {
        rules: [
          (v) =>
            v.length <= 20 || this.$t("general.input_alert_msg.less_than_20"),
          (v) =>
            /^[0-9]+$/.test(v) ||
            this.$t("general.input_alert_msg.half_size_number_only"),
        ],
      };
    },
    props: {
      stepsInputEnable: {
        type: Boolean,
        require: true,
        default: false,
      },
      steps: {
        type: String,
        require: false,
        default: "0",
      },
    },
    computed: {
      stepsInputEnableSwitch: {
        get() {
          return this.$props.stepsInputEnable;
        },
        set(v) {
          return this.$emit("stepsInputEnableSwitch", v);
        },
      },
      stepsValue: {
        get() {
          return this.$props.steps;
        },
        set(v) {
          return this.$emit("stepsChanged", v);
        },
      },
    },
    methods: {},
  };
</script>
