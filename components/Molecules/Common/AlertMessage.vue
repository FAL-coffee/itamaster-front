<template>
  <div v-if="error.displayFlag">
    <errorMessage
      :error="error"
      @readed="$emit('readed')"
      v-if="error.status === 'error'"
    />
    <exceptionMessage
      :error="error"
      @readed="$emit('readed')"
      v-if="error.status === 'exception'"
    />
  </div>
</template>
<script>
  import errorMessage from "@molecules/Msg/AlertMessage/ErrorMessage.vue";
  import exceptionMessage from "@molecules/Msg/AlertMessage/ExceptionMessage.vue";
  export default {
    name: "alertMessage",
    components: {
      errorMessage,
      exceptionMessage,
    },
    data() {
      return {};
    },
    props: {
      error: {
        type: Object,
        require: false,
        default: () => ({
          displayFlag: false,
          status: "success",
          messages: [],
        }),
      },
    },
  };
</script>
