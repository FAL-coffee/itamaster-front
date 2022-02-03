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
      <userIcon size="large" :user="userData" />
    </v-card-subtitle>

    <v-card-text class="text-center mt-4">
      {{ $t("general.name") }}
      <p class="display-1">{{ userData.name }}</p>

      <div>
        <v-divider class="mb-3"></v-divider>
        {{ $t("general.email") }}
        <p class="title">{{ userData.email }}</p>
      </div>

      <div v-if="userData.message != ''">
        <v-divider class="mb-3"></v-divider>
        <span style="white-space: pre-line;">{{ $t("general.message") }}</span>
        <p class="subtitle-1 mt-3">{{ userData.message }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  export default {
    name: "profileCard",
    components: {
      userIcon,
    },
    data() {
      return {
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
          id: 1,
          name: "user",
          initials: "UR",
          email: "user@Itamaster.co.jp",
          color: "brown",
          simpleIcon: false,
          // bgImg:'',
          iconImg: "",
          message: "",
        }),
      },
    },
    computed: {
      userData() {
        let userData = {};
        this.$set(userData, "id", this.$props.user.id);
        this.$set(userData, "name", this.$props.user.name);
        this.$set(userData, "email", this.$props.user.email);
        this.$set(userData, "initials", this.$props.user.initials);
        this.$set(userData, "simpleIcon", this.$props.user.simpleIcon);
        this.$set(userData, "color", this.$props.user.color);
        this.$set(userData, "iconImg", this.$props.user.iconImg);
        this.$set(
          userData,
          "bgImg",
          this.$data.img[Math.floor(Math.random() * this.$data.img.length)]
        );
        // this.$set(userData,'bgImg',this.$props.user.bgImg===''?
        //     this.$data.img[Math.floor(Math.random() * this.$data.img.length)]:this.$props.user.bgImg)
        this.$set(userData, "message", this.$props.user.message);
        return userData;
      },
    },
  };
</script>
