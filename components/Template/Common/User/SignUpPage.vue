<template>
  <div>
    <v-row class="mt-5 mb-5 justify-center">
      <v-col cols="12" lg="1" md="1" sm="0"></v-col>
      <v-col cols="12" lg="10" md="10" sm="12">
        <signUp
          @signup="signUpConfirm"
          @toPrivacyPolicy="$emit('toPrivacyPolicy')"
          @toTerms="$emit('toTerms')"
          @toSpecifiedNotation="$emit('toSpecifiedNotation')"
        />
      </v-col>
      <v-col cols="12" lg="10" md="1" sm="0"></v-col>
    </v-row>
  </div>
</template>
<script>
  import signUp from "@organisms/User/SignUp.vue";
  export default {
    name: "signUpPage",
    components: {
      signUp,
    },
    props: {},
    methods: {
      signUpConfirm(data) {
        return this.$emit("signUpConfirm", data);
      },
    },
  };
</script>
