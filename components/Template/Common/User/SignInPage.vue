<template>
  <div>
    <v-row>
      <v-col cols="12" lg="3" md="2" sm="1" xl="4"></v-col>
      <v-col cols="12" lg="6" md="8" sm="10" xl="4">
        <signIn @signin="signInConfirm" />
      </v-col>
      <v-col cols="12" lg="3" md="2" sm="1" xl="4"></v-col>
    </v-row>
  </div>
</template>
<script>
  import signIn from "@organisms/User/SignIn.vue";
  export default {
    name: "signInPage",
    data() {
      return {};
    },
    components: {
      signIn,
    },
    props: {},
    methods: {
      signInConfirm(data) {
        return this.$emit("signInConfirm", data);
      },
    },
  };
</script>
