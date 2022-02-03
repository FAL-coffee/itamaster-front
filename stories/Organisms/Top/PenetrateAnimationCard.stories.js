import penetrateAnimationCard from "@organisms/Top/PenetrateAnimationCard.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Top/PenetrateAnimationCard",
  components: { penetrateAnimationCard },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { penetrateAnimationCard },
  template:
    '<div style="height:180px; width:100%; background:black;"><penetrateAnimationCard style="top:60px" v-bind="$props"/></div>',
});
export const PenetrateAnimationCard = Template.bind({});
PenetrateAnimationCard.args = {
  text: "Excelでテストを管理する時代に、終わりを告げる",
};
