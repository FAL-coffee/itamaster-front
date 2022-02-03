<template>
  <v-text-field
    :rules="[rules.required, rules.max]"
    name="input-10-2"
    :label="$t('general.testcase') + '　' + $t('general.title')"
    value="Pa"
    counter="50"
    @click:append="show = !show"
    v-model="testCaseTitle"
    color="accent"
  ></v-text-field>
</template>
<script>
  export default {
    name: "testCaseTitle",
    props: {
      inputTestCaseTitle: {
        type: String,
        require: false,
        default: "",
      },
    },
    data() {
      return {
        rules: {
          required: (value) =>
            !!value || this.$t("general.input_alert_msg.required"),
          max: (value) =>
            value.length <= 50 ||
            this.$t("general.input_alert_msg.less_than_50"),
        },
      };
    },
    computed: {
      testCaseTitle: {
        get() {
          return this.inputTestCaseTitle;
        },
        set(val) {
          this.$emit("testCaseTitleChanged", val);
        },
      },
    },
  };
</script>
