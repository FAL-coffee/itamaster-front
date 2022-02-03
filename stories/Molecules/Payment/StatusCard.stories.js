import statusCard from "@molecules/Payment/StatusCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Payment/StatusCard",
  components: { statusCard },
  argTypes: {
    paidStatus: {
      control: {
        type: "select",
        options: ["intactive", "trialing", "active", "canceled"],
      },
    },
    aboutStatus: {
      control: { type: "select", options: ["intactive", "trialing", "active"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { statusCard },
  template: `
            <statusCard v-bind="$props"/>
    `,
});
export const StatusCard = Template.bind({});
StatusCard.args = {
  planName: "1Month Only Plan",
  paidStatus: "active",
  aboutStatus: "active",
  trialPeriod: {
    trial_start: "2019/9/4",
    trial_end: "2019/9/4",
  },
  subscriptionPeriod: {
    subscriptionStart: "2019/9/4",
    subscriptionEnd: "2019/9/4",
  },
};
