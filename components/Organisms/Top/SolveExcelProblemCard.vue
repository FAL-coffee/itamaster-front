<template>
  <v-card elevation="0" class="text-center">
    <v-img
      :src="mist"
      max-width="800px"
      max-height="250px"
      style="align-items: center;"
    >
      <div class="text-lg-h4 text-md-h5 text-sm-h6">
        {{ $t("organisms.top.itamaster_is_solve_problem.itamaster_is")
        }}<br />{{ $t("organisms.top.itamaster_is_solve_problem.solve") }}
      </div>
    </v-img>
  </v-card>
</template>
<script>
  export default {
    name: "solveExcelProblemCard",
    data() {
      return {
        mist: require("@/assets/TopPage/mist.jpg"),
      };
    },
  };
</script>
