<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="alert" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          dark
          fab
          color="pink"
          small
          elevation="0"
        >
          <v-icon small dark>mdi-plus</v-icon>
        </v-btn>
      </template>
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
              {{
                $t(
                  "molecules.msg.only_paid_member_available_message.team_create_is_only_paid_member_available"
                )
              }}
            </div>
          </v-card-title>
          <v-card-text>
            {{
              $t(
                "molecules.msg.only_paid_member_available_message.from_the_link_on_header"
              )
            }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn plain class="ml-3" @click="alert = false">
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
    name: "onlyPaidMemberAvailableMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {},
  };
</script>
