<template>
  <v-select
    v-model="selectedProject"
    :items="projects"
    label="Project"
    item-text="item.name"
    item-value="name"
    solo
    return-object
  >
    <template v-slot:item="{ item }">
      {{ item.name }}
    </template>
    <template v-slot:selection="{ item }">
      {{ item.name }}
    </template>
  </v-select>
</template>
<script>
  export default {
    name: "projectList",
    props: {
      projects: {
        type: Array,
        require: false,
        default: () => [{ id: 0, name: "" }],
      },
      selected: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
        }),
      },
    },
    computed: {
      selectedProject: {
        get() {
          return this.selected.name;
        },
        set(val) {
          this.$emit("projectSet", val.id);
        },
      },
    },
  };
</script>
