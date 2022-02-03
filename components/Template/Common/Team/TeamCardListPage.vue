<template>
  <div>
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3">
          <v-card-title class="justify-center">
            My Team
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            {{ $t("template.team_card_list_page.belong_to_team") }}
            <br />
            {{
              $t(
                "template.team_card_list_page.project_page_click_to_start_testing"
              )
            }}
          </v-card-subtitle>
          <teamCardList
            :user="user"
            :teams="teams"
            :teamIdCheckData="teamIdCheckData"
            :userIsPaid="userIsPaid"
            @profile="profile"
            @toProjectPage="toProjectPage"
            @memberEdit="memberEdit"
            @exit="exit"
            @teamSave="teamSave"
            @teamDestroy="teamDestroy"
            @close="close"
            @idChange="idChange"
            @idCheck="idCheck"
          />
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>
<script>
  import teamCardList from "@organisms/Team/TeamCardList.vue";
  export default {
    name: "teamCardListPage",
    data() {
      return {};
    },
    components: {
      teamCardList,
    },
    props: {
      user: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          name: "",
          initials: "",
          email: "",
          color: "",
          simpleIcon: false,
          // bgImg:'',
          iconImg: "",
          message: "",
        }),
      },
      teams: {
        type: Array,
        require: true,
        default: () => [],
      },
      teamIdCheckData: {
        type: Object,
        require: false,
        default: () => ({ id: 0, status: "" }),
      },
      userIsPaid: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    methods: {
      teamSave(data) {
        return this.$emit("teamSave", data);
      },
      teamDestroy(id) {
        return this.$emit("teamDestroy", id);
      },
      close() {
        return this.$emit("close");
      },
      exit(id) {
        return this.$emit("exit", id);
      },
      idChange(id) {
        return this.$emit("idChange", id);
      },
      idCheck(v) {
        return this.$emit("idCheck", v);
      },
      profile(id) {
        return this.$emit("profile", id);
      },
      toProjectPage(id) {
        return this.$emit("toProjectPage", id);
      },
      memberEdit(id) {
        return this.$emit("memberEdit", id);
      },
    },
  };
</script>
