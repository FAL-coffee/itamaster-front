import plan_StatusCard from "@organisms/Payment/Plan_StatusCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Payment/Plan_StatusCard",
  components: { plan_StatusCard },
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
  components: { plan_StatusCard },
  template: '<plan_StatusCard v-bind="$props"/>',
});
export const Plan_StatusCard_active = Template.bind({});
Plan_StatusCard_active.args = {
  userIsTrialing: false,
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    // bgImg:'',
    iconImg: { url: "" },
    message: "this is message",
    trialed: true,
  },
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

export const Plan_StatusCard_active_canceled = Template.bind({});
Plan_StatusCard_active_canceled.args = {
  userIsTrialing: true,
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    // bgImg:'',
    iconImg: { url: "" },
    message: "this is message",
    trialed: true,
  },
  paidStatus: "canceled",
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

export const Plan_StatusCard_trialing = Template.bind({});
Plan_StatusCard_trialing.args = {
  userIsTrialing: true,
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    // bgImg:'',
    iconImg: { url: "" },
    message: "this is message",
    trialed: true,
  },
  paidStatus: "trialing",
  aboutStatus: "trialing",
  trialPeriod: {
    trial_start: "2019/9/4",
    trial_end: "2019/9/4",
  },
  subscriptionPeriod: {
    subscriptionStart: "2019/9/4",
    subscriptionEnd: "2019/9/4",
  },
};

export const Plan_StatusCard_trialing_canceled = Template.bind({});
Plan_StatusCard_trialing_canceled.args = {
  userIsTrialing: true,
  user: {
    id: 1,
    initials: "UR",
    name: "user",
    email: "user@Itamaster.co.jp",
    color: "blue",
    simpleIcon: false,
    // bgImg:'',
    iconImg: { url: "" },
    message: "this is message",
    trialed: true,
  },
  paidStatus: "canceled",
  aboutStatus: "trialing",
  trialPeriod: {
    trial_start: "2019/9/4",
    trial_end: "2019/9/4",
  },
  subscriptionPeriod: {
    subscriptionStart: "2019/9/4",
    subscriptionEnd: "2019/9/4",
  },
};
