import planCard from "@molecules/Payment/PlanCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Payment/PlanCard",
  components: { planCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { planCard },
  template: `
            <planCard v-bind="$props"/>
    `,
});
export const PlanCard_1month_only = Template.bind({});
PlanCard_1month_only.args = {
  // プラン名
  planName: "1Month Only Plan",
  // 継続月数
  someMonth: "1",
  // 買い切り=>false, 継続課金=>true
  subscriptionFlag: false,
  // 値段
  price: "1,280",
  // トライアル日数 (無しの場合は0)
  trialDays: "0",
};
export const PlanCard_3month_14trial_subscription = Template.bind({});
PlanCard_3month_14trial_subscription.args = {
  planName: "Subscription Plan",
  someMonth: "3",
  subscriptionFlag: true,
  price: "2,980",
  trialDays: "14",
};
