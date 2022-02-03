<template>
  <v-card elevation="4" max-width="1400">
    <v-card-title class="justify-center">
      <div style="width: 10%;"></div>
      <div style="width: 80%;" class="text-center">
        {{ $t("organisms.common.contact_form.contact_form") }}
      </div>
      <div style="width: 10%;"></div>
    </v-card-title>
    <v-card-text class="mt-4">
      <div style="width: 50%; display: inline-flex; flex-direction: column;">
        <v-select
          :items="types"
          filled
          :label="$t('organisms.common.contact_form.contact_type')"
          required
          :rules="typeRules"
          v-model="selectType"
          style="display: block;"
        ></v-select>

        <v-text-field
          class="mt-2"
          v-model="emails"
          counter="60"
          :rules="emailRules"
          :label="$t('general.email')"
          filled
          style="display: block;"
          required
        ></v-text-field>
      </div>
      <div style="width: 49%; display: inline-block; margin: 0, -50px, 0, 0;">
        <v-textarea
          v-model="contents"
          :label="$t('general.contents')"
          counter="300"
          :rules="contentRules"
          filled
          color="accent"
        ></v-textarea>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="disabled" :disabled="true" color="primary" class="ml-3">
        {{ $t("general.confirm") }}
      </v-btn>
      <contactSuccessMessage v-else-if="!disabled" @read="read" />
    </v-card-actions>
  </v-card>
</template>
<script>
  import contactSuccessMessage from "@molecules/Msg/ContactSuccessMessage.vue";
  export default {
    name: "contactForm",
    components: {
      contactSuccessMessage,
    },
    data() {
      return {
        types: [
          this.$t("organisms.common.contact_form.question"),
          this.$t("organisms.common.contact_form.request"),
          this.$t("organisms.common.contact_form.message"),
          this.$t("organisms.common.contact_form.bug_report"),
        ],
        selectedType: "",
        email: "",
        content: "",
        disabled: true,
        emailValid: false,
        typeValid: false,
        contentValid: false,
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
        typeRules: [
          (v) =>
            !!v || this.$t("organisms.common.contact_form.select_contact_type"),
        ],
        contentRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 300) ||
            this.$t("general.input_alert_msg.less_than_300"),
        ],
      };
    },
    mounted() {
      this.initialize();
    },
    computed: {
      errorMessage() {
        let errorMsg = "";
        if (this.$data.selectedType === "")
          errorMsg = this.$t(
            "organisms.common.contact_form.select_contact_type"
          );
        return errorMsg;
      },
      selectType: {
        get() {
          return this.$data.selectedType;
        },
        set(val) {
          this.$data.selectedType = val;
          this.$data.typeValid = !!val;
          this.validCheck();
        },
      },
      emails: {
        get() {
          return this.$data.email;
        },
        set(v) {
          this.$data.email = v;
          this.$data.emailValid =
            !!v &&
            v.length <= 60 &&
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(
              v
            );
          this.validCheck();
        },
      },
      contents: {
        get() {
          return this.$data.content;
        },
        set(v) {
          this.$data.content = v;
          this.$data.contentValid = !!v && v.length <= 300;
          this.validCheck();
        },
      },
    },
    methods: {
      read() {
        this.$emit("confirm", {
          title: "",
          type: this.$data.selectedType,
          email: this.$data.email,
          contents: this.$data.content,
        });
        this.initialize();
      },
      initialize() {
        this.$data.disabled = true;
      },
      validCheck() {
        this.$data.disabled =
          !this.$data.typeValid ||
          !this.$data.emailValid ||
          !this.$data.contentValid;
      },
    },
  };
</script>
