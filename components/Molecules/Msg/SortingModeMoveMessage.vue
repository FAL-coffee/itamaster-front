<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="alert" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          elevation="0"
          color="cyan"
          dark
          @click="alert = !alert"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" small dark
                >mdi-order-numeric-ascending</v-icon
              >
            </template>
            <span>{{
              $t("molecules.msg.sorting_mode_move_message.move_sort_mode")
            }}</span>
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
                $t(
                  "molecules.msg.sorting_mode_move_message.move_sort_mode_conf"
                )
              }}
            </div>
            <div>
              {{
                $t(
                  "molecules.msg.sorting_mode_move_message.dragging_and_dropping_can_change_sort_order"
                )
              }}
            </div>
            <div>
              ※
              {{
                $t("molecules.msg.sorting_mode_move_message.yet_implemented")
              }}
            </div>
            <div>
              {{
                $t("molecules.msg.sorting_mode_move_message.hurry_implemented")
              }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="sortMode(), (alert = false)">
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
    name: "sortingModeMoveMessage",
    data() {
      return {
        alert: false,
      };
    },
    methods: {
      sortMode() {
        return this.$emit("sortMode");
      },
    },
  };
</script>
