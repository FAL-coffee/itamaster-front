<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="alert" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" depressed @click="alert = !alert">
          <linkBtn
            icon="mdi-arrow-right-bold-outline"
            :text="$t('general.signout')"
          />
        </v-btn>
      </template>
      <v-card>
        <v-alert
          :value="alert"
          dark
          color="pink lighten-2"
          style="margin-bottom: 0px;"
          border="top"
          transition="scale-transition"
        >
          <v-card-text>
            <div>
              {{ $t("molecules.msg.sign_out_conf_message.sign_out_conf") }}
            </div>
            <div>
              ※
              {{
                $t("molecules.msg.sign_out_conf_message.unsaved_data_discarded")
              }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="signout(), (alert = false)">
              {{ $t("general.ok") }}
            </v-btn>
            <v-btn @click="alert = false" color="primary" class="ml-3">
              {{ $t("general.cancel") }}
            </v-btn>
          </v-card-actions>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  export default {
    name: "signOutConfMessage",
    components: {
      linkBtn,
    },
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      signout() {
        return this.$emit("signout");
      },
    },
  };
</script>
