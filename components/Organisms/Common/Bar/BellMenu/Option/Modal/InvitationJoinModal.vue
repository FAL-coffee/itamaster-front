<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <!-- @click="$emit('join',invitation.id)" -->
        <v-btn
          color="accent"
          icon
          v-bind="attrs"
          v-on="on"
          @click="seacretWord = ''"
        >
          <v-icon dark>mdi-circle-double</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{
            $t(
              "organisms.common.bar.app_header.bell_menu.option.modal.invitation_join_modal.modal_name"
            )
          }}
          <v-spacer></v-spacer>
          <v-btn
            elevation="0"
            fab
            color="transparent"
            small
            @click="dialog = false"
          >
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        {{
          $t(
            "organisms.common.bar.app_header.bell_menu.option.modal.invitation_join_modal.please_enter_secret_word"
          )
        }}
        <v-card-text class="pt-3">
          {{ $t("general.seacret_word") }}
          <v-form>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              value="Pa"
              @click:append="show = !show"
              v-if="dialog"
              v-model="seacretWords"
              counter="20"
              :rules="seacretWordRules"
              :label="$t('general.seacret_word')"
              filled
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="save(), (dialog = false)"
            class="ml-3"
          >
            {{ $t("general.save") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: "invitationJoinModal",
    components: {},
    data() {
      return {
        show: false,
        dialog: false,
        disabled: true,
        seacretWordRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 20) ||
            this.$t("general.input_alert_msg.less_than_20"),
        ],
        seacretWord: "",
      };
    },
    props: {
      invitation: {
        type: Object,
        require: false,
        default: () => ({ id: 0, teamName: "", teamId: "", adminUser: {} }),
      },
    },
    computed: {
      seacretWords: {
        get() {
          return this.$data.seacretWord;
        },
        set(v) {
          this.$data.seacretWord = v;
          this.disabledCheck();
        },
      },
    },
    methods: {
      disabledCheck() {
        this.$data.disabled = !(
          !!this.$data.seacretWord && this.$data.seacretWord.length <= 20
        );
      },
      save() {
        return this.$emit("join", {
          id: this.invitation.id,
          keyword: this.$data.seacretWord,
        });
      },
    },
  };
</script>
