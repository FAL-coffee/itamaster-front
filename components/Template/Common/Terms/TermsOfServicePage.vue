<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <termsCard />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
  import termsCard from "@organisms/Common/Terms/TermsCard.vue";
  export default {
    name: "privacyPolicyPage",
    data() {
      return {};
    },
    components: {
      termsCard,
    },
    props: {},
    methods: {},
  };
</script>
