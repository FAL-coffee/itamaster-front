<template>
  <div>
    <!--@changePassword="$emit('changePassword')" @changeEmail="$emit('changeEmail')" @myTaskList="$emit('myTaskList')"-->
    <!-- <appHeader :user="user" :unreadCount="unreadCount" :invitations="invitations"
            @signin="$emit('signin')" @signout="$emit('signout',user.id)" @profile="$emit('profile',user.id)"  
                @profileRegist="$emit('profileRegist',user.id)" @signup="$emit('signup')" @join="join" @reject="reject" @bellMenuOpen="$emit('bellMenuOpen')" /> -->
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card elevation="3">
          <v-card-title class="justify-center">
            {{ team.name }}
          </v-card-title>
          <v-card-subtitle class="mt-3 text-center">
            {{ $t("template.team_manage_page.page_explanation") }}
            <br />
            {{ $t("template.team_manage_page.remarks") }}
          </v-card-subtitle>
          <teamManageList
            :user="user"
            :team="team"
            :teamIdCheckData="teamIdCheckData"
            @profile="profile"
            @toProjectPage="toProjectPage"
            @invitation="invitation"
            @exit="exit"
            @teamSave="teamSave"
            @teamDestroy="teamDestroy"
            @close="close"
            @idChange="idChange"
            @idCheck="idCheck"
            @memberKick="memberKick"
            @invitationCancel="invitationCancel"
            @memberEdit="memberEdit"
          />
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <!-- <appFooter :user="user" @toHome="$emit('toHome')" @toContactForm="$emit('toContactForm')"  @toPrivacyPolicy="$emit('toPrivacyPolicy')" /> -->
    <!-- <loadingProgressCircle :api="api" /> -->
    <!-- <alertMessage :error="error" @readed="readed" /> -->
  </div>
</template>
<script>
  import teamManageList from "@organisms/Team/TeamManageList.vue";
  export default {
    name: "teamCardListPage",
    data() {
      return {};
    },
    components: {
      teamManageList,
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
      team: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
          teamId: "",
        }),
      },
      teamIdCheckData: {
        type: Object,
        require: false,
        default: () => ({ id: 0, status: "" }),
      },
    },
    methods: {
      teamSave(data) {
        return this.$emit("teamSave", data);
      },
      teamDestroy(id) {
        return this.$emit("teamDestroy", id);
      },
      memberKick(data) {
        return this.$emit("memberKick", data);
      },
      invitationCancel(id) {
        return this.$emit("invitationCancel", id);
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
      invitation(data) {
        return this.$emit("invitation", data);
      },
      readed() {
        return this.$emit("readed");
      },
      join(data) {
        return this.$emit("join", data);
      },
      reject(id) {
        return this.$emit("reject", id);
      },
    },
  };
</script>
