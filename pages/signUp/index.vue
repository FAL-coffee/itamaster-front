<template>
  <signUpPage
    @signUpConfirm="signUpConfirm"
    @toPrivacyPolicy="toPrivacyPolicy"
    @toTerms="toTerms"
    @toSpecifiedNotation="toSpecifiedNotation"
  />
</template>

<script>
  import signUpPage from "@template/Common/User/SignUpPage.vue";
  export default {
    name: "index",
    components: {
      signUpPage,
    },
    computed: {},
    methods: {
      signUpConfirm(data) {
        delete data.password2;
        data.initials = data.name.slice(0, 1);
        this.$store.dispatch("modules/userModule/signup", data);
      },
      toPrivacyPolicy() {
        return this.$toPrivacyPolicy();
      },
      toHome() {
        return this.$toHome();
      },
      toTop() {
        return this.$toTop();
      },
      toTerms() {
        return this.$toTerms();
      },
      toSpecifiedNotation() {
        return this.$toSpecifiedNotation();
      },
    },
  };
</script>
