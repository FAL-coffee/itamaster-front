<template>
  <v-card color="blue-grey darken-2" dark flat tile>
    <v-window v-model="onboarding">
      <v-window-item>
        <v-card
          color="blue-grey darken-2
"
          max-height="800"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-card-text class="text-center">
              <v-row>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <p class="text-h5" style="white-space: pre-line;">
                    <br />
                    {{
                      $t(
                        "organisms.top.excel_problem_window.impossible_simultaneous_operation"
                      )
                    }}
                    {{ $t("organisms.top.excel_problem_window.run_time") }}
                  </p>
                </v-col>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <v-img :src="runtime" max-height="170"
                /></v-col>
              </v-row>
            </v-card-text>
          </v-row>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card
          color="blue-grey darken-2
"
          max-height="800"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-card-text class="text-center">
              <v-row>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <p class="text-h5" style="white-space: pre-line;">
                    <br />
                    {{
                      $t("organisms.top.excel_problem_window.heavy_movement")
                    }}
                    {{
                      $t(
                        "organisms.top.excel_problem_window.adverse_effects_for_performance"
                      )
                    }}
                  </p>
                </v-col>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <v-img :src="lg" max-height="170"
                /></v-col>
              </v-row>
            </v-card-text>
          </v-row>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card
          color="blue-grey darken-2
"
          max-height="800"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-card-text class="text-center">
              <v-row>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <p class="text-h5" style="white-space: pre-line;">
                    <br />
                    {{
                      $t("organisms.top.excel_problem_window.data_corruption")
                    }}
                    {{
                      $t("organisms.top.excel_problem_window.will_not_forget")
                    }}
                  </p>
                </v-col>
                <v-col lg="6" md="6" sm="6" xs="12">
                  <v-img :src="brake" max-height="170"
                /></v-col>
              </v-row>
            </v-card-text>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
      runtime: require("@/assets/TopPage/runtime.jpg"),
      lg: require("@/assets/TopPage/lg.jpg"),
      brake: require("@/assets/TopPage/brake.jpg"),
    }),

    methods: {
      next() {
        this.onboarding =
          this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
      },
      prev() {
        this.onboarding =
          this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
      },
    },
  };
</script>
