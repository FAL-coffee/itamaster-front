<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <userIcon :user="user" size="small" />
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto mt-3 text-center">
          <userIcon :user="user" size="midium" />

          <h3 class="mt-3">{{ user.name }}</h3>
          <p class="caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click="profileLinkClick">
            {{ $t("general.profile") }}
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  export default {
    name: "userInfoModal",
    data() {
      return {};
    },
    components: {
      userIcon,
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
          // bgImg:'',
          iconImg: { url: null },
          message: "",
        }),
      },
    },
    methods: {
      profileLinkClick() {
        return this.$emit("profile", this.$props.user.id);
      },
    },
  };
</script>
