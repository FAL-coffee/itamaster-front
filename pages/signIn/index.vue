<template>
  <signInPage @signInConfirm="signInConfirm" />
</template>

<script>
  import signInPage from "@template/Common/User/SignInPage.vue";
  export default {
    name: "index",
    components: {
      signInPage,
    },
    computed: {},
    methods: {
      signInConfirm(data) {
        this.$store.dispatch("modules/userModule/signin", data);
      },
    },
  };
</script>
