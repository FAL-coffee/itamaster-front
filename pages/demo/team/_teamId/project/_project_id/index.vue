<template>
  <environmentStepsPage
    :user="user"
    :project="project"
    :team="team"
    @profile="profile"
  />
</template>

<script>
  import environmentStepsPage from "@template/Common/Project/EnvironmentStepsPage.vue";
  export default {
    name: "index",
    components: {
      environmentStepsPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/demo/userModule/getUser"];
      },
      project() {},
      team() {
        return this.$store.state.modules.demo.teamModule.teams.find(
          (element) => element.teamId == this.$nuxt.$route.params.teamId
        );
      },
    },
    methods: {
      profile(id) {
        return this.$demoProfile(id);
      },
    },
  };
</script>
