import typingAnimationCard from "@organisms/Top/TypingAnimationCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/TypingAnimationCard",
  components: { typingAnimationCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { typingAnimationCard },
  template: '<typingAnimationCard v-bind="$props"/>',
});
export const TypingAnimationCard = Template.bind({});
TypingAnimationCard.args = {
  text: ["どうして無いのだろうか？", "Itamaster がある。"],
};
