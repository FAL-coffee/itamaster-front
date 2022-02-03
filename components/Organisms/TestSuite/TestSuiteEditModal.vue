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
          {{ editData.testSuite.title }}
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <titles
            class="mt-5"
            v-if="dialog"
            :text="editData.testSuite.title"
            @titleChanged="titleChanged"
          />
          <remarks
            class="mt-3"
            v-if="dialog"
            :text="editData.testSuite.remarks"
            @remarksChanged="remarksChanged"
          />
          <stepsInput
            v-if="dialog"
            :steps="String(editData.testSuite.steps)"
            :stepsInputEnable="stepsInputEnable"
            @stepsInputEnableSwitch="stepsInputEnableSwitch"
            @stepsChanged="stepsChanged"
          />

          <div>
            <div>{{ $t("general.writers") }}</div>
            <div
              v-for="(writer, i) in editData.testSuite.writers"
              :key="i"
              class="pt-1"
            >
              <v-chip close @click:close="writerDelete(writer)">
                <userIcon :size="'small'" :user="writer" /> {{ writer.name }}
              </v-chip>
            </div>
            <v-menu offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn icon depressed x-large v-bind="attrs" v-on="on">
                  <v-icon large color="success"
                    >mdi-account-multiple-plus</v-icon
                  >
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(person, i) in editData.persons"
                  :key="i"
                  link
                  @click="writerSelect(person)"
                >
                  <v-list-item-title>
                    <userIcon :size="'x-small'" :user="person" />
                    {{ person.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="testSuite.id === 0" disabled>
            {{ $t("general.delete") }}
          </v-btn>
          <deleteConfMessage
            v-else-if="testSuite.id != 0"
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
  import remarks from "@molecules/TestSuite/Remarks.vue";
  import titles from "@molecules/TestSuite/TestsuiteTitle.vue";
  import stepsInput from "@molecules/TestSuite/StepsInput.vue";
  import deleteConfMessage from "@molecules/Msg/DeleteConfMessage.vue";
  export default {
    name: "testSuiteEditModal",
    components: {
      userIcon,
      remarks,
      titles,
      stepsInput,
      deleteConfMessage,
    },
    data() {
      return {
        dialog: false,
        titleValid: false,
        remarksValid: false,
        stepsValid: true,
        disabled: false,
        stepsInputEnable: false,
        editData: {
          testSuite: {
            id: 0,
            title: "",
            remarks: "",
            steps: 0,
            // createrId:0,
            writers: [],
          },
          persons: [],
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
      testSuite: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          title: "",
          remarks: "",
          steps: 0,
          createrId: 0,
          writers: [],
        }),
      },
      persons: {
        type: Array,
        require: false,
        default: () => [],
        // array[id,name,initials,email,color,simpleIcon,iconImg]
      },
    },
    mounted() {
      if (this.testSuite.id === 0) {
        this.disabled = true;
        this.titleValid = false;
        this.stepsValid = true;
        this.remarksValid = false;
      } else if (this.testSuite.id != 0) {
        this.disabled = true;
        this.titleValid = true;
        this.stepsValid = true;
        this.remarksValid = true;
      }
    },
    methods: {
      initialize() {
        this.$data.editData.testSuite.id = JSON.parse(
          JSON.stringify(this.$props.testSuite.id)
        );
        this.$data.editData.testSuite.title = JSON.parse(
          JSON.stringify(this.$props.testSuite.title)
        );
        this.$data.editData.testSuite.remarks = JSON.parse(
          JSON.stringify(this.$props.testSuite.remarks)
        );
        this.$data.editData.testSuite.steps = JSON.parse(
          JSON.stringify(this.$props.testSuite.steps)
        );
        this.$data.editData.testSuite.writers = JSON.parse(
          JSON.stringify(this.$props.testSuite.writers)
        );
        this.$data.editData.persons = JSON.parse(
          JSON.stringify(this.$props.persons)
        );
        this.$data.stepsInputEnable = this.$props.testSuite.steps > 0;
        if (!this.$props.edit) {
          return;
        }
        let tempWriters = [];
        for (let i = 0; i < this.$data.editData.testSuite.writers.length; i++) {
          // const deleteIndex = this.$data.editData.persons.map(obj=>obj.id).indexOf(this.$data.editData.writers[i].id);
          const index = this.$data.editData.persons.findIndex(
            (item) => item.id === this.$data.editData.testSuite.writers[i]
          );
          if (index == -1) {
            // this.$data.editData.testSuite.writers.splice(i,1);
          } else if (index != -1) {
            // this.$data.editData.testSuite.writers[i]=this.$data.editData.persons[index]
            tempWriters.push(this.$data.editData.persons[index]);
            this.$data.editData.persons.splice(index, 1);
          }
        }
        this.$data.editData.testSuite.writers = tempWriters;
      },
      disabledCheck() {
        return (this.$data.disabled = !(
          !!this.$data.titleValid &&
          !!this.$data.remarksValid &&
          !!this.$data.stepsValid
        ));
      },
      titleChanged(val) {
        // then title changed, to validation check, to btn disabled check, to title change in editData.
        this.$data.titleValid = !!val && val.length <= 50;
        this.disabledCheck();
        this.$data.editData.testSuite.title = val;
      },

      remarksChanged(val) {
        // then remarks changed, to validation check, to btn disabled check, to remarks change in editData.
        this.$data.remarksValid = !!val && val.length <= 300;
        this.disabledCheck();
        this.$data.editData.testSuite.remarks = val;
      },

      stepsInputEnableSwitch(v) {
        this.$data.stepsInputEnable = v;
        if (!v) this.stepsChanged("0");
      },
      stepsChanged(val) {
        // then steps changed, to validation check, to btn disabled check, to remarks change in editData.
        this.$data.stepsValid =
          !!val && val.length <= 20 && /^[0-9]+$/.test(val);
        this.disabledCheck();
        this.$data.editData.testSuite.steps = val;
      },
      writerDelete(deleteWriter) {
        // then writer delete btn clicked, to writer delete in editData, to person add to persons in editData.
        const deleteIndex = this.$data.editData.testSuite.writers.indexOf(
          deleteWriter
        );
        this.$data.editData.testSuite.writers.splice(deleteIndex, 1);
        this.$data.editData.persons.push(deleteWriter);
        // order by id in persons on editData
        this.$data.editData.persons.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
        this.disabledCheck();
      },
      writerSelect(newWriter) {
        // then writer selected, to writer add writers in editData, to delete person on persons in editData.
        this.$data.editData.testSuite.writers.push(newWriter);
        const selectIndex = this.$data.editData.persons.indexOf(
          this.$data.editData.persons.find((obj) => obj.id === newWriter.id)
        );
        this.$data.editData.persons.splice(selectIndex, 1);
        this.disabledCheck();
      },
      save() {
        // delete this.$data.editData.persons;
        // this.$data.editData.testSuite.writers = this.$data.editData.testSuite.writers.map(obj => obj.id);
        const saveData = JSON.parse(
          JSON.stringify(this.$data.editData.testSuite)
        );
        saveData.steps = parseInt(saveData.steps);
        saveData.writers = saveData.writers.map((obj) => obj.id);
        return this.$emit("save", saveData);
      },
      destroy() {
        return this.$emit("destroy", this.$data.editData.testSuite.id);
      },
      close() {
        this.$data.dialog = false;
        // this.initialize();
        if (this.testSuite.id === 0) {
          this.disabled = true;
          this.titleValid = false;
          this.remarksValid = false;
          this.stepsValid = true;
        } else if (this.testSuite.id != 0) {
          this.disabled = true;
          this.titleValid = true;
          this.remarksValid = true;
          this.stepsValid = true;
        }
      },
    },
  };
</script>
