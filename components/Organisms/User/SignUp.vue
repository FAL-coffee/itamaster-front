<template>
  <!-- <v-card elevation="4" max-width="750"> -->
  <v-card elevation="4">
    <v-card-title>
      {{ $t("general.signup") }}
    </v-card-title>

    <v-card-text class="pt-3">
      {{ $t("general.name") }}
      <v-form>
        <v-text-field
          class=""
          v-model="names"
          counter="20"
          :rules="nameRules"
          :label="$t('general.name')"
          filled
          required
        ></v-text-field>
      </v-form>

      {{ $t("general.email") }}
      <v-form>
        <v-text-field
          class=""
          v-model="emails"
          counter="60"
          :rules="emailRules"
          :label="$t('general.email')"
          filled
          required
        ></v-text-field>
      </v-form>

      <div>
        {{ $t("general.password") }}
        <v-form>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            :label="$t('general.password')"
            value="Pa"
            counter="80"
            @click:append="show = !show"
            v-model="password"
            color="accent"
            :error-messages="errorMessage"
            filled
            required
          ></v-text-field>
        </v-form>

        {{ $t("general.password") }}：{{
          $t("general.enter_agein_for_confirmation")
        }}
        <v-form>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            :label="
              $t('general.password') +
              '(' +
              $t('general.enter_agein_for_confirmation') +
              ')'
            "
            value="Pa"
            counter="80"
            @click:append="show2 = !show2"
            v-model="password2"
            color="accent"
            :error-messages="errorMessage"
            filled
            required
          ></v-text-field>
        </v-form>
      </div>

      <div v-for="(document, i) in documents" :key="i">
        <linkBtn
          icon="mdi-arrow-right-bold-outline"
          :text="document.documentName"
          @linkClick="$emit(document.eventName)"
        />
      </div>

      <div>
        <v-checkbox v-model="agreeSwitch">
          <template slot="label">
            {{ $t("organisms.user.sign_up.agree_term_and_conditions") }}
          </template>
        </v-checkbox>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="disabled"
        color="primary"
        @click="signup()"
        class="ml-3"
      >
        {{ $t("general.signup") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  export default {
    name: "signUp",
    components: {
      linkBtn,
    },
    data() {
      return {
        confirmData: {
          name: "",
          email: "",
          password: "",
          password2: "",
          simpleIcon: true,
          color: "",
          // bgImg:"",
          message: "",
        },
        documents: [
          {
            eventName: "toPrivacyPolicy",
            documentName: this.$t("organisms.common.bar.app_footer.privacy"),
          },
          {
            eventName: "toTerms",
            documentName: this.$t("organisms.common.bar.app_footer.terms"),
          },
          {
            eventName: "toSpecifiedNotation",
            documentName: this.$t(
              "organisms.common.bar.app_footer.specified_commodity_transaction_law_notation"
            ),
          },
        ],
        agree: false,
        disabled: true,
        nameValid: false,
        emailValid: false,
        passwordValid: false,
        password2Valid: false,
        show: false,
        show2: false,
        nameRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 20) || "Name must be less than 20 characters",
        ],
        emailRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 60) ||
            this.$t("general.input_alert_msg.less_than_60"),
          (v) =>
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
              v
            ) || this.$t("general.input_alert_msg.email_format"),
        ],
        passwordRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length >= 6) ||
            this.$t("general.input_alert_msg.more_than_6"),
          (v) =>
            (v && v.length <= 80) ||
            this.$t("general.input_alert_msg.less_than_80"),
        ],
      };
    },
    computed: {
      errorMessage() {
        if (this.$data.confirmData.password != this.$data.confirmData.password2)
          return this.$t(
            "general.input_alert_msg.password_has_not_been_entered"
          );
        else return "";
      },
      agreeSwitch: {
        get() {
          return this.$data.agree;
        },
        set(v) {
          this.$data.agree = v;
          this.validCheck();
        },
      },
      names: {
        get() {
          return this.$data.confirmData.name;
        },
        set(v) {
          this.$set(this.$data.confirmData, "name", v);
          this.$data.nameValid = !!v && v.length <= 20;
          this.validCheck();
        },
      },
      emails: {
        get() {
          return this.$data.confirmData.email;
        },
        set(v) {
          this.$set(this.$data.confirmData, "email", v);
          this.$data.emailValid =
            !!v &&
            v.length <= 60 &&
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
              v
            );
          this.validCheck();
        },
      },
      password: {
        get() {
          return this.$data.confirmData.password;
        },
        set(v) {
          this.$set(this.$data.confirmData, "password", v);
          this.$data.passwordValid = !!v && v.length <= 80 && v.length >= 6;
          this.validCheck();
        },
      },
      password2: {
        get() {
          return this.$data.confirmData.password2;
        },
        set(v) {
          this.$set(this.$data.confirmData, "password2", v);
          this.$data.password2Valid = !!v && v.length <= 80 && v.length >= 6;
          this.validCheck();
        },
      },
    },
    mounted() {
      this.$data.confirmData = {
        name: "",
        email: "",
        password: "",
        password2: "",
        // bgImg:"",
        color: ["red", "purple", "blue", "green"][
          Math.floor(Math.random() * 4)
        ],
        simpleIcon: true,
        message: "",
      };
      this.$data.nameValid = false;
      this.$data.emailValid = false;
      this.$data.passwordValid = false;
      this.$data.password2Valid = false;
      this.$data.disabled = true;
    },
    methods: {
      validCheck() {
        this.$data.disabled =
          !this.$data.nameValid ||
          !this.$data.emailValid ||
          !this.$data.passwordValid ||
          !this.$data.password2Valid ||
          this.errorMessage != "" ||
          !this.$data.agree;
      },
      signup() {
        return this.$emit("signup", this.$data.confirmData);
      },
    },
  };
</script>
