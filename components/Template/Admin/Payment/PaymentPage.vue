<template>
  <v-row>
    <v-col cols="12" lg="4" md="12" sm="12">
      <planStatusCard
        :userIsTrialing="userIsTrialing"
        :user="user"
        :paidStatus="paidStatus"
        :aboutStatus="aboutStatus"
        :trialPeriod="trialPeriod"
        :subscriptionPeriod="subscriptionPeriod"
      />
    </v-col>
    <v-col cols="12" lg="5" md="12" sm="12">
      <merchandiseCard />
    </v-col>
    <v-col cols="12" lg="3" md="12" sm="12">
      <stripeElement
        :pulishableKey="pk"
        :paidStatus="paidStatus"
        @tokenGenerate="tokenGenerate"
        @terminate="$emit('terminate')"
      />
    </v-col>
  </v-row>
</template>
<script>
  import merchandiseCard from "@organisms/Payment/MerchandiseCard.vue";
  import planStatusCard from "@organisms/Payment/Plan_StatusCard.vue";
  import stripeElement from "@molecules/Payment/StripeElement.vue";
  export default {
    name: "paymentPage",
    components: {
      merchandiseCard,
      planStatusCard,
      stripeElement,
    },
    props: {
      pk: {
        type: String,
        require: true,
        default: "",
      },
      paidStatus: {
        type: String,
        require: false,
        default: "",
      },
      aboutStatus: {
        type: String,
        require: false,
        default: "",
      },
      userIsTrialing: {
        type: Boolean,
        require: false,
        default: false,
      },
      user: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          trialed: false,
        }),
      },
      trialPeriod: {
        type: Object,
        require: true,
        default: () => ({ trialStart: "", trialEnd: "" }),
      },
      subscriptionPeriod: {
        type: Object,
        require: true,
        default: () => ({ subscriptionStart: "", subscriptionEnd: "" }),
      },
    },
    data() {
      return {};
    },
    methods: {
      tokenGenerate(data) {
        return this.$emit("tokenGenerate", data);
      },
    },
  };
</script>
