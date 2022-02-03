<template>
  <v-card elevation="4" class="text-center">
    <v-card-title class="justify-center headline orange lighten-4">
      ご契約状況
      <span style="font-size: 12px;"
        >（プランに参加中のユーザーにのみ表示されています。）</span
      >
    </v-card-title>
    <v-card-text>
      <div class="ma-2" />
      プラン名
      <div class="ma-3">
        <span style="font-size: 20px;">{{ planName }}</span>
      </div>

      <v-divider class="ma-2" />
      状態
      <div class="ma-3">
        <span v-if="aboutStatus == 'trialing'" style="font-size: 20px;"
          >トライアル期間中</span
        >
        <span v-else-if="aboutStatus == 'active'" style="font-size: 20px;"
          >有料プラン加入中</span
        >
      </div>

      <!-- 現在トライアル期間中である場合 -->
      <div v-if="aboutStatus == 'trialing'">
        <v-divider class="ma-2" />
        トライアル期間
        <div class="ma-3">
          <span style="font-size: 20px;"
            >{{ trialPeriod.trialStart }} ~ {{ trialPeriod.trialEnd }}</span
          >
        </div>
        <v-divider class="ma-2" />
        有料期間
        <div class="ma-3">
          <span
            v-if="paidStatus == 'canceled'"
            style="font-size: 20px; color: red;"
            >契約は解除済です。有料会員プランへの移行は行われません。</span
          >
          <span v-else-if="paidStatus != 'canceled'" style="font-size: 20px;"
            >トライアル期間終了日の翌日</span
          >
        </div>
      </div>

      <!-- 有料会員期間中である場合 -->
      <div v-if="aboutStatus == 'active'">
        <v-divider class="ma-2" />
        有料会員期間
        <div class="ma-3">
          <span style="font-size: 20px;"
            >{{ subscriptionPeriod.subscriptionStart }} ~
            {{ subscriptionPeriod.subscriptionEnd }}</span
          >
        </div>
        <v-divider class="ma-2" />
        次回更新
        <div class="ma-3">
          <span
            v-if="paidStatus == 'canceled'"
            style="font-size: 20px; color: red;"
            >契約は解除済です。次回の更新は行われません。</span
          >
          <span v-else-if="paidStatus != 'canceled'" style="font-size: 20px;"
            >有料会員期間終了日の翌日</span
          >
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "statusCard",
    components: {},
    data() {
      return {};
    },
    mounted() {
      console.log(this.$props);
    },
    props: {
      planName: {
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
    methods: {},
  };
</script>
