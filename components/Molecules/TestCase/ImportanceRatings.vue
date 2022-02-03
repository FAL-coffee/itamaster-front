<template>
  <v-rating v-model="importances" length="3">
    <template v-slot:item="props">
      <v-icon
        :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
        @click="cons(props)"
      >
        {{ props.isFilled ? "mdi-star" : "mdi-star" }}
      </v-icon>
    </template>
  </v-rating>
</template>
<script>
  export default {
    name: "importanceRatings",
    props: {
      importance: {
        type: Number,
        require: false,
        default: 1,
      },
      readOnly: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    computed: {
      importances: {
        get() {
          return this.importance;
        },
        set() {},
      },
    },
    methods: {
      genColor(i) {
        return ["green", "orange", "red"][i];
      },
      cons(i) {
        if (this.$props.readOnly) return;
        i.click();
        this.$emit("importanceChanged", i.index + 1);
      },
    },
  };
</script>
