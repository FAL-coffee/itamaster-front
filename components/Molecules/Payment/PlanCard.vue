<template>
  <v-card elevation="3" class="text-center">
    <v-card-title>
      <v-img
        :src="backImg"
        max-height="200"
        contain
        style="align-items: center;"
      >
        <div class="text-h2 font-weight-black">Itamaster</div>
        <div
          style="font-weight: 500; font-size: 25px;"
          class="blue-grey lighten-5"
        >
          {{ planName }}
        </div>
      </v-img>
    </v-card-title>
    <v-card-text>
      <v-divider class="ma-2" />
      {{ $t("molecules.payment.plan_card.price") }}
      <div style="font-weight: 500;" class="ma-3">
        <span style="font-size: 35px;"
          >{{ price }}
          {{ $t("molecules.payment.plan_card.payment_unit") }} /</span
        >
        <span style="font-size: 30px;">
          {{ someMonth }} {{ $t("molecules.payment.plan_card.month") }}</span
        >
      </div>

      <v-divider class="ma-2" />
      {{ $t("molecules.payment.plan_card.type") }}
      <div class="text-h4" style="color: #ef6c00;">
        <div v-if="subscriptionFlag">
          {{ $t("molecules.payment.plan_card.subscription") }}
        </div>
        <div v-else-if="!subscriptionFlag">
          {{ $t("molecules.payment.plan_card.sold_out") }}
        </div>
      </div>

      <div v-if="trialDays != '0'">
        <v-divider class="ma-2" />
        {{ $t("molecules.payment.plan_card.trial_period") }}
        <div class="text-h4" style="color: #2e7d32;">
          {{ trialDays }}{{ $t("molecules.payment.plan_card.days") }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "planCard",
    components: {},
    data() {
      return {
        backImg: require("@/assets/TopPage/backImg.jpg"),
      };
    },
    props: {
      planName: {
        type: String,
        require: true,
        default: "",
      },
      someMonth: {
        type: String,
        require: true,
        default: "0",
      },
      subscriptionFlag: {
        type: Boolean,
        require: false,
        default: false,
      },
      price: {
        type: String,
        require: true,
        default: "0",
      },
      trialDays: {
        type: String,
        require: true,
        default: "0",
      },
    },
    methods: {},
  };
</script>
