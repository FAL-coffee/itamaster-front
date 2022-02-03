<template>
  <div>
    <projectList :projects="projectNames" @projectSet="projectSwitch" />
    <projectCard
      v-if="showProjectId != 0"
      :user="user"
      :project="propsProjects.find((obj) => obj.id === showProjectId)"
      :team="team"
      @toCreateEnvironmentSteps="toCreateEnvironmentSteps"
      @toTestEnvironment="toTestEnvironment"
      @fileExport="fileExport"
      @toRepository="toRepository"
      @projectEditSave="projectEditSave"
      @projectDestroy="projectDestroy"
    >
      <template slot="testSuiteTable">
        <testSuiteTable
          v-if="
            showProjectId === 0
              ? []
              : propsProjects.find((obj) => obj.id === showProjectId).enabled
          "
          class="mt-3"
          :user="user"
          :testSuits="
            showProjectId === 0
              ? []
              : propsProjects.find((obj) => obj.id === showProjectId).testSuits
          "
          :persons="
            showProjectId === 0
              ? []
              : propsProjects.find((obj) => obj.id === showProjectId).tester
          "
          @save="testSuiteSave"
          @destroy="testSuiteDestroy"
          @profile="profile"
          @testSuiteOpen="testSuiteOpen"
        />
      </template>
    </projectCard>

    <v-card v-else-if="showProjectId === 0" elevation="8">
      <v-card-title class="justify-center">
        {{ $t("organisms.project.project.project_cannot_found") }}
      </v-card-title>
      <v-card-subtitle> </v-card-subtitle>
      <v-card-text class="mt-10 text-center">
        {{ $t("organisms.project.project.please_project_select") }}
        <br />
        {{ $t("organisms.project.project.display_project_and_testsuite_list") }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  import projectList from "@molecules/Project/ProjectList.vue";
  import projectCard from "@organisms/Project/Card/ProjectCard.vue";
  import testSuiteTable from "@organisms/TestSuite/TestSuiteTable.vue";
  export default {
    name: "project",
    data() {
      return {
        showProjectId: 0,
      };
    },
    components: {
      projectList,
      projectCard,
      testSuiteTable,
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
          isPaidTeam: true,
          teamMember: [{ id: 0, name: "" }],
        }),
      },
    },
    computed: {
      propsProjects() {
        let propsProjects = this.$props.projects;
        for (var i = 0; i < propsProjects.length; i++) {
          for (var j = 0; j < propsProjects[i].testSuits.length; j++) {
            propsProjects[i].testSuits[j].auth = false;
            if (this.$props.team.adminUserId === this.$props.user.id)
              propsProjects[i].testSuits[j].auth = true;
            if (propsProjects[i].testSuits[j].createrId === this.$props.user.id)
              propsProjects[i].testSuits[j].auth = true;
            if (
              propsProjects[i].testSuits[j].writers.includes(
                this.$props.user.id
              )
            )
              propsProjects[i].testSuits[j].auth = true;
          }
        }
        return propsProjects;
      },
      projectNames() {
        return this.$props.projects.map((obj) => ({
          id: obj.id,
          name: obj.name,
        }));
      },
    },
    methods: {
      // from.projectCard
      toCreateEnvironmentSteps() {
        return this.$emit("toCreateEnvironmentSteps", this.$data.showProjectId);
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
        this.$data.showProjectId = 0;
        return this.$emit("projectDestroy", id);
      },

      projectSwitch(id) {
        this.$data.showProjectId = id;
      },
      // from.testSuiteTable
      testSuiteSave(data) {
        // data.project_id = this.$data.showProjectId
        const query = { testsuite: data, project_id: this.$data.showProjectId };
        return this.$emit("testSuiteSave", query);
      },
      testSuiteDestroy(id) {
        const query = {
          testsuite_id: id,
          project_id: this.$data.showProjectId,
        };
        return this.$emit("testSuiteDestroy", query);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
      testSuiteOpen(data) {
        let query = [data[0], this.$data.showProjectId, data[1]];
        return this.$emit("testSuiteOpen", query);
      },
      fileExport(data) {
        return this.$emit("fileExport", data);
      },
    },
  };
</script>
