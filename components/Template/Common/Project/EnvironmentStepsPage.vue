<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3">
          <v-card-title>
            <div style="width: 100%;" class="text-center">
              {{ project.name }}
              {{ $t("template.environment_steps_page.page_name") }}
            </div>
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            {{ $t("template.environment_steps_page.sorry") }}
            <br />
            <br />
            <br />
            {{ $t("template.environment_steps_page.yet_implemented") }}
            <br />
            <br />
            {{ $t("template.environment_steps_page.remarks") }}
            <br />
            <br />
            {{ $t("template.environment_steps_page.hurry_implemented") }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: "environmentStepsPage",
    data() {
      return {};
    },
    components: {},
    props: {
      user: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          name: "",
          initials: "",
          email: "",
          color: "",
          simpleIcon: false,
          // bgImg:'',
          iconImg: "",
          message: "",
        }),
      },
      project: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          memo: "",
          tester: [],
          createEnvironmentSteps: false,
          testEnvironmentURL: "",
          repositoryURL: "",
          gitCooperation: false,
          testSuits: [],
          enabled: false,
        }),
      },
      team: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          teamId: "",
          name: "",
          memo: "",
          adminUserId: 0,
          private: true,
          teamMember: [{ id: 0, name: "" }],
        }),
      },
    },
    methods: {},
  };
</script>
