<template>
  <userCardPage :browsingUser="browsingUser" />
</template>

<script>
  import userCardPage from "@template/Common/User/UserCardPage.vue";
  export default {
    name: "index",
    components: {
      userCardPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/demo/userModule/getUser"];
      },
      browsingUser() {
        if (this.$nuxt.$route.params.id == -1) {
          return {
            id: -1,
            name: "No Name",
            iconImg: { url: "" },
            message:
              "The user was not found. This user may no longer exist on your team.",
            simpleIcon: true,
            color: "black",
          };
        }
        // profile/のidを使って、teamModule/membersからuserデータを取得する
        return this.$store.state.modules.demo.teamModule.members.find(
          (element) => element.id == this.$nuxt.$route.params.id
        );
      },
    },
    methods: {},
  };
</script>
