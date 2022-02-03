<template>
  <div style="display: inline-block;">
    <v-dialog v-model="alert" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          elevation="0"
          v-bind="attrs"
          v-on="on"
          color="error"
          @click="alert = !alert"
        >
          <v-icon small dark>mdi-exit-to-app</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-alert
          :value="alert"
          color="pink lighten-2"
          dark
          style="margin-bottom: 0px;"
          border="top"
          icon="mdi-alert-circle-outline"
          transition="scale-transition"
        >
          <v-card-text>
            <div>
              {{ $t("molecules.msg.team_exit_conf_message.team_exit_conf") }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="exitClick(), (alert = false)">
              {{ $t("general.exit") }}
            </v-btn>
            <v-btn color="primary" @click="alert = false" class="ml-3">
              {{ $t("general.cancel") }}
            </v-btn>
          </v-card-actions>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: "teamExitConfMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      exitClick() {
        return this.$emit("exitClick");
      },
    },
  };
</script>
