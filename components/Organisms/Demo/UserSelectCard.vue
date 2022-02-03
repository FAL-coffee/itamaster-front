<template>
  <v-btn width="300" height="400" @click="$emit('userSelect', user.id)">
    <v-card elevation="6" width="300" height="400" color="blue-grey lighten-5">
      <v-card-subtitle class="text-center">
        <div style="margin-top: 75px;">
          <userIcon size="x-large" :user="user" />
        </div>
        <v-divider style="margin-top: 90px;" />
      </v-card-subtitle>
      <v-card-text class="text-center mt-7">
        <div class="text-h4">「{{ user.name }}」</div>
        <div class="text-h6">
          {{ $t("organisms.demo.user_select_card.start") }}
        </div>
      </v-card-text>
    </v-card>
  </v-btn>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  export default {
    name: "userSelectCard",
    components: {
      userIcon,
    },
    data() {
      return {
        img: [require("@/assets/UserBgImg/UserBgImg01.jpg")],
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
          iconImg: "",
          message: "",
        }),
      },
    },
  };
</script>
