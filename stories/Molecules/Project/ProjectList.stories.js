import projectList from "@molecules/Project/ProjectList.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Molecules/Project/ProjectList",
  components: { projectList },
  argTypes: {
    projectSet: { action: "projectSet" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { projectList },
  template: '<projectList v-bind="$props" @projectSet="projectSet"/>',
});
export const ProjectList = Template.bind({});
ProjectList.args = {
  projects: [
    { id: 1, name: "testProject01" },
    { id: 2, name: "testProject02" },
    { id: 3, name: "testProject03" },
  ],
  selected: { id: 1, name: "testProject01" },
};
