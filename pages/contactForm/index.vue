<template>
  <contactFormPage :user="user" @confirm="confirm" />
</template>

<script>
  import contactFormPage from "@template/Common/Contact/ContactFormPage.vue";
  export default {
    name: "index",
    components: {
      contactFormPage,
    },
    computed: {
      user() {
        return this.$store.getters["modules/userModule/getUser"];
      },
    },
    mounted() {
      // if(this.user.id===0){
      //   return this.$signin()
      // }
    },
    methods: {
      confirm(data) {
        return this.$store.dispatch("modules/contactModule/create", data);
      },
    },
  };
</script>
