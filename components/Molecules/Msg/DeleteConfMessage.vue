<template>
  <div class="text-center">
    <v-dialog v-model="alert" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="error" @click="alert = !alert">
          {{ $t("general.delete") }}
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
            <div>{{ $t("molecules.msg.delete_conf_message.delete_conf") }}</div>
            <div small>
              ※ {{ $t("molecules.msg.delete_conf_message.unrecoverable") }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="deleteClick(), (alert = false)">
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
    name: "deleteConfMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      deleteClick() {
        return this.$emit("deleteClick");
      },
    },
  };
</script>
