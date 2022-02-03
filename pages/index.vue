<template>
  <topPage @signin="signin" @signup="signup" @demo="demo" />
</template>
<script>
  import topPage from "@template/TopPage.vue";
  export default {
    components: {
      topPage,
    },
    computed: {},
    methods: {
      signin() {
        return this.$signin();
      },
      signup() {
        return this.$signup();
      },
      demo() {
        return this.$demo();
      },
    },
  };
</script>
