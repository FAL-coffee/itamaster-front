<template>
  <specifiedNotationPage />
</template>

<script>
  import specifiedNotationPage from "@template/Common/SpecifiedNotation/SpecifiedNotationPage.vue";
  export default {
    name: "index",
    components: {
      specifiedNotationPage,
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
