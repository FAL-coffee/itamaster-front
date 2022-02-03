<template>
  <div>
    <v-container>
      <v-checkbox v-model="environmentStep">
        <template slot="label">
          <linkBtn
            icon="mdi-arrow-right-bold-outline"
            text="create environment steps page"
          />
        </template>
      </v-checkbox>
    </v-container>
    <projectOption
      style="margin-top: -50px;"
      :opt="testEnvironment"
      :val="testEnvironmentURL"
      @optSwitch="testEnvironmentSwitch"
      @valChange="testEnvironmentURLChanged"
    >
      <template slot="label">
        <linkBtn
          icon="mdi-arrow-right-bold-outline"
          text="test environment url"
        />
      </template>
    </projectOption>
    <projectOption
      style="margin-top: -50px;"
      :opt="repository"
      :val="repositoryURL"
      @optSwitch="repositorySwitch"
      @valChange="repositoryURLChanged"
    >
      <template slot="label">
        <linkBtn icon="mdi-arrow-right-bold-outline" text="repository url" />
      </template>
    </projectOption>
  </div>
</template>
<script>
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import projectOption from "@molecules/Project/ProjectOption.vue";
  export default {
    name: "projectOptions",
    components: {
      linkBtn,
      projectOption,
    },
    data() {
      return {
        testEnvironment: this.$props.testEnvironmentURL != "",
        repository: this.$props.repositoryURL != "",
      };
    },
    props: {
      createEnvironmentSteps: {
        type: Boolean,
        require: true,
        default: false,
      },
      testEnvironmentURL: {
        type: String,
        require: true,
        default: "",
      },
      repositoryURL: {
        type: String,
        require: true,
        default: "",
      },
    },
    computed: {
      environmentStep: {
        get() {
          return this.$props.createEnvironmentSteps;
        },
        set(v) {
          return this.$emit("createEnvironmentStepsSwitch", v);
        },
      },
    },
    methods: {
      testEnvironmentSwitch(v) {
        if (v) {
          this.$data.testEnvironment = v;
          return this.testEnvironmentURLChanged(this.$props.testEnvironmentURL);
        }
        if (!v) {
          this.$data.testEnvironment = v;
          return this.testEnvironmentURLChanged("");
        }
      },
      repositorySwitch(v) {
        if (v) {
          this.$data.repository = v;
          return this.repositoryURLChanged(this.$props.repositoryURL);
        }
        if (!v) {
          this.$data.repository = v;
          return this.repositoryURLChanged("");
        }
      },
      testEnvironmentURLChanged(v) {
        return this.$emit("testEnvironmentURLChanged", [
          v,
          this.$data.testEnvironment,
        ]);
      },
      repositoryURLChanged(v) {
        return this.$emit("repositoryURLChanged", [v, this.$data.repository]);
      },
    },
  };
</script>
