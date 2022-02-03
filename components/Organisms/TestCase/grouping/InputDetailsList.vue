<template>
  <div style="margin: -12px 0 0 0;">
    <v-list-group prepend-icon="mdi-book-information-variant">
      <template v-slot:activator>
        <v-list-item-title>{{ $t("general.details") }}</v-list-item-title>
      </template>
      <v-list-group
        v-for="(item, i) in [this.prerequisites, this.process, this.expect]"
        :key="i"
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{
                [
                  $t("general.prerequisites"),
                  $t("general.process"),
                  $t("general.expect"),
                ][i]
              }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(detail, j) in item" :key="j" no-action sub-group>
          <v-btn
            icon
            depressed
            fab
            small
            elevation="0"
            @click="destroy(['prerequisites', 'process', 'expect'][i], j)"
          >
            <v-icon color="error" dark>mdi-delete</v-icon>
          </v-btn>
          <detailInput
            class="ml-3"
            :name="
              [
                $t('general.prerequisites'),
                $t('general.process'),
                $t('general.expect'),
              ][i] +
              (j + 1)
            "
            :text="detail.contents"
            :data="[['prerequisites', 'process', 'expect'][i], j]"
            @detailChange="valChange"
          />
        </v-list-item>
        <v-btn
          icon
          depressed
          class="ml-15"
          large
          @click="add(['prerequisites', 'process', 'expect'][i])"
        >
          <v-icon color="cyan">mdi-book-plus</v-icon>
        </v-btn>
      </v-list-group>
    </v-list-group>
    <v-divider></v-divider>
  </div>
</template>
<script>
  import detailInput from "@molecules/TestCase/DetailInput.vue";
  export default {
    name: "inputDetailsList",
    components: {
      detailInput,
    },
    props: {
      prerequisites: {
        type: Array,
        require: false,
        default: () => [],
      },
      process: {
        type: Array,
        require: false,
        default: () => [],
      },
      expect: {
        type: Array,
        require: false,
        default: () => [],
      },
    },
    computed: {},
    methods: {
      // [ category:['prerequisites','process','expect'][i] index ]
      destroy(category, index) {
        return this.$emit("destroy", [category, index]);
      },
      // ['prerequisites','process','expect']
      add(category) {
        return this.$emit("add", category);
      },
      // [ value , [ category:['prerequisites','process','expect'][i], index ] ]
      valChange(val) {
        return this.$emit("valChange", val);
      },
    },
  };
</script>
