<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <privacyPolicyCard />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
  import privacyPolicyCard from "@organisms/Common/PrivacyPolicy/PrivacyPolicyCard.vue";
  export default {
    name: "privacyPolicyPage",
    data() {
      return {};
    },
    components: {
      privacyPolicyCard,
    },
    props: {},
    methods: {},
  };
</script>
