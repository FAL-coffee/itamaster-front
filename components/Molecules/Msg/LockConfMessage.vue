<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="alert" width="370">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          elevation="0"
          color="indigo"
          dark
          @click="alert = !alert"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-lock</v-icon>
            </template>
            <span>Get lock</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-card>
        <v-alert
          :value="alert"
          color="deep-purple lighten-3"
          style="margin-bottom: 0px;"
          border="top"
          transition="scale-transition"
        >
          <v-card-text>
            <slot name="alertText" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="lock(), (alert = false)">
              {{ $t("general.ok") }}
            </v-btn>
            <v-btn @click="alert = false" class="ml-3">
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
    name: "lockConfMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      lock() {
        return this.$emit("lock");
      },
    },
  };
</script>
