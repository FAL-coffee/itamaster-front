<template>
  <div style="display: flex; justify-content: space-between;">
    <roundedButton :text="$t('general.signin')" @btnClick="$emit('signin')" />
    <roundedButton :text="$t('general.signup')" @btnClick="$emit('signup')" />
  </div>
</template>

<script>
  import roundedButton from "@molecules/Common/RoundedButton";
  export default {
    name: "accessButtons",
    components: {
      roundedButton,
    },
  };
</script>
