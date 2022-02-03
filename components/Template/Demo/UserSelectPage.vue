<template>
  <div>
    <v-row class="mt-8">
      <v-col cols="12" lg="2" md="0" sm="0" />
      <v-col cols="12" lg="2" md="4" sm="12">
        <span class="d-flex justify-space-around">
          <userSelectCard :user="userOptions[0]" @userSelect="userSelect" />
        </span>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <span class="d-flex justify-space-around">
          <userSelectCard :user="userOptions[1]" @userSelect="userSelect" />
        </span>
      </v-col>
      <v-col cols="12" lg="2" md="4" sm="12">
        <span class="d-flex justify-space-around">
          <userSelectCard :user="userOptions[2]" @userSelect="userSelect" />
        </span>
      </v-col>
      <v-col cols="12" lg="2" md="0" sm="0" />
    </v-row>
    <v-row class="mt-9">
      <v-col cols="12" lg="1" md="0" sm="0" />
      <v-col cols="12" lg="10" md="12" sm="12">
        <precautionaryStatementCard />
      </v-col>
      <v-col cols="12" lg="1" md="0" sm="0" />
    </v-row>
  </div>
</template>
<script>
  import userSelectCard from "@organisms/Demo/UserSelectCard";
  import precautionaryStatementCard from "@organisms/Demo/PrecautionaryStatementCard";
  export default {
    name: "userSelectPage",
    components: {
      userSelectCard,
      precautionaryStatementCard,
    },
    props: {
      userOptions: {
        type: Array,
        require: true,
        default: () => [],
      },
    },
    methods: {
      userSelect(id) {
        return this.$emit("userSelect", id);
      },
    },
  };
</script>
