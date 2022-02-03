<template>
  <div>
    <testCaseEditModal
      class="mt-3 mb-3 mr-5"
      :edit="false"
      :user="user"
      :auth="true"
      :persons="persons"
      @save="save"
    />
    <sortingModeMoveMessage @sortMode="sortMode" />
  </div>
</template>
<script>
  import testCaseEditModal from "@organisms/TestCase/Modal/TestCaseEditModal.vue";
  import sortingModeMoveMessage from "@molecules/Msg/SortingModeMoveMessage.vue";
  export default {
    name: "testCaseFooterActions",
    components: {
      testCaseEditModal,
      sortingModeMoveMessage,
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
      sortMode() {
        return this.$emit("sortMode");
      },
    },
  };
</script>
