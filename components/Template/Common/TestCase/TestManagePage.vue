<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3" class="pb-15">
          <v-card-title class="justify-center">
            {{ $t("template.test_manage_page.page_explanation") }}
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            {{ $t("template.test_manage_page.writer_explanation") }}
            <br />
            {{ $t("template.test_manage_page.remarks") }}
          </v-card-subtitle>
          <testCaseTable
            class="ma-10 pb-5"
            :user="user"
            :testCases="testCases"
            :persons="persons"
            @save="testCaseSave"
            @destroy="testCaseDestroy"
            @profile="profile"
            @sortMode="sortMode"
          />
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>
<script>
  import testCaseTable from "@organisms/TestCase/TestCaseTable.vue";
  export default {
    name: "testManagePage",
    data() {
      return {};
    },
    components: {
      testCaseTable,
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          writer: false,
        }),
      },
      testCases: {
        type: Array,
        require: true,
        default: () => [],
      },
      persons: {
        type: Array,
        require: false,
        default: () => [],
      },
    },
    methods: {
      testCaseSave(data) {
        return this.$emit("testCaseSave", data);
      },
      testCaseDestroy(userId) {
        return this.$emit("testCaseDestroy", userId);
      },
      // sortingConfirm(sorted){
      //     return this.$emit("sortingConfirm",sorted)
      // },
      profile(userId) {
        return this.$emit("profile", userId);
      },
      sortMode() {
        return this.$emit("sortMode");
      },
    },
  };
</script>
