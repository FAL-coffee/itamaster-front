<template>
  <memberCard :user="user">
    <template v-slot:status>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <v-icon large v-if="user.invitation" color="warning"
              >mdi-do-not-disturb</v-icon
            >
            <v-icon large v-else color="cyan">mdi-account-check</v-icon>
          </div>
        </template>
        <span v-if="user.invitation">{{
          $t("organisms.team.card.members_card.yet_joined_user")
        }}</span>
        <span v-else>{{
          $t("organisms.team.card.members_card.joined_user")
        }}</span>
      </v-tooltip>
    </template>
    <template v-slot:actions>
      <!-- <memberEditModal :edit="true" :user="user" @save="save" @destroy="destroy"/> -->
      <v-icon v-if="isAdmin" color="teal">mdi-chess-king</v-icon>
      <memberKickoutMessage v-else-if="!isAdmin" @kickClick="kickClick" />
    </template>
  </memberCard>
</template>
<script>
  import memberCard from "@molecules/Team/MemberCard.vue";
  import memberKickoutMessage from "@molecules/Msg/MemberKickoutMessage.vue";
  export default {
    name: "membersCard",
    components: {
      memberCard,
      memberKickoutMessage,
    },
    props: {
      isAdmin: {
        type: Boolean,
        require: false,
        default: false,
      },
      user: {
        type: Object,
        require: true,
        default: () => ({
          id: 0,
        }),
      },
    },
    methods: {
      kickClick() {
        if (!this.$props.user.invitation)
          this.$emit("memberKick", this.$props.user.id);
        if (this.$props.user.invitation)
          this.$emit("invitationCancel", this.$props.user.email);
      },
    },
  };
</script>
