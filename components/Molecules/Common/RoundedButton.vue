<template>
  <v-btn color="primary" rounded @click="$emit('btnClick')">
    <span>{{ text }}</span>
  </v-btn>
</template>
<script>
  export default {
    name: "roundedButton",
    data() {
      return {};
    },
    props: {
      text: {
        type: String,
        require: true,
        default: "",
      },
    },
  };
</script>
