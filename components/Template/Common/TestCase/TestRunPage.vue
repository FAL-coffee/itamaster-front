<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3">
          <v-card-title class="justify-center">
            {{ $t("template.test_run_page.page_explanation") }}
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            <div v-show="testCases.length != 0">
              {{ $t("template.test_run_page.test_run_process") }}
              <br />
              {{ $t("template.test_run_page.future_expect") }}
            </div>
            <div v-show="testCases.length === 0">
              {{ $t("template.test_run_page.testcase_is_cannot_found") }}
              <br />
              {{ $t("template.test_run_page.please_data_reload") }}
            </div>
          </v-card-subtitle>
          <runningTestCaseList
            :user="user"
            :testCases="testCases"
            :locked="locked"
            @lock="lock"
            @unlock="unlock"
            @completion="completion"
          />
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>
<script>
  import runningTestCaseList from "@organisms/TestCase/RunningTestCaseList.vue";
  export default {
    name: "testRunPage",
    data() {
      return {};
    },
    components: {
      runningTestCaseList,
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
      testCases: {
        type: Array,
        require: true,
        default: () => [],
      },
      locked: {
        type: Boolean,
        require: true,
        default: true,
      },
    },
    methods: {
      lock(userId) {
        return this.$emit("lock", [
          userId,
          this.$props.testCases.map((obj) => obj.id),
        ]);
      },
      unlock() {
        return this.$emit(
          "unlock",
          this.$props.testCases.map((obj) => obj.id)
        );
      },
      completion(data) {
        return this.$emit("completion", data);
      },
    },
  };
</script>
