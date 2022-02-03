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
          color="green"
          dark
          @click="alert = !alert"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" small dark
                >mdi-send-outline</v-icon
              >
            </template>
            <span>Test completed</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-card>
        <v-alert
          :value="alert"
          color="accent"
          style="margin-bottom: 0px;"
          border="top"
          transition="scale-transition"
        >
          <v-card-text>
            <div>
              {{
                $t("molecules.msg.completion_conf_message.test_completion_conf")
              }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="completion(), (alert = false)">
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
    name: "completionConfMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      completion() {
        return this.$emit("completion");
      },
    },
  };
</script>
