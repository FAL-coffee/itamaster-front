<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <profileRegisterCard :user="user" @profileSave="profileSave" />
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </div>
</template>
<script>
  import profileRegisterCard from "@organisms/User/Card/ProfileRegisterCard.vue";
  export default {
    name: "userRegisterPage",
    data() {
      return {};
    },
    components: {
      profileRegisterCard,
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
    },
    methods: {
      profileSave(data) {
        return this.$emit("profileSave", data);
      },
    },
  };
</script>
