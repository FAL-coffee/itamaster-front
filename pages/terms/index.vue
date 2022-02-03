<template>
  <termsOfServicePage />
</template>

<script>
  import termsOfServicePage from "@template/Common/Terms/TermsOfServicePage.vue";
  export default {
    name: "index",
    components: {
      termsOfServicePage,
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
    methods: {},
  };
</script>
