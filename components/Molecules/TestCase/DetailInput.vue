<template>
  <v-text-field
    :rules="[rules.max]"
    name="input-10-2"
    :label="name"
    value="Pa"
    counter="50"
    @click:append="show = !show"
    v-model="detailText"
    color="accent"
  ></v-text-field>
</template>
<script>
  export default {
    name: "detailInput",
    props: {
      text: {
        type: String,
        require: false,
        default: "",
      },
      name: {
        type: String,
        require: true,
        default: "detail name sample",
      },
      data: {
        type: Array,
        require: false,
        default: () => ["sample", 0],
      },
    },
    data() {
      return {
        rules: {
          max: (value) =>
            value.length <= 50 ||
            this.$t("general.input_alert_msg.less_than_50"),
        },
      };
    },
    computed: {
      detailText: {
        get() {
          return this.text;
        },
        set(val) {
          this.$emit("detailChange", [val, this.$props.data]);
        },
      },
    },
  };
</script>
