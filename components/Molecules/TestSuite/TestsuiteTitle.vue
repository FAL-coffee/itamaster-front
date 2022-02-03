<template>
  <v-form>
    <v-text-field
      v-model="title"
      counter="50"
      :rules="titleRules"
      :label="$t('general.title')"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
  export default {
    name: "titles",
    data() {
      return {
        titleRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 50) ||
            this.$t("general.input_alert_msg.less_than_50"),
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
      title: {
        get() {
          return this.text;
        },
        set(val) {
          this.$emit("titleChanged", val);
        },
      },
    },
  };
</script>
