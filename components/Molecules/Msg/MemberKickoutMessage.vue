<template>
  <div class="justify-center">
    <v-dialog v-model="alert" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          dark
          fab
          color="pink lighten-1"
          small
          elevation="0"
        >
          <v-icon small dark>mdi-account-arrow-right-outline</v-icon>
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
              {{ $t("molecules.msg.member_kickout_mesage.kickout_conf") }}
            </div>
            <div small>
              ※
              {{
                $t("molecules.msg.member_kickout_mesage.cannot_see_information")
              }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="kickClick(), (alert = false)">
              {{ $t("general.ok") }}
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
    name: "memberKickoutMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      kickClick() {
        return this.$emit("kickClick");
      },
    },
  };
</script>
