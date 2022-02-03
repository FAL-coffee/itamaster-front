<template>
  <userRegisterPage :user="user" @profileSave="profileSave" />
</template>

<script>
  import userRegisterPage from "@template/Common/User/UserRegisterPage.vue";
  export default {
    name: "index",
    components: {
      userRegisterPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },
    },
    mounted() {
      if (this.user.id === 0) {
        return this.$signin();
      }
    },
    methods: {
      profileSave(data) {
        this.$store.dispatch("modules/userModule/edit", data);
      },
    },
  };
</script>
