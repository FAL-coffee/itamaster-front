<template>
  <v-card elevation="6" color="blue-grey lighten-5">
    <v-card-subtitle>
      <v-icon class="mb-2" large>mdi-alert</v-icon>
      <span class="text-h5">{{
        $t("organisms.demo.precautionary_statement_card.overview")
      }}</span>
    </v-card-subtitle>
    <v-card-text>
      <li
        v-for="(content, i) in $t(
          'organisms.demo.precautionary_statement_card.cautions'
        )"
        :key="i"
      >
        {{ content }}
      </li>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "precautionaryStatementCard",
    components: {},
  };
</script>
