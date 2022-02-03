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
        return this.$store.getters["modules/userModule/getUser"];
      },
      project() {},
      team() {
        return this.$store.state.modules.teamModule.teams.find(
          (element) => element.teamId == this.$nuxt.$route.params.teamId
        );
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      profile(id) {
        return this.$profile(id);
      },
    },
  };
</script>
