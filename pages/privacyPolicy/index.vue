<template>
  <privacyPolicyPage />
</template>

<script>
  import privacyPolicyPage from "@template/Common/Privacy/PrivacyPolicyPage.vue";
  export default {
    name: "index",
    components: {
      privacyPolicyPage,
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
