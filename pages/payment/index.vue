<template>
  <paymentPage
    :pk="pk"
    :user="user"
    :paidStatus="paidStatus"
    :aboutStatus="aboutStatus"
    :userIsTrialing="userIsTrialing"
    :trialPeriod="trialPeriod"
    :subscriptionPeriod="subscriptionPeriod"
    @tokenGenerate="tokenGenerate"
    @terminate="terminate"
  />
</template>

<script>
  import paymentPage from "@template/Admin/Payment/PaymentPage.vue";
  export default {
    name: "index",
    components: {
      paymentPage,
    },
    computed: {
      paidStatus() {
        return this.$store.getters["modules/paymentModule/getPaidStatus"];
      },
      aboutStatus() {
        console.log(
          this.$store.getters["modules/paymentModule/getAboutStatus"]
        );
        return this.$store.getters["modules/paymentModule/getAboutStatus"];
      },
      trialPeriod() {
        return this.$store.getters["modules/paymentModule/getTrialPeriod"];
      },
      subscriptionPeriod() {
        return this.$store.getters[
          "modules/paymentModule/getSubscriptionPeriod"
        ];
      },
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },
      userIsTrialing() {
        return this.$store.getters["modules/paymentModule/userIsTrialing"];
      },
      pk() {
        return process.env.VUE_APP_STRIPE_API_KEY;
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      tokenGenerate(data) {
        return this.$store.dispatch("modules/paymentModule/subscribe", data);
      },
      terminate() {
        return this.$store.dispatch("modules/paymentModule/unsubscribe");
      },
    },
  };
</script>
