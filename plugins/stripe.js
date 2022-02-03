import Vue from "vue";
import { StripePlugin } from "@vue-stripe/vue-stripe";

const options = {
  pk: process.env.VUE_APP_STRIPE_API_KEY,
  stripeAccount: "itamaster.work",
  apiVersion: "2020-08-27",
  locale: "ja",
};

Vue.use(StripePlugin, options);
