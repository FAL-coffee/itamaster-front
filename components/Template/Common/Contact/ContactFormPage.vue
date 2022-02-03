<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <contactForm @confirm="confirm" />
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
  import contactForm from "@organisms/Common/ContactForm/ContactForm.vue";
  export default {
    name: "contactFormPage",
    data() {
      return {};
    },
    components: {
      contactForm,
    },
    props: {},
    methods: {
      confirm(data) {
        return this.$emit("confirm", data);
      },
    },
  };
</script>
