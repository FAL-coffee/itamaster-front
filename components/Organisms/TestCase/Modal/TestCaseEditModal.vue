<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <div v-if="edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="cyan"
            small
            elevation="0"
            @click="initialize"
          >
            <v-icon small dark>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div v-else-if="!edit">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            fab
            color="pink"
            small
            @click="initialize"
          >
            <v-icon small dark>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ editData.title }}
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <testCaseTitle
            class="mt-5"
            v-if="dialog"
            @testCaseTitleChanged="testCaseTitleChanged"
            :inputTestCaseTitle="editData.title"
          />
          <div>
            <v-select
              v-if="dialog"
              v-model="selectPersons"
              :items="this.editData.persons"
              item-text="name"
              item-value="name"
              :label="$t('general.tester')"
              return-object
            >
              <template v-slot:item="{ item }">
                <v-btn icon depressed
                  ><userIcon :size="'small'" :user="item"
                /></v-btn>
                {{ item.name }}
              </template>
              <template v-slot:selection="{ item }">
                <v-btn icon depressed
                  ><userIcon :size="'x-small'" :user="item" /></v-btn
                >{{ item.name }}
              </template>
            </v-select>
          </div>
          <div>
            {{ $t("general.importance") }}
            <importanceRatings
              v-if="dialog"
              :importance="editData.importance"
              :readOnly="false"
              @importanceChanged="importanceChanged"
            />
            <v-divider></v-divider>
          </div>
          <inputDetailsList
            class="mt-5"
            v-if="dialog"
            :prerequisites="editData.prerequisites"
            :process="editData.process"
            :expect="editData.expect"
            @destroy="detailDestroy"
            @add="detailAdd"
            @valChange="detailChange"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="this.editData.id === 0" disabled>
            {{ $t("general.delete") }}
          </v-btn>
          <deleteConfMessage
            v-else-if="this.editData.id != 0"
            @deleteClick="destroy(), close()"
          />
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="save(), close()"
            class="ml-3"
          >
            {{ $t("general.save") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  import testCaseTitle from "@molecules/TestCase/TestCaseTitle.vue";
  import importanceRatings from "@molecules/TestCase/ImportanceRatings.vue";
  import inputDetailsList from "@organisms/TestCase/grouping/InputDetailsList.vue";
  import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
  export default {
    name: "testCaseEditModal",
    components: {
      userIcon,
      testCaseTitle,
      importanceRatings,
      inputDetailsList,
      deleteConfMessage,
    },
    data() {
      return {
        dialog: false,
        disabled: true,
        titleValid: false,
        detailValid: false,
        testerSelectFlag: false,
        detailChangeFlag: false,
        titleChangeFlag: false,
        editData: {
          id: 0,
          title: "",
          // createrId:0,
          persons: [],
          // lastEditorId:0,
          testerId: 0,
          importance: 1,
          prerequisites: [],
          process: [],
          expect: [],
        },
      };
    },
    props: {
      edit: {
        type: Boolean,
        require: false,
        default: true,
      },
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
        }),
      },
      testCase: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          // order:0,
          status: "notRunning",
          title: "",
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
    mounted() {
      if (this.$props.testCase.id === 0) {
        this.$data.disabled = true;
        this.$data.detailValid = true;
        this.$data.titleValid = false;
        this.$data.detailChangeFlag = true;
        this.$data.testerSelectFlag = false;
      } else if (this.$props.testCase.id != 0) {
        this.disabled = true;
        this.$data.detailValid = true;
        this.$data.titleValid = true;
        this.$data.detailChangeFlag = true;
        this.$data.testerSelectFlag = true;
      }
    },
    computed: {
      selectPersons: {
        get() {
          return this.$props.edit
            ? this.$props.persons[
                this.$props.persons.findIndex(
                  (item) => item.id === this.$props.testCase.testerId
                )
              ]
            : "";
        },
        set(val) {
          this.$data.editData.testerId = val.id;
          this.$data.testerSelectFlag = true;
          this.disabledCheck();
        },
      },
    },
    methods: {
      initialize() {
        this.$data.editData.persons = JSON.parse(
          JSON.stringify(this.$props.persons)
        );
        // this.$data.editData.createrId = this.$props.user.id;
        // this.$data.editData.lastEditorId = this.$props.user.id;
        this.$data.editData.title = "";
        this.$set(this.$data.editData, "prerequisites", []);
        this.$set(this.$data.editData, "process", []);
        this.$set(this.$data.editData, "expect", []);
        if (!this.$props.edit) {
          return;
        }
        this.$data.editData.id = JSON.parse(
          JSON.stringify(this.$props.testCase.id)
        );
        this.$data.editData.title = JSON.parse(
          JSON.stringify(this.$props.testCase.title)
        );
        // this.$data.editData.createrId = this.$props.testCase.createrId;
        // this.$data.editData.lastEditorId = this.$props.user.id;
        this.$set(
          this.$data.editData,
          "importance",
          JSON.parse(JSON.stringify(this.$props.testCase.importance))
        );
        this.$set(
          this.$data.editData,
          "testerId",
          JSON.parse(JSON.stringify(this.$props.testCase.testerId))
        );
        this.$set(
          this.$data.editData,
          "prerequisites",
          JSON.parse(JSON.stringify(this.$props.testCase.prerequisites))
        );
        this.$set(
          this.$data.editData,
          "process",
          JSON.parse(JSON.stringify(this.$props.testCase.process))
        );
        this.$set(
          this.$data.editData,
          "expect",
          JSON.parse(JSON.stringify(this.$props.testCase.expect))
        );
      },
      testCaseTitleChanged(val) {
        this.$data.titleValid = !!val && val.length <= 50;
        this.$data.editData.title = val;
        this.disabledCheck();
      },
      detailAdd(data) {
        // 'prerequisites' || 'process' || 'expect'
        this.$data.editData[data].push({ contents: "" });
      },
      detailDestroy(data) {
        //  [ 'prerequisites' || 'process' || 'expect', index ]
        this.$data.editData[data[0]].splice(data[1], 1);
        this.disabledCheck();
      },
      detailChange(data) {
        // [ value , [ 'prerequisites' || 'process' || 'expect', index ] ]
        this.$data.detailChangeFlag = true;
        this.$set(
          this.$data.editData[data[1][0]][data[1][1]],
          "contents",
          data[0]
        );
        for (var i = 0; i < this.$data.editData.prerequisites.length; i++) {
          this.$data.detailValid =
            this.$data.editData.prerequisites[i].contents.length <= 50;
          if (!this.$data.detailValid) break;
        }
        for (var i = 0; i < this.$data.editData.process.length; i++) {
          if (!this.$data.detailValid) break;
          this.$data.detailValid =
            this.$data.editData.process[i].contents.length <= 50;
          if (!this.$data.detailValid) break;
        }
        for (var i = 0; i < this.$data.editData.expect.length; i++) {
          if (!this.$data.detailValid) break;
          this.$data.detailValid =
            this.$data.editData.expect[i].contents.length <= 50;
          if (!this.$data.detailValid) break;
        }
        this.disabledCheck();
      },
      importanceChanged(v) {
        this.$set(this.$data.editData, "importance", v);
        this.disabledCheck();
      },
      disabledCheck() {
        return (this.$data.disabled = !(
          !!this.$data.titleValid &&
          !!this.$data.detailValid &&
          !!this.$data.detailChangeFlag &&
          !!this.testerSelectFlag
        ));
      },
      save() {
        delete this.$data.editData.persons;
        // this.$data.editData.tester = this.$data.editData.tester.id;
        return this.$emit("save", this.$data.editData);
      },
      destroy() {
        return this.$emit("destroy", this.$data.editData.id);
      },
      close() {
        this.$data.dialog = false;
        // this.initialize();
        this.disabled = true;
      },
    },
  };
</script>
