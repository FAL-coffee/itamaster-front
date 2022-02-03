<template>
  <v-card elevation="4" max-width="600">
    <v-card-title>
      <v-img
        class="white--text align-end"
        style="filter: blur(0.6px);"
        height="200px"
        :src="userData.bgImg"
      >
        <v-card-title class="mb-3"
          >{{ userData.name }}'s<br />Profile Card</v-card-title
        >
      </v-img>
    </v-card-title>

    <v-card-subtitle class="text-center">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <iconRegisterModal :user="userData" @save="iconSave" />
          </div>
        </template>
        <span>
          {{ $t("organisms.user.card.profile_register_card.icon_edit") }}
        </span>
      </v-tooltip>
    </v-card-subtitle>

    <v-card-text class="text-center mt-4">
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

      <div>
        <v-divider class="mb-3"></v-divider>
        {{ $t("general.email") }}
        <p class="title">{{ userData.email }}</p>
      </div>

      <div>
        <v-divider class="mb-3"></v-divider>
        {{ $t("general.message") }}
        <v-form>
          <v-textarea
            v-model="messages"
            :label="$t('general.message')"
            counter="300"
            :rules="messageRules"
            filled
          ></v-textarea>
        </v-form>
      </div>
      <v-divider></v-divider>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="disabled" color="primary" @click="save()" class="ml-3">
        {{ $t("general.save") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import iconRegisterModal from "@organisms/User/Modal/IconRegisterModal.vue";
  export default {
    name: "profileRegisterCard",
    components: {
      iconRegisterModal,
    },
    data() {
      return {
        disabled: true,
        nameValid: false,
        messageValid: false,
        nameRules: [
          (v) => !!v || this.$t("general.input_alert_msg.required"),
          (v) =>
            (v && v.length <= 20) ||
            this.$t("general.input_alert_msg.less_than_20"),
        ],
        messageRules: [
          (v) =>
            v.length <= 300 || this.$t("general.input_alert_msg.less_than_300"),
        ],
        userData: {
          id: 1,
          initials: "UR",
          name: "user",
          email: "user@Itamaster.co.jp",
          color: "blue",
          simpleIcon: false,
          // bgImg:'',
          iconImg: "",
          message: "this is message",
        },
        img: [
          require("@/assets/UserBgImg/UserBgImg01.jpg"),
          require("@/assets/UserBgImg/UserBgImg02.jpg"),
          require("@/assets/UserBgImg/UserBgImg03.jpg"),
          require("@/assets/UserBgImg/UserBgImg04.jpg"),
          require("@/assets/UserBgImg/UserBgImg05.jpg"),
          require("@/assets/UserBgImg/UserBgImg06.jpg"),
        ],
      };
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          initials: "",
          email: "",
          color: "",
          simpleIcon: false,
          bgImg: "",
          iconImg: "",
          message: "",
        }),
      },
    },
    computed: {
      names: {
        get() {
          return this.$data.userData.name;
        },
        set(v) {
          this.$set(this.$data.userData, "name", v);
          this.$data.nameValid = v && v.length <= 20;
          if (this.$data.nameValid && this.$data.messageValid)
            this.$data.disabled = false;
          if (!this.$data.nameValid || !this.$data.messageValid)
            this.$data.disabled = true;
        },
      },
      messages: {
        get() {
          return this.$data.userData.message;
        },
        set(v) {
          this.$set(this.$data.userData, "message", v);
          this.$data.messageValid = v.length <= 300;
          if (this.$data.nameValid && this.$data.messageValid)
            this.$data.disabled = false;
          if (!this.$data.nameValid || !this.$data.messageValid)
            this.$data.disabled = true;
        },
      },
    },
    mounted() {
      this.$set(this.$data.userData, "id", this.$props.user.id);
      this.$set(this.$data.userData, "name", this.$props.user.name);
      this.$set(this.$data.userData, "email", this.$props.user.email);
      this.$set(this.$data.userData, "initials", this.$props.user.initials);
      this.$set(this.$data.userData, "simpleIcon", this.$props.user.simpleIcon);
      this.$set(this.$data.userData, "color", this.$props.user.color);
      this.$set(this.$data.userData, "iconImg", this.$props.user.iconImg);
      this.$set(
        this.$data.userData,
        "bgImg",
        this.$data.img[Math.floor(Math.random() * this.$data.img.length)]
      );
      // this.$set(this.$data.userData,'bgImg',this.$props.user.bgImg===''?
      //     this.$data.img[Math.floor(Math.random() * this.$data.img.length)]:this.$props.user.bgImg)
      this.$set(this.$data.userData, "message", this.$props.user.message);
      if (this.$data.userData.id > 0) {
        this.$data.nameValid = true;
        this.$data.messageValid = true;
      }
    },
    methods: {
      iconSave(data) {
        this.$set(this.$data.userData, "initials", data.initials);
        this.$set(this.$data.userData, "simpleIcon", data.simpleIcon);
        this.$set(this.$data.userData, "color", data.color);
        this.$set(this.$data.userData, "iconImg", data.iconImg);
        if (this.$data.nameValid && this.$data.messageValid)
          this.$data.disabled = false;
        if (!this.$data.nameValid || !this.$data.messageValid)
          this.$data.disabled = true;
      },
      save() {
        return this.$emit("profileSave", {
          name: this.$data.userData.name,
          initials: this.$data.userData.initials,
          simpleIcon: this.$data.userData.simpleIcon,
          color: this.$data.userData.color,
          iconImg: this.$data.userData.iconImg.url,
          message: this.$data.userData.message,
        });
      },
    },
  };
</script>
