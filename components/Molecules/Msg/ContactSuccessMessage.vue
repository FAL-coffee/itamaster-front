<template>
  <div class="text-center">
    <v-dialog v-model="alert" width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="primary" @click="alert = !alert">
          {{ $t("general.confirm") }}
        </v-btn>
      </template>
      <v-card>
        <v-alert
          :value="alert"
          color="accent"
          dark
          style="margin-bottom: 0px;"
          border="top"
          transition="scale-transition"
        >
          <v-card-title>
            {{ $t("molecules.msg.contact_success_message.thank_you") }}
          </v-card-title>
          <v-card-text>
            {{ $t("molecules.msg.contact_success_message.send_the_contact") }}
            <br />
            {{ $t("molecules.msg.contact_success_message.questions_support") }}
            <br />
            {{
              $t(
                "molecules.msg.contact_success_message.message_and_request_support"
              )
            }}
            <br />
            {{
              $t("molecules.msg.contact_success_message.improved_commitment")
            }}
            <br />
            {{
              $t(
                "molecules.msg.contact_success_message.best_regards_from_now_on"
              )
            }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="ok()" class="ml-3">
              {{ $t("general.ok") }}
            </v-btn>
          </v-card-actions>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: "contactSuccessMessage",
    data() {
      return {
        alert: false,
      };
    },
    props: {},
    methods: {
      ok() {
        this.$data.alert = false;
        return this.$emit("read");
      },
    },
  };
</script>
