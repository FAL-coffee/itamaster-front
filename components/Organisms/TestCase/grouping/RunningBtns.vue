<template>
  <div style="position: fixed; right: 50px; bottom: 150px; z-index: 2;">
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
      <completionConfMessage v-if="enabled" @completion="$emit('completion')" />
      <v-btn v-else-if="!enabled" fab small disabled>
        <v-icon small>mdi-send-outline</v-icon>
      </v-btn>

      <!-- unlockConfMessage v-ifをlocked条件にすること -->
      <unlockConfMessage v-if="false" @unlock="$emit('unlock')">
        <template v-slot:alertText>
          {{ $t("organisms.testcase.grouping.running_btns.unlock_conf") }}
        </template>
      </unlockConfMessage>
      <v-btn v-else-if="true" fab small disabled>
        <v-icon small>mdi-lock-open</v-icon>
      </v-btn>

      <!-- lockConfMessage v-ifをlocked条件にすること -->
      <lockConfMessage v-if="false" @lock="$emit('lock')">
        <template v-slot:alertText>
          {{ $t("organisms.testcase.grouping.running_btns.lock_conf") }}
          <br />
          {{
            $t("organisms.testcase.grouping.running_btns.lock_released_time")
          }}
        </template>
      </lockConfMessage>
      <v-btn v-else-if="true" fab small disabled>
        <v-icon small>mdi-lock</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
  import completionConfMessage from "@molecules/Msg/CompletionConfMessage";
  import lockConfMessage from "@molecules/Msg/LockConfMessage.vue";
  import unlockConfMessage from "@molecules/Msg/UnlockConfMessage.vue";
  export default {
    name: "runningBtns",
    components: {
      completionConfMessage,
      lockConfMessage,
      unlockConfMessage,
    },
    props: {
      locked: {
        type: Boolean,
        require: false,
        default: true,
      },
      enabled: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    data() {
      return {
        open: false,
      };
    },
    methods: {},
  };
</script>
