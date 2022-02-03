<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          small
          elevation="0"
          color="green lighten-2"
          dark
        >
          <v-icon small dark>mdi-book-open-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ $t("organisms.testsuite.go_testcase_select_modal.show_testcase") }}
          <v-spacer></v-spacer>
          <v-btn
            elevation="0"
            fab
            color="transparent"
            small
            @click="dialog = false"
          >
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-btn class="mt-5" block @click="run()">
            {{ $t("organisms.testsuite.go_testcase_select_modal.run") }}
          </v-btn>
          <v-btn class="mt-5" block @click="manage()">
            {{ $t("organisms.testsuite.go_testcase_select_modal.manage") }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: "goTestCaseSelectModal",
    data() {
      return {
        dialog: false,
      };
    },
    components: {},
    props: {
      testSuite: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          title: "",
          remarks: "",
          createrId: 0,
          steps: 0,
          writers: [],
          steps: 0,
          testcase: 0,
          complete: 0,
          retest: 0,
          issue: 0,
        }),
      },
    },
    methods: {
      manage() {
        this.$data.dialog = false;
        return this.$emit("testSuiteOpen", "manage");
      },
      run() {
        this.$data.dialog = false;
        return this.$emit("testSuiteOpen", "run");
      },
    },
  };
</script>
