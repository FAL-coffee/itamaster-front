<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <specifiedNotationCard />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
  import specifiedNotationCard from "@organisms/Common/SpecifiedNotation/SpecifiedNotationCard.vue";
  export default {
    name: "specifiedNotationPage",
    data() {
      return {};
    },
    components: {
      specifiedNotationCard,
    },
    props: {},
    methods: {},
  };
</script>
