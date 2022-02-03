<template>
  <div style="position: fixed; right: 50px; bottom: 50px;">
    <v-speed-dial v-model="open" top>
      <template v-slot:activator>
        <v-btn v-model="open" color="blue darken-2" dark fab>
          <v-icon v-if="open">
            mdi-resize-bottom-right
          </v-icon>
          <v-icon v-else>
            mdi-apple-keyboard-control
          </v-icon>
        </v-btn>
      </template>
      <completionConfMessage @completion="$emit('completion')" />
      <unlockConfMessage @unlock="$emit('unlock')" />
      <lockConfMessage @lock="$emit('lock')" />
    </v-speed-dial>
  </div>
</template>
<script>
  import completionConfMessage from "@molecules/Msg/CompletionConfMessage";
  import lockConfMessage from "@molecules/Msg/LockConfMessage.vue";
  import unlockConfMessage from "@molecules/Msg/UnlockConfMessage.vue";
  export default {
    name: "runningBtnGroup",
    components: {
      completionConfMessage,
      lockConfMessage,
      unlockConfMessage,
    },
    data() {
      return {
        open: false,
      };
    },
    methods: {},
  };
</script>
