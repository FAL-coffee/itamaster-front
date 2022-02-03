<template>
  <v-form>
    <v-textarea
      v-model="remarks"
      :label="$t('general.remarks')"
      counter="300"
      :rules="remarksRules"
      filled
      color="accent"
    ></v-textarea>
  </v-form>
</template>

<script>
  export default {
    name: "remarks",
    data() {
      return {
        remarksRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 300) ||
            this.$t("general.input_alert_msg.less_than_300"),
        ],
      };
    },
    props: {
      text: {
        type: String,
        require: false,
        default: "",
      },
    },
    computed: {
      remarks: {
        get() {
          return this.text;
        },
        set(val) {
          this.$emit("remarksChanged", val);
        },
      },
    },
  };
</script>
