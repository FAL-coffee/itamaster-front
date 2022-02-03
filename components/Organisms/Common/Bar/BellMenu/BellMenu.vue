<template>
  <v-menu bottom left origin="center center" transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" class="mr-3">
        <v-btn icon @click="$emit('bellMenuOpen')">
          <v-badge
            v-if="unreadCount != 0"
            overlap
            color="red"
            :content="unreadCount"
          >
            <v-icon dark>mdi-bell</v-icon>
          </v-badge>
          <v-icon v-else dark>mdi-bell</v-icon>
        </v-btn>
      </div>
    </template>
    <v-list>
      <v-list-item v-for="(invitation, i) in invitations" :key="i">
        <invitation :invitation="invitation" @join="join" @reject="reject" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
  import invitation from "@organisms/Common/Bar/BellMenu/Option/Invitation.vue";
  export default {
    name: "bellMenu",
    components: {
      invitation,
    },
    props: {
      unreadCount: {
        type: Number,
        require: false,
        default: 0,
      },
      invitations: {
        type: Array,
        require: true,
        default: () => [],
      },
    },
    methods: {
      join(data) {
        return this.$emit("join", data);
      },
      reject(id) {
        return this.$emit("reject", id);
      },
    },
  };
</script>
