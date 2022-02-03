<template>
  <div>
    <v-row style="margin-top: -30px;">
      <v-col cols="6">
        <exportOption
          :opt="systemNameFlag"
          :val="systemName"
          @optSwitch="systemNameSwitch"
          @valChange="systemNameChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.system_name')"
            />
          </template>
        </exportOption>
      </v-col>
      <v-col cols="6">
        <exportOption
          :opt="subSystemNameFlag"
          :val="subSystemName"
          @optSwitch="subSystemNameSwitch"
          @valChange="subSystemNameChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.sub_system_name')"
            />
          </template>
        </exportOption>
      </v-col>
    </v-row>
    <v-row style="margin-top: -80px;">
      <v-col cols="6">
        <exportOption
          :opt="leaderFlag"
          :val="leader"
          @optSwitch="leaderSwitch"
          @valChange="leaderChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.leader')"
            />
          </template>
        </exportOption>
      </v-col>
      <v-col cols="6">
        <exportOption
          :opt="teamNameFlag"
          :val="teamName"
          @optSwitch="teamNameSwitch"
          @valChange="teamNameChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.team_name')"
            />
          </template>
        </exportOption>
      </v-col>
    </v-row>
    <v-row style="margin-top: -80px;">
      <v-col cols="6">
        <exportOption
          :opt="beginDateFlag"
          :val="beginDate"
          @optSwitch="beginDateSwitch"
          @valChange="beginDateChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.begin_date')"
            />
          </template>
        </exportOption>
      </v-col>
      <v-col cols="6">
        <exportOption
          :opt="endDateFlag"
          :val="endDate"
          @optSwitch="endDateSwitch"
          @valChange="endDateChanged"
        >
          <template slot="label">
            <linkBtn
              icon="mdi-circle-edit-outline"
              :text="$t('general.end_date')"
            />
          </template>
        </exportOption>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import exportOption from "@molecules/Project/ExportOption.vue";
  export default {
    name: "exportOptions",
    components: {
      linkBtn,
      exportOption,
    },
    data() {
      return {
        systemNameFlag: this.$props.systemName != "",
        subSystemNameFlag: this.$props.subSystemName != "",
        leaderFlag: this.$props.leader != "",
        teamNameFlag: this.$props.teamName != "",
        beginDateFlag: this.$props.beginDate != "",
        endDateFlag: this.$props.endDate != "",
      };
    },
    props: {
      systemName: {
        type: String,
        require: false,
        default: "",
      },
      subSystemName: {
        type: String,
        require: false,
        default: "",
      },
      leader: {
        type: String,
        require: false,
        default: "",
      },
      teamName: {
        type: String,
        require: false,
        default: "",
      },
      beginDate: {
        type: String,
        require: false,
        default: "",
      },
      endDate: {
        type: String,
        require: false,
        default: "",
      },
    },
    computed: {},
    methods: {
      systemNameSwitch(v) {
        this.$data.systemNameFlag = v;
        return this.systemNameChanged(v ? this.$props.systemName : "");
      },
      systemNameChanged(v) {
        return this.$emit("systemNameChanged", v);
      },

      subSystemNameSwitch(v) {
        this.$data.subSystemNameFlag = v;
        return this.subSystemNameChanged(v ? this.$props.subSystemName : "");
      },
      subSystemNameChanged(v) {
        return this.$emit("subSystemNameChanged", v);
      },

      leaderSwitch(v) {
        this.$data.leaderFlag = v;
        return this.leaderChanged(v ? this.$props.leader : "");
      },
      leaderChanged(v) {
        return this.$emit("leaderChanged", v);
      },

      teamNameSwitch(v) {
        this.$data.teamNameFlag = v;
        return this.teamNameChanged(v ? this.$props.teamName : "");
      },
      teamNameChanged(v) {
        return this.$emit("teamNameChanged", v);
      },

      beginDateSwitch(v) {
        this.$data.beginDateFlag = v;
        return this.beginDateChanged(v ? this.$props.beginDate : "");
      },
      beginDateChanged(v) {
        return this.$emit("beginDateChanged", v);
      },

      endDateSwitch(v) {
        this.$data.endDateFlag = v;
        return this.endDateChanged(v ? this.$props.endDate : "");
      },
      endDateChanged(v) {
        return this.$emit("endDateChanged", v);
      },
    },
  };
</script>
