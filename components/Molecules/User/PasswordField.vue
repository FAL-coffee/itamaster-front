<template>
  <v-text-field
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required, rules.min, rules.max]"
    :type="show ? 'text' : 'password'"
    name="input-10-2"
    label="password"
    hint="At least 8 characters"
    value="Pa"
    counter="20"
    @click:append="show = !show"
    v-model="password"
    color="accent"
  ></v-text-field>
</template>
<script>
  export default {
    name: "passwordField",
    props: {
      inputPassword: {
        type: String,
        require: false,
        default: "",
      },
    },
    data() {
      return {
        show: false,
        rules: {
          required: (value) => !!value || "Required.",
          min: (value) => value.length >= 8 || "Min 8 characters",
          max: (value) => value.length <= 20 || "Max 20 characters",
        },
      };
    },
    computed: {
      password: {
        get() {
          return this.inputPassword;
        },
        set(val) {
          this.$emit("passwordChanged", val);
        },
      },
    },
  };
</script>
