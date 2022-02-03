<template>
  <v-dialog v-model="api" width="160" persistent>
    <v-card height="150" class="text-center" elevation="1">
      <div style="height: 5%;"></div>
      <v-progress-circular
        class="mt-5"
        indeterminate
        :size="80"
        :width="6"
        color="primary"
      />
      <div style="height: 5%;" class="mt-3">
        {{ $t("molecules.common.loading_progress_circle.loading") }}
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: "loadingProgressCircle",
    data() {
      return {};
    },
    props: {
      api: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
  };
</script>
