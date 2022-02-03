<template>
  <v-dialog width="500" persistent v-model="error.displayFlag">
    <v-card>
      <v-alert
        color="yellow darken-4"
        dark
        style="margin-bottom: 0px;"
        border="top"
        icon="mdi-alert-circle-outline"
        transition="scale-transition"
      >
        <v-card-title>
          <div>
            {{ $t("molecules.msg.alert_message.error_message.msg_title") }}
          </div>
        </v-card-title>
        <v-card-text>
          <div v-for="(message, i) in error.messages" :key="i">
            {{ message }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn plain @click="$emit('readed')" class="ml-3">
            {{ $t("general.ok") }}
          </v-btn>
        </v-card-actions>
      </v-alert>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: "errorMessage",
    data() {
      return {};
    },
    props: {
      error: {
        type: Object,
        require: false,
        default: () => ({
          displayFlag: false,
          status: "success",
          messages: [],
        }),
      },
    },
  };
</script>
