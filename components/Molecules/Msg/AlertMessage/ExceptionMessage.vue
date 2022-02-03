<template>
  <v-dialog width="500" persistent v-model="error.displayFlag">
    <v-card>
      <v-alert
        color="error"
        dark
        style="margin-bottom: 0px;"
        border="top"
        icon="mdi-alert-circle-outline"
        transition="scale-transition"
      >
        <v-card-title>
          <div>
            {{ $t("molecules.msg.alert_message.exception_message.msg_title") }}
          </div>
        </v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-icon dark>mdi-emoticon-sad-outline</v-icon>
          </div>
          <br />
          <div>
            {{
              $t(
                "molecules.msg.alert_message.exception_message.cause_unknown_communication_error"
              )
            }}
          </div>
          <div>
            {{
              $t(
                "molecules.msg.alert_message.exception_message.please_agein_signin"
              )
            }}
          </div>
          <div>
            <v-btn color="pink" @click="toTop" class="ml-3">
              {{ $t("general.signout") }}
            </v-btn>
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
    name: "exceptionMessage",
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
    methods: {
      toTop() {
        window.location.href = "/";
      },
    },
  };
</script>
