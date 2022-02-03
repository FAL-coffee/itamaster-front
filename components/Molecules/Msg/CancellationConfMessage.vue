<template>
  <div class="text-center">
    <v-dialog v-model="alert" width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block
          v-bind="attrs"
          v-on="on"
          color="error"
          @click="alert = !alert"
        >
          {{ $t("general.terminate_procedure") }}
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
              {{
                $t("molecules.msg.cancellation_conf_message.cancellation_conf")
              }}
            </div>
            <div small>
              ※
              {{
                $t(
                  "molecules.msg.cancellation_conf_message.valid_until_deadline"
                )
              }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="terminateClick(), (alert = false)">
              {{ $t("general.terminate") }}
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
    name: "cancellationConfMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      terminateClick() {
        return this.$emit("terminateClick");
      },
    },
  };
</script>
