<template>
  <v-card elevation="4">
    <v-card-title>
      {{ $t("organisms.testsuite.testsuite_table.table_name") }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="propsTestSuits" :search="search">
      <template v-slot:[`item.actions`]="{ item }">
        <testSuiteActions
          :testSuite="item"
          :persons="persons"
          :user="user"
          @save="save"
          @destroy="destroy"
          @profile="profile"
          @testSuiteOpen="testSuiteOpen"
        />
      </template>
      <template v-slot:no-data> </template>
      <template v-slot:footer v-if="!user.guestFlag">
        <v-divider class="pt-1"></v-divider>
        <v-spacer></v-spacer>
        <div class="text-right">
          <testSuiteEditModal
            class="mt-3 mb-3 mr-5"
            :edit="false"
            :user="user"
            :auth="true"
            :persons="persons"
            @save="save"
          />
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
  import testSuiteActions from "@organisms/TestSuite/TestSuiteActions.vue";
  import testSuiteEditModal from "@organisms/TestSuite/TestSuiteEditModal.vue";
  export default {
    name: "testSuiteTable",
    components: {
      testSuiteActions,
      testSuiteEditModal,
    },
    data() {
      return {
        search: "",
        headers: [
          {
            text: "No",
            align: "start",
            sortable: true,
            value: "no",
          },
          {
            text: "complete/testcase (%)",
            sortable: true,
            value: "progress",
          },
          {
            text: "Test Suite Title",
            value: "title",
            sortable: false,
          },
          {
            text: "Actions",
            value: "actions",
            sortable: false,
          },
        ],
      };
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          guestFlag: true,
        }),
      },
      testSuits: {
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
    computed: {
      propsTestSuits() {
        // const propsTestSuits = this.$props.testSuits.map(function(element){
        //     element.progress = Math.round((100/element.testcase)*element.complete);
        //     if(element.testcase===0) {element.progress=0}
        //     console.log(window)
        //     // if(element.writers.includes(this.user.id) && !this.user.guestFlag) element.auth=true
        //     return element;
        // })
        let propsTestSuits = this.$props.testSuits;
        for (var i = 0; i < this.$props.testSuits.length; i++) {
          propsTestSuits[i].progress =
            propsTestSuits[i].testcase == 0
              ? 0
              : Math.round(
                  (100 / propsTestSuits[i].testcase) *
                    propsTestSuits[i].complete
                );
          if (
            (propsTestSuits[i].writers.includes(this.$props.user.id) ||
              propsTestSuits[i].createrId === this.$props.user.id) &&
            !this.$props.user.guestFlag
          )
            propsTestSuits[i].auth = true;
        }
        return propsTestSuits;
      },
    },
    methods: {
      save(data) {
        return this.$emit("save", data);
      },
      destroy(id) {
        return this.$emit("destroy", id);
      },
      profile(userId) {
        return this.$emit("profile", userId);
      },
      testSuiteOpen(data) {
        return this.$emit("testSuiteOpen", data);
      },
    },
  };
</script>
