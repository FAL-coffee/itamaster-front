<template>
  <v-form>
    <v-textarea
      v-model="reason"
      :label="$t('general.reason')"
      counter="300"
      :rules="[rules.max]"
      :disabled="isDisabled"
      filled
      color="accent"
    ></v-textarea>
  </v-form>
</template>

<script>
  export default {
    name: "reason",
    data() {
      return {
        rules: {
          max: (value) =>
            value.length <= 300 ||
            this.$t("general.input_alert_msg.less_than_300"),
        },
      };
    },
    props: {
      isDisabled: {
        type: Boolean,
        require: false,
        default: true,
      },
      text: {
        type: String,
        require: false,
        default: "",
      },
      index: {
        type: Number,
        require: true,
        default: 0,
      },
    },
    computed: {
      reason: {
        get() {
          return this.text;
        },
        set(val) {
          this.$emit("reasonChanged", this.$props.index, val);
        },
      },
    },
  };
</script>
