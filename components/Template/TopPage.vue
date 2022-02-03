<template>
  <div class="justify-center">
    <imageCard />

    <v-row style="margin-top: 50px;">
      <v-col cols="12" lg="4" md="2" sm="0" xs="0" />
      <v-col cols="12" lg="4" md="8" sm="12" xs="12"
        ><accessButtons @signin="$emit('signin')" @signup="$emit('signup')" />
      </v-col>
      <v-col cols="12" lg="4" md="2" sm="0" xs="0" />
    </v-row>

    <v-row style="margin-top: 50px;">
      <v-col cols="12" lg="1" md="1" sm="0" xs="0" />
      <v-col cols="12" lg="10" md="10" sm="12" xs="12">
        <typingAnimationCard
          :text="[
            $t('organisms.top.typing_animation_card.why_not'),
            $t('organisms.top.typing_animation_card.itamaster_is'),
          ]"
        />
      </v-col>
      <v-col cols="12" lg="1" md="1" sm="0" xs="0" />
    </v-row>

    <div style="margin-top: 50px;">
      <simpleDesign />
    </div>

    <v-row style="margin-top: 50px;">
      <v-col cols="12" lg="1" md="1" sm="0" xs="0" />
      <v-col cols="12" lg="6" md="10" sm="12" xs="12">
        <div class="text-center">
          <p class="text-h2">
            {{ $t("template.top_page.free_demo_start") }}
          </p>
          <roundedButton
            class="mt-8"
            :text="$t('template.top_page.demo_start')"
            @btnClick="$emit('demo')"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" md="1" sm="0" xs="0" />
    </v-row>

    <div
      class="hidden-md-and-down"
      style="margin-top: 50px; height: 180px; width: 100%; background: black;"
    >
      <penetrateAnimationCard
        style="top: 50px;"
        :text="$t('template.top_page.penetrate_text')"
      />
    </div>

    <v-row style="margin-top: 50px;">
      <v-col cols="12" lg="4" md="6" sm="12" xs="12">
        <div class="text-center">
          <solveExcelProblemCard />
        </div>
      </v-col>
      <v-col cols="12" lg="8" md="6" sm="12" xs="12">
        <excelProblemWindow />
      </v-col>
    </v-row>

    <p class="text-h3" style="margin-top: 50px;">
      {{ $t("template.top_page.all_log_baffa") }}
    </p>
    <v-row style="margin-top: 50px;">
      <v-col cols="12" lg="1" md="1" sm="0" xs="0" />
      <v-col cols="12" lg="2" md="2" sm="3" xs="3">
        <v-img :src="download" max-height="200" contain />
      </v-col>
      <v-col cols="12" lg="9" md="9" sm="9" xs="9">
        <div class="mt-5">
          <span class="text-h4">
            {{ $t("template.top_page.excel_export") }}
            <br />
            {{ $t("template.top_page.is_excel_file") }}
          </span>
          <div class="mt-2">
            ※
            {{ $t("template.top_page.recommended_environment") }}：Excel2016↑
          </div>
          <div class="mt-8" style="display: flex;">
            <roundedButton
              :text="$t('template.top_page.demo_start')"
              @btnClick="$emit('demo')"
            />
            <div class="ml-5" />
            <roundedButton
              :text="$t('template.top_page.guide_read')"
              @btnClick="$emit('toGuide')"
            />
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="mt-15 text-center" style="margin-top: 70px;">
      <v-img :src="invitation" max-height="150px" style="align-items: center;">
        <div class="text-h3 font-weight-black">
          {{ $t("template.top_page.would_you_like_together") }}
        </div>
      </v-img>
    </div>
  </div>
</template>
<script>
  import roundedButton from "@molecules/Common/RoundedButton";

  import imageCard from "@organisms/Top/ImageCard.vue";
  import accessButtons from "@organisms/Top/AccessButtons.vue";
  import typingAnimationCard from "@organisms/Top/TypingAnimationCard.vue";
  import simpleDesign from "@organisms/Top/SimpleDesign.vue";
  import penetrateAnimationCard from "@organisms/Top/PenetrateAnimationCard.vue";
  import excelProblemWindow from "@organisms/Top/ExcelProblemWindow.vue";
  import solveExcelProblemCard from "@organisms/Top/SolveExcelProblemCard.vue";
  export default {
    name: "topPage",
    components: {
      roundedButton,
      accessButtons,
      excelProblemWindow,
      imageCard,
      penetrateAnimationCard,
      simpleDesign,
      solveExcelProblemCard,
      typingAnimationCard,
    },
    data() {
      return {
        invitation: require("@/assets/TopPage/invitation.jpg"),
        download: require("@/assets/TopPage/download.png"),
      };
    },
    props: {},
    methods: {},
  };
</script>
