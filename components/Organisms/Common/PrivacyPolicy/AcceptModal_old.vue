<template>
  <privacyPolicyCard />
</template>
<script>
  import privacyPolicyCard from "@organisms/Common/PrivacyPolicy/PrivacyPolicyCard.vue";
  export default {
    name: "acceptModal",
    components: {
      privacyPolicyCard,
    },
    data() {
      return {
        accept: false,
      };
    },
    props: {
      open: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    computed: {
      disabled() {
        let disabled = true;
        if (this.$data.accept) disabled = false;
        return disabled;
      },
    },
    methods: {},
  };
</script>
<style scoped>
  .always-show-scrollbar {
    overflow-y: scroll !important;
  }
</style>
