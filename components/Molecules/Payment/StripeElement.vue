<template>
  <v-card elevation="0">
    <v-card-text>
      <v-img
        :src="creditCardImg"
        :aspect-ratio="16 / 6"
        max-height="250px"
        contain
        class="mb-5"
      >
      </v-img>
      <stripe-element-card
        ref="elementRef"
        :hidePostalCode="true"
        :pk="pulishableKey"
        @token="tokenCreated"
      />
      <v-btn
        v-if="paidStatus === 'intactive'"
        block
        color="primary"
        @click="submitEvent"
        >{{ $t("molecules.payment.stripe_element.generate_token") }}</v-btn
      >
      <div v-else-if="(paidStatus=='active'||paidStatus=='trialing')">
        <v-alert dense outlined type="error">
          {{ $t("molecules.payment.stripe_element.already_paid_alert") }}
        </v-alert>
        <cancellationConfMessage @terminateClick="terminate" />
      </div>
      <div v-else-if="paidStatus === 'canceled'">
        <v-alert dense outlined text type="warning">
          {{
            $t(
              "molecules.payment.stripe_element.already_subscription_terminate"
            )
          }}
        </v-alert>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import cancellationConfMessage from "@molecules/Msg/CancellationConfMessage.vue";
  import { StripeElementCard } from "@vue-stripe/vue-stripe";
  export default {
    name: "stripeElement",
    components: {
      cancellationConfMessage,
      StripeElementCard,
    },
    data() {
      return {
        creditCardImg: require("@/assets/Payment/credit_card.png"),
        token: null,
      };
    },
    props: {
      pulishableKey: {
        type: String,
        require: true,
        default: "",
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
    },
    methods: {
      submitEvent() {
        this.$refs.elementRef.submit();
      },
      tokenCreated(token) {
        this.$emit("tokenGenerate", token);
      },
      terminate() {
        this.$emit("terminate");
      },
    },
  };
</script>
