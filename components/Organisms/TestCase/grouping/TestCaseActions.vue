<template>
  <div>
    <testCaseInfoModal
      :testCase="testCase"
      :persons="persons"
      @profile="profile"
    />
    <testCaseEditModal
      v-if="user.writer"
      edit
      :user="user"
      :testCase="testCase"
      :persons="persons"
      @save="save"
      @destroy="destroy"
    />
    <v-btn v-else-if="!user.writer" fab small elevation="0" disabled>
      <v-icon small dark>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>
<script>
  import testCaseEditModal from "@organisms/TestCase/Modal/TestCaseEditModal.vue";
  import testCaseInfoModal from "@organisms/TestCase/Modal/TestCaseInfoModal.vue";
  export default {
    name: "testCaseActions",
    components: {
      testCaseEditModal,
      testCaseInfoModal,
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
      testCase: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          order: 0,
          status: "notRunning",
          title: "testcase",
          createrId: 0,
          lastEditorId: 0,
          testerId: 0,
          importance: 1,
          prerequisites: [],
          process: [],
          expect: [],
          testLogs: [],
        }),
      },
      persons: {
        type: Array,
        require: false,
        default: () => [],
      },
    },
    computed: {},
    methods: {
      save(data) {
        return this.$emit("save", data);
      },
      destroy(id) {
        return this.$emit("destroy", id);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
    },
  };
</script>
