import stripeElement from "@molecules/Payment/StripeElement.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Payment/StripeElement",
  components: { stripeElement },
  argTypes: {
    tokenGenerate: { action: "tokenGenerate" },
    terminate: { action: "terminate" },

    paidStatus: {
      control: {
        type: "select",
        options: ["intactive", "trialing", "active", "canceled"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { stripeElement },
  template:
    '<stripeElement v-bind="$props" @tokenGenerate="tokenGenerate" @terminate="terminate"/>',
});
export const StripeElement_intactive = Template.bind({});
StripeElement_intactive.args = {
  // test用
  pulishableKey: process.env.VUE_APP_TEST_STRIPE_API_KEY,
  demoKeyNumber: "4242 4242 4242 4242",
  paidStatus: "intactive",
};

export const StripeElement_active = Template.bind({});
StripeElement_active.args = {
  // test用
  pulishableKey: process.env.VUE_APP_TEST_STRIPE_API_KEY,
  demoKeyNumber: "4242 4242 4242 4242",
  paidStatus: "active",
};

export const StripeElement_trialing = Template.bind({});
StripeElement_trialing.args = {
  // test用
  pulishableKey: process.env.VUE_APP_TEST_STRIPE_API_KEY,
  demoKeyNumber: "4242 4242 4242 4242",
  paidStatus: "trialing",
};

export const StripeElement_canceled = Template.bind({});
StripeElement_canceled.args = {
  // test用
  pulishableKey: process.env.VUE_APP_TEST_STRIPE_API_KEY,
  demoKeyNumber: "4242 4242 4242 4242",
  paidStatus: "canceled",
};
