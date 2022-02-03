<template>
  <v-sheet height="740" style="overflow-y: auto;">
    <informationCard />
    <descriptionOfItemCard />
  </v-sheet>
</template>
<script>
  import descriptionOfItemCard from "@molecules/Payment/DescriptionOfItemCard.vue";
  import informationCard from "@molecules/Payment/InformationCard.vue";
  export default {
    name: "merchandiseCard",
    components: {
      descriptionOfItemCard,
      informationCard,
    },
  };
</script>
