<template>
  <div>
    <goTestCaseSelectModal
      :testSuite="testSuite"
      @testSuiteOpen="testSuiteOpen"
    />
    <testSuiteInfoModal
      :testSuite="testSuite"
      :persons="persons"
      @profile="profile"
    />
    <testSuiteEditModal
      v-if="testSuite.auth"
      :testSuite="testSuite"
      :persons="persons"
      :user="user"
      @save="save"
      @destroy="destroy"
    />
    <v-btn v-else-if="!testSuite.auth" fab small elevation="0" disabled>
      <v-icon small dark>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>
<script>
  import goTestCaseSelectModal from "@organisms/TestSuite/GoTestCaseSelectModal.vue";
  import testSuiteEditModal from "@organisms/TestSuite/TestSuiteEditModal.vue";
  import testSuiteInfoModal from "@organisms/TestSuite/TestSuiteInfoModal.vue";
  export default {
    name: "testSuiteActions",
    components: {
      goTestCaseSelectModal,
      testSuiteEditModal,
      testSuiteInfoModal,
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          role: false,
        }),
      },
      testSuite: {
        type: Object,
        require: true,
        default: () => ({}),
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
      testSuiteOpen(choise) {
        return this.$emit("testSuiteOpen", [choise, this.$props.testSuite.id]);
      },
    },
  };
</script>
