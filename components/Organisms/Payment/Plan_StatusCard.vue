<template>
  <v-sheet height="740" style="overflow-y: auto;">
    <statusCard
      v-if="paidStatus != 'intactive'"
      :planName="planName"
      :paidStatus="paidStatus"
      :aboutStatus="aboutStatus"
      :trialPeriod="trialPeriod"
      :subscriptionPeriod="subscriptionPeriod"
    />

    <planCard
      class="mt-13"
      :planName="planName"
      :someMonth="someMonth"
      :subscriptionFlag="true"
      :price="'1,280'"
      :trialDays="trialDays"
    />
  </v-sheet>
</template>
<script>
  import planCard from "@molecules/Payment/PlanCard.vue";
  import statusCard from "@molecules/Payment/StatusCard.vue";
  export default {
    name: "merchandiseCard",
    data() {
      return {
        planName: "Itamaster サブスクリプションプラン",
        someMonth: "1",
        subscriptionFlag: true,
        price: "1,280",
      };
    },
    components: {
      planCard,
      statusCard,
    },
    props: {
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
      // active(有効中。activeである),
      // trialing(有効中、トライアル期間である。trialing)
      // canceled(有効中だが、解約手続きを終えている。active,trialing, また、cancel_at_period_endがtrue),
      // intactive(有効中でない)
      paidStatus: {
        type: String,
        require: true,
        default: "intactive",
      },
      // active(有効中。activeである),
      // trialing(有効中、トライアル期間である。trialing)
      // intactive(有効中でない)
      aboutStatus: {
        type: String,
        require: true,
        default: "intactive",
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
    computed: {
      trialDays() {
        let trialDays = "0";
        if (this.$props.user.trialed === false) trialDays = "14";
        else if (
          this.$props.user.trialed === true &&
          this.$props.paidStatus === "trialing"
        )
          trialDays = "14";
        else if (
          this.$props.user.trialed === true &&
          this.$props.userIsTrialing === true
        )
          trialDays = "14";
        return trialDays;
      },
    },
  };
</script>
