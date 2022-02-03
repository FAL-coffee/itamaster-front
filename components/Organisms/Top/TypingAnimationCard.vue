<template>
  <v-card elevation="0">
    <h1>
      {{ $t("organisms.top.typing_animation_card.example_github") }}
      <br /><br />
      {{ $t("organisms.top.typing_animation_card.test_is") }}
      <!-- <vue-typer :repeat="3" :eraseDelay="2000" :text="text" /> -->
      <vue-typer :eraseDelay="2000" :text="text" />
    </h1>
  </v-card>
</template>

<script>
  import { VueTyper } from "vue-typer";
  export default {
    name: "typingAnimationCard",
    components: {
      VueTyper,
    },
    props: {
      text: {
        type: Array,
        require: true,
        default: () => ["defaultText", "changed"],
      },
    },
  };
</script>
