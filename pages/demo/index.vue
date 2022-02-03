<template>
  <userSelectPage :userOptions="selectableUsers" @userSelect="userSelect" />
</template>
<script>
  import userSelectPage from "@template/Demo/UserSelectPage";
  export default {
    name: "index",
    components: {
      userSelectPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/demo/userModule/getUser"];
      },
      selectableUsers() {
        return this.$store.getters["modules/demo/userModule/getSelectableUser"];
      },
    },
    methods: {
      userSelect(id) {
        this.$store.dispatch("modules/demo/userModule/userSelect", id);
        return this.$store.dispatch("modules/demo/teamModule/initialGetter");
      },
    },
  };
</script>
