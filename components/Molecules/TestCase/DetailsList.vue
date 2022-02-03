<template>
  <div style="margin: -12px 0 0 0;">
    <v-list-group prepend-icon="mdi-book-information-variant" :value="open">
      <template v-slot:activator>
        <v-list-item-title>{{ $t("general.details") }}</v-list-item-title>
      </template>
      <div v-if="prerequisites != []">
        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{
                $t("general.prerequisites")
              }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="prerequisites in prerequisites"
            :key="prerequisites.order"
            link
          >
            <v-list-item-title
              v-text="prerequisites.contents"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>

      <div v-if="process != []">
        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t("general.process") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="process in process" :key="process.order" link>
            <v-list-item-title v-text="process.contents"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>

      <div v-if="expect != []">
        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t("general.expect") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="expect in expect" :key="expect.order" link>
            <v-list-item-title v-text="expect.contents"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list-group>
    <v-divider></v-divider>
  </div>
</template>
<script>
  export default {
    name: "detailsList",
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
      open: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
  };
</script>
