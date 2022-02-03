<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3">
          <v-card-title>
            <div style="width: 20%;"></div>
            <div class="text-center" style="width: 60%;">
              {{ $t("template.project_page.page_name_before_team_name") }}
              {{ team.name }}
              {{ $t("template.project_page.page_name_after_team_name") }}
            </div>
            <v-spacer></v-spacer>
            <projectEditModal
              v-if="user.id === team.adminUserId"
              :edit="false"
              :user="user"
              :team="team"
              @save="projectEditSave"
            />
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            {{ $t("template.project_page.please_project") }}
          </v-card-subtitle>
          <project
            :user="user"
            :projects="projects"
            :team="team"
            class="ma-10 pb-15"
            @toCreateEnvironmentSteps="toCreateEnvironmentSteps"
            @toTestEnvironment="toTestEnvironment"
            @toRepository="toRepository"
            @projectEditSave="projectEditSave"
            @projectDestroy="projectDestroy"
            @fileExport="fileExport"
            @testSuiteSave="testSuiteSave"
            @testSuiteDestroy="testSuiteDestroy"
            @profile="profile"
            @testSuiteOpen="testSuiteOpen"
          />
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>
<script>
  import projectEditModal from "@organisms/Project/Modal/ProjectEditModal.vue";
  import project from "@organisms/Project/Project.vue";
  export default {
    name: "teamCardList",
    data() {
      return {};
    },
    components: {
      projectEditModal,
      project,
    },
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
          iconImg: { url: "" },
          message: "",
        }),
      },
      projects: {
        type: Array,
        require: false,
        default: () => [
          {
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
          },
        ],
      },
      team: {
        type: Object,
        require: true,
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
    methods: {
      // from.projectCard
      toCreateEnvironmentSteps(id) {
        return this.$emit("toCreateEnvironmentSteps", id);
      },
      toTestEnvironment(url) {
        return this.$emit("toTestEnvironment", url);
      },
      toRepository(url) {
        return this.$emit("toRepository", url);
      },
      projectEditSave(data) {
        return this.$emit("projectEditSave", data);
      },
      projectDestroy(id) {
        return this.$emit("projectDestroy", id);
      },
      // from.testSuiteTable
      testSuiteSave(data) {
        return this.$emit("testSuiteSave", data);
      },
      testSuiteDestroy(id) {
        return this.$emit("testSuiteDestroy", id);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
      testSuiteOpen(data) {
        return this.$emit("testSuiteOpen", data);
      },
      fileExport(data) {
        return this.$emit("fileExport", data);
      },
    },
  };
</script>
