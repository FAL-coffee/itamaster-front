import exportOptions from "@organisms/Project/grouping/ExportOptions.vue";
import vuetify from "@v-plugin/vuetify.js";
export default {
  title: "Organisms/Project/grouping/ExportOptions",
  components: { exportOptions },
  argTypes: {
    systemNameChanged: { action: "systemNameChanged" },
    subSystemNameChanged: { action: "subSystemNameChanged" },
    leaderChanged: { action: "leaderChanged" },
    teamNameChanged: { action: "teamNameChanged" },
    beginDateChanged: { action: "beginDateChanged" },
    endDateChanged: { action: "endDateChanged" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  vuetify,
  components: { exportOptions },
  template: `<exportOptions v-bind="$props" @systemNameChanged="systemNameChanged" @subSystemNameChanged="subSystemNameChanged" 
                    @leaderChanged="leaderChanged" @teamNameChanged="teamNameChanged" @beginDateChanged="beginDateChanged" @endDateChanged="endDateChanged"
              />`,
});
export const ExportOptions = Template.bind({});
ExportOptions.args = {
  systemName: "",
  subSystemName: "",
  leader: "",
  teamName: "",
  beginDate: "",
  endDate: "",
};
