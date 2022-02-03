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
          color="blue-grey darken-4"
          dark
          style="margin-bottom: 0px;"
          border="top"
          icon="mdi-alert-circle-outline"
          transition="scale-transition"
        >
          <v-card-text>
            {{
              $t(
                "molecules.msg.cannot_project_deleted_message.conditions_that_can_be_deleted"
              )
            }}
            <br />
            ・{{
              $t(
                "molecules.msg.cannot_project_deleted_message.conditions_no_testsuite"
              )
            }}
            <br />
            ・{{
              $t(
                "molecules.msg.cannot_project_deleted_message.conditions_all_complete"
              )
            }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" @click="alert = false" class="ml-3">
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
    name: "cannotDeletedMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {},
  };
</script>
