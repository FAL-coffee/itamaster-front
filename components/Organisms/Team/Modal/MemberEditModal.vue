<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <div v-if="edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="cyan"
            small
            elevation="0"
            @click="initialize"
          >
            <v-icon small dark>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div v-else-if="!edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="pink"
            small
            @click="initialize"
          >
            <v-icon small dark>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ $t("organisms.team.modal.member_edit_modal.modal_name") }}
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-3">
          {{ $t("general.email") }}
          <v-form>
            <v-text-field
              v-if="dialog"
              class=""
              v-model="emails"
              counter="60"
              :rules="mailsRules"
              :label="$t('general.email')"
              filled
              required
            ></v-text-field>
          </v-form>

          <div v-if="!edit">
            {{ $t("general.seacret_word") }}
            <v-form>
              <v-text-field
                v-if="dialog"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="seacretWordsRules"
                :type="show ? 'text' : 'password'"
                name="input-10-2"
                :label="$t('general.seacret_word')"
                value="Pa"
                counter="20"
                @click:append="show = !show"
                v-model="SeacretWords"
                color="accent"
                :error-messages="errorMessage"
                filled
                required
              ></v-text-field>
            </v-form>

            {{ $t("general.enter_agein_for_confirmation") }}
            <v-form>
              <v-text-field
                v-if="dialog"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="seacretWords2Rules"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                :label="$t('general.seacret_word')"
                value="Pa"
                counter="20"
                @click:append="show2 = !show2"
                v-model="SeacretWords2"
                color="accent"
                :error-messages="errorMessage"
                filled
                required
              ></v-text-field>
            </v-form>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="!edit" disabled>
            {{ $t("general.delete") }}
          </v-btn>
          <deleteConfMessage
            v-else-if="edit"
            @deleteClick="destroy(), close()"
          />
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="save(), close()"
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
  import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
  export default {
    name: "memberEditModal",
    components: {
      deleteConfMessage,
    },
    data() {
      return {
        dialog: false,
        show: false,
        show2: false,
        disabled: true,
        emailValid: false,
        seacretWordsValid: false,
        seacretWordsRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 20) ||
            this.$t("general.input_alert_msg.less_than_20"),
        ],
        mailsRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 60) ||
            this.$t("general.input_alert_msg.less_than_60"),
          (v) =>
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
              v
            ) || this.$t("general.input_alert_msg.email_format"),
        ],
        seacretWords2Rules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 20) ||
            this.$t("general.input_alert_msg.less_than_20"),
        ],
        editUser: { id: 0, email: "" },
        seacretWords: "",
        seacretWords2: "",
      };
    },
    props: {
      edit: {
        type: Boolean,
        require: false,
        default: false,
      },
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
    },
    computed: {
      errorMessage() {
        if (this.$data.seacretWords != this.$data.seacretWords2)
          return this.$t(
            "organisms.team.modal.member_edit_modal.seacret_words_has_not_been_entered"
          );
        else return "";
      },
      emails: {
        get() {
          return this.$data.editUser.email;
        },
        set(v) {
          this.$set(this.$data.editUser, "email", v);
          this.$data.emailValid =
            !!v &&
            v.length <= 60 &&
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
              v
            );
          this.disabledCheck();
        },
      },
      SeacretWords: {
        get() {},
        set(v) {
          this.$data.seacretWords = v;
          this.$data.seacretWordsValid =
            !!v && v.length <= 20 && v === this.$data.seacretWords2;
          this.disabledCheck();
        },
      },
      SeacretWords2: {
        get() {},
        set(v) {
          this.$data.seacretWords2 = v;
          this.$data.seacretWordsValid =
            !!v && v.length <= 20 && v === this.$data.seacretWords;
          this.disabledCheck();
        },
      },
    },
    methods: {
      close() {
        this.$data.dialog = false;
      },
      disabledCheck() {
        this.$data.disabled =
          !this.$data.emailValid || !this.$data.seacretWordsValid;
      },
      initialize() {
        if (this.$props.edit) {
          this.$set(this.$data.editUser, "id", this.$props.user.id);
          this.$set(this.$data.editUser, "email", this.$props.user.email);
          this.$data.disabled = true;
          this.$data.emailValid = true;
          this.$data.seacretWordsValid = true;
        } else if (!this.$props.edit) {
          this.$set(this.$data.editUser, "id", 0);
          this.$set(this.$data.editUser, "email", "");
          this.$data.seacretWords = "";
          this.$data.seacretWords2 = "";
          this.$data.disabled = true;
          this.$data.emailValid = false;
          this.$data.seacretWordsValid = false;
        }
      },
      save() {
        if (this.$props.edit) return this.$emit("save", this.$data.editUser);
        if (!this.$props.edit)
          return this.$emit("save", {
            email: this.$data.editUser.email,
            seacretWords: this.$data.seacretWords,
          });
      },
      destroy() {
        return this.$emit("destroy", this.$data.editUser.id);
      },
    },
  };
</script>
