import contactForm from "@organisms/Common/ContactForm/ContactForm.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Common/ContactForm/ContactForm",
  components: { contactForm },
  argTypes: {
    confirm: { action: "confirm" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { contactForm },
  template: '<contactForm v-bind="$props" @confirm="confirm"/>',
});
export const ContactForm = Template.bind({});
ContactForm.args = {
  open: true,
};
