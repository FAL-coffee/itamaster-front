<template>
  <v-card elevation="4">
    <v-card-title>
      {{ $t("organisms.testcase.testcase_table.table_name") }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="testCases"
      :search="search"
      :hide-default-footer="true"
      :disable-pagination="true"
      ref="ref"
    >
      <template v-slot:body="{ items }">
        <!-- is="draggable" -> v-is="draggable" -->
        <!--<tbody v-model="testCases" is="draggable" tag="tbody">-->
        <!-- <tbody v-model="displayTestCases" is="draggable"  tag="tbody"> -->
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td>{{ item.sequential_id }}</td>
            <td>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    v-bind="attrs"
                    v-on="on"
                    class="status"
                    :style="bgColors(item.status)"
                    style="margin-left: 10px;"
                  ></div>
                </template>
                <span>{{ item.status }}</span>
              </v-tooltip>
            </td>
            <td>{{ item.importance }}</td>
            <td>{{ item.order }}</td>
            <td>{{ item.title }}</td>
            <td>
              <userInfoModal
                :user="personsFromId(item.testerId)"
                @profile="profile"
              />
            </td>
            <td>
              <testCaseActions
                :testCase="item"
                :persons="persons"
                :user="user"
                @save="save"
                @destroy="destroy"
                @profile="profile"
              />
            </td>
          </tr>
        </tbody>
      </template>
      <template v-slot:no-data> </template>
      <template v-slot:footer>
        <div v-if="user.writer">
          <v-divider class="pt-1"></v-divider>
          <v-spacer></v-spacer>
          <div class="text-right mr-10">
            <testCaseFooterActions
              :user="user"
              :persons="persons"
              @save="save"
              @sortMode="sortMode"
            />
          </div>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
  import draggable from "vuedraggable";
  import testCaseActions from "@organisms/TestCase/grouping/TestCaseActions.vue";
  import testCaseFooterActions from "@organisms/TestCase/grouping/TestCaseFooterActions.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  export default {
    name: "testCaseTable",
    components: {
      draggable,
      testCaseActions,
      userInfoModal,
      testCaseFooterActions,
    },
    data() {
      return {
        search: "",
        headers: [
          {
            text: "No",
            align: "start",
            sortable: true,
            value: "sequential_id",
          },
          {
            text: "Status",
            value: "status",
            sortable: true,
          },
          {
            text: "Importance Level",
            value: "importance",
            sortable: true,
          },
          {
            text: "Order",
            value: "order",
            sortable: true,
          },
          {
            text: "Test Case Title",
            value: "title",
            sortable: false,
          },
          {
            text: "Tester",
            value: "testerId",
            sortable: true,
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
    computed: {
      // displayTestCases:{
      //     get(){
      //         return this.$props.testCases;
      //     },
      //     set(e){
      //         // propsのデータを加工できず、dataにディープコピーすると削除/更新をキャッチできないため、フロントのみのソートまではstore管理する
      //         return this.$emit("sort",e.map((l)=>l.id))
      //     },
      // },
      // userWriterCheck(){
      // },
    },
    methods: {
      bgColors(status) {
        return (
          "background:" +
          ["gray", "rgb(41, 160, 240)", "rgb(204, 201, 4)", "red"][
            ["notRunning", "complete", "retest", "issue"].indexOf(status)
          ]
        );
        +";";
      },
      personsFromId(id) {
        const index = this.$props.persons.findIndex((item) => item.id === id);
        if (index === -1) {
          return {
            id: -1,
            name: "No Name",
            iconImg: { url: "" },
            message:
              "The user was not found. This user may no longer exist on your team.",
            simpleIcon: true,
            color: "black",
          };
        }
        return this.$props.persons[index];
      },
      save(data) {
        return this.$emit("save", data);
      },
      destroy(id) {
        return this.$emit("destroy", id);
      },
      sortMode() {
        // let items = this.$refs.ref.$children[0].filteredItems;
        // let sorted = this.$refs.ref.$children[0].sortItems(items).map((el)=>el.id);
        // return this.$emit("sortMode",sorted)
        return this.$emit("sortMode");
      },
      profile(userId) {
        return this.$emit("profile", userId);
      },
    },
  };
</script>
<style scoped>
  .status {
    display: inline-block;
    margin-top: 5px;
    width: 20px;
    height: 10px;
    border-radius: 4px;
  }
</style>
