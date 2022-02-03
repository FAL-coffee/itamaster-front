<template>
  <v-container>
    <v-checkbox v-model="optionSwitch">
      <template slot="label">
        <slot name="label" />
      </template>
    </v-checkbox>
    <v-expand-transition>
      <v-text-field
        v-if="opt"
        :rules="rules"
        counter="60"
        v-model="optionValue"
        color="accent"
        filled
      ></v-text-field>
    </v-expand-transition>
  </v-container>
</template>
<script>
  export default {
    name: "projectOption",
    data() {
      return {
        rules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            v.length <= 60 || this.$t("general.input_alert_msg.less_than_60"),
        ],
      };
    },
    props: {
      opt: {
        type: Boolean,
        require: true,
        default: false,
      },
      val: {
        type: String,
        require: false,
        default: "",
      },
    },
    computed: {
      optionSwitch: {
        get() {
          return this.$props.opt;
        },
        set(v) {
          return this.$emit("optSwitch", v);
        },
      },
      optionValue: {
        get() {
          return this.$props.val;
        },
        set(v) {
          return this.$emit("valChange", v);
        },
      },
    },
    methods: {},
  };
</script>
