<template>
  <v-btn depressed rounded text @click="$emit('linkClick')">
    <v-icon color="blue">{{ icon }}</v-icon>
    <span class="blue--text">{{ text }}</span>
  </v-btn>
</template>
<script>
  export default {
    name: "linkBtn",
    data() {
      return {};
    },
    props: {
      text: {
        type: String,
        require: true,
        default: "",
      },
      icon: {
        type: String,
        require: false,
        default: "",
      },
    },
  };
</script>
