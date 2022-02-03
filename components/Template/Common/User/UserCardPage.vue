<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <profileCard :user="browsingUser" />
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </div>
</template>
<script>
  import profileCard from "@organisms/User/Card/ProfileCard.vue";
  export default {
    name: "userCardPage",
    data() {
      return {};
    },
    components: {
      profileCard,
    },
    props: {
      browsingUser: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          writer: false,
        }),
      },
    },
    methods: {},
  };
</script>
