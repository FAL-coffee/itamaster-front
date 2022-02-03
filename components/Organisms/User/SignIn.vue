<template>
  <v-card elevation="4" max-width="600">
    <v-card-title>
      {{ $t("general.signin") }}
    </v-card-title>

    <v-card-text class="pt-3">
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
            filled
            required
          ></v-text-field>
        </v-form>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="disabled" color="primary" @click="login()" class="ml-3">
        {{ $t("general.signin") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "signIn",
    components: {},
    data() {
      return {
        confirmData: {
          email: "",
          password: "",
        },
        disabled: true,
        emailValid: false,
        passwordValid: false,
        show: false,
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
    },
    mounted() {
      this.$data.confirmData = {
        email: "",
        password: "",
      };
      this.$data.emailValid = false;
      this.$data.passwordValid = false;
      this.$data.disabled = true;
    },
    methods: {
      validCheck() {
        this.$data.disabled =
          !this.$data.emailValid || !this.$data.passwordValid;
      },
      login() {
        return this.$emit("signin", this.$data.confirmData);
      },
    },
  };
</script>
