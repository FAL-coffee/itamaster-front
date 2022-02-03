<template>
  <v-app dark>
    <v-container>
      <!--@changePassword="$emit('changePassword')" @changeEmail="$emit('changeEmail')" @myTaskList="$emit('myTaskList')"-->
      <appHeader
        :user="user"
        :unreadCount="unreadCount"
        :invitations="invitations"
        :notLatestData="notLatestData"
        @signin="signin"
        @signout="signout"
        @profile="profile"
        @en="en"
        @jp="jp"
        @demo="demo"
        @profileRegist="profileRegist"
        @signup="signup"
        @join="join"
        @reject="reject"
        @bellMenuOpen="bellMenuOpen"
        @dataLoad="dataLoad"
        @dataAllLoad="dataAllLoad"
        @toPayment="toPayment"
        @toGuide="toGuide"
      />
      <!-- :notLatestData="notLatestData" @dataLoad="dataLoad" @dataAllLoad="dataAllLoad" -->

      <v-main>
        <nuxt />
      </v-main>

      <appFooter
        :user="user"
        @demo="demo"
        @toHome="toHome"
        @toContactForm="toContactForm"
        @toPrivacyPolicy="toPrivacyPolicy"
        @toTerms="toTerms"
        @toTop="toTop"
        @toSpecifiedNotation="toSpecifiedNotation"
        @toGuide="toGuide"
      />
      <loadingProgressCircle :api="api" />
      <alertMessage :error="error" @readed="readed" />
    </v-container>
  </v-app>
</template>

<script>
  import appHeader from "@organisms/Common/Bar/AppHeader.vue";
  import appFooter from "@organisms/Common/Bar/AppFooter.vue";
  import loadingProgressCircle from "@molecules/Common/LoadingProgressCircle.vue";
  import alertMessage from "@molecules/Common/AlertMessage.vue";
  export default {
    name: "default",
    components: {
      appHeader,
      appFooter,
      loadingProgressCircle,
      alertMessage,
    },
    computed: {
      api() {
        return this.$store.state.modules.apiModule.api;
      },
      error() {
        return this.$store.state.modules.errorModule.error;
      },
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },
      unreadCount() {
        return this.$store.state.modules.userModule.unreadCount;
      },
      invitations() {
        return this.$store.state.modules.userModule.invitations;
      },
      notLatestData() {
        return false;
      },
    },
    methods: {
      en() {
        return this.$router.push(this.switchLocalePath("en"));
      },
      jp() {
        return this.$router.push(this.switchLocalePath("ja"));
      },
      signin() {
        return this.$signin();
      },
      signup() {
        return this.$signup();
      },
      signout() {
        return this.$store.dispatch("modules/userModule/signout");
      },
      profile(id) {
        return this.$profile(id);
      },
      profileRegist() {
        return this.$profileRegist();
      },
      toPayment() {
        return this.$toPayment();
      },
      bellMenuOpen() {
        if (this.unreadCount != 0) {
          return this.$store.dispatch("modules/userModule/newsRead");
        }
      },
      join(data) {
        return this.$store.dispatch("modules/teamModule/join", data);
      },
      reject(id) {
        return this.$store.dispatch("modules/teamModule/reject", id);
      },
      dataLoad() {},
      dataAllLoad() {
        return this.$store.dispatch("modules/teamModule/initialGetter");
      },

      readed() {
        this.$store.dispatch("modules/errorModule/readed");
      },
      toContactForm() {
        return this.$toContactForm();
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
      toGuide() {
        return this.$toGuide();
      },
      demo() {
        return this.$demo();
      },
    },
  };
</script>
