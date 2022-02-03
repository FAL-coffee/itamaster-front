<template>
  <v-btn icon @click="$emit('iconClick')">
    <v-avatar v-if="userData.simpleIcon" :color="userData.color" :size="Size">
      <span class="white--text" :class="Classes">{{ userData.initials }}</span>
    </v-avatar>
    <v-avatar v-else-if="!userData.simpleIcon" :size="Size">
      <v-img :src="userData.iconImg" />
    </v-avatar>
  </v-btn>
</template>
<script>
  export default {
    name: "userIcon",
    data() {
      return {};
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
          iconImg: { url: "" },
          message: "",
        }),
      },
      size: {
        type: String,
        require: false,
        default: "default",
      },
    },
    mounted() {},
    computed: {
      userData() {
        let userData = {};
        this.$set(userData, "initials", this.$props.user.initials);
        this.$set(userData, "simpleIcon", this.$props.user.simpleIcon);
        this.$set(userData, "color", this.$props.user.color);
        this.$set(
          userData,
          "iconImg",
          this.$props.user.iconImg.url === "" ||
            this.$props.user.iconImg.url === null ||
            this.$props.user.iconImg.url === undefined
            ? require("@/assets/UserIconSample/UserIconImg01.jpg")
            : this.getDomain(this.$props.user.iconImg.url) +
                this.$props.user.iconImg.url
        );
        // console.log(userData.iconImg)
        return userData;
      },
      Size() {
        return [25, 32, 56, 80, 186][
          ["x-small", "small", "midium", "large", "x-large"].indexOf(
            this.$props.size
          )
        ];
      },
      Classes() {
        return ["", "", "headline", "display-1", "text-h1"][
          ["x-small", "small", "midium", "large", "x-large"].indexOf(
            this.$props.size
          )
        ];
      },
    },
    methods: {
      getDomain(v) {
        const domain = "";
        return domain;
      },
    },
  };
</script>
