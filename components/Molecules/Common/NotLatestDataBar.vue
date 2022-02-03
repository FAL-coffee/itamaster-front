<template>
  <div v-if="notLatestData">
    <v-system-bar app color="orange darken-1" dark height="37">
      <v-icon>mdi-information-outline</v-icon>
      <span>{{
        $t(
          "molecules.common.not_latest_data_bar.data_reload_confirmation_message"
        )
      }}</span>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" elevation="0" @click="$emit('dataLoad')">
        <v-icon large dark>mdi-reload</v-icon>
      </v-btn>
    </v-system-bar>
  </div>
</template>
<script>
  export default {
    name: "notLatestDataBar",
    components: {},
    props: {
      notLatestData: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
  };
</script>
