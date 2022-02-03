<template>
  <span>
    <strong>{{ invitation.teamName }}</strong> ️️{{
      $t(
        "organisms.common.bar.app_header.bell_menu.option.invitation.inviting_for_you"
      )
    }}
    <br />
    id　: {{ invitation.teamId }}
    <br />
    ️️{{
      $t(
        "organisms.common.bar.app_header.bell_menu.option.invitation.test_together"
      )
    }}
    <div style="display: flex;">
      <v-btn color="error" icon @click="$emit('reject', invitation.id)">
        <v-icon dark>mdi-alpha-x-circle-outline</v-icon>
      </v-btn>
      <invitationJoinModal :invitation="invitation" @join="join" />
    </div>
    <v-divider />
  </span>
</template>
<script>
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  import invitationJoinModal from "@organisms/Common/Bar/BellMenu/Option/Modal/InvitationJoinModal.vue";
  export default {
    name: "invitation",
    components: {
      userInfoModal,
      invitationJoinModal,
    },
    data() {
      return {};
    },
    props: {
      invitation: {
        type: Object,
        require: true,
        default: () => ({ id: 0, teamName: "", teamId: "", adminUser: {} }),
      },
    },
    methods: {
      join(data) {
        return this.$emit("join", data);
      },
    },
  };
</script>
