<template>
  <v-card elevation="5">
    <v-card-title>
      <v-row>
        <v-col cols="1">
          <v-skeleton-loader
            v-if="user.invitation"
            max-width="50"
            type="avatar"
          />
          <userIcon v-else size="midium" :user="user" />
        </v-col>
        <v-col cols="10">
          <p>{{ $t("general.email") }}：{{ user.email }}</p>
        </v-col>
        <v-col cols="1">
          <slot name="status" />
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-subtitle class="">
      <v-row>
        <v-col cols="1"> </v-col>
        <v-col cols="10">
          <p v-if="!user.invitation">
            {{ $t("general.name") }}：{{ user.name }}
          </p>
        </v-col>
        <v-col cols="1">
          <slot name="actions" />
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  export default {
    name: "memberCard",
    components: {
      userIcon,
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
          bgImg: "",
          iconImg: "",
          message: "",
          invitation: false,
        }),
      },
    },
    computed: {},
  };
</script>
