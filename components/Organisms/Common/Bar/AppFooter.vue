<template>
  <v-footer color="primary lighten-1" height="100px" app absolute padless>
    <v-row no-gutters>
      <v-col cols="12" lg="11" md="11" sm="11" class="text-center">
        <v-btn
          v-if="user.id != 0"
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toHome')"
        >
          {{ $t("organisms.common.bar.app_footer.home") }}
        </v-btn>
        <v-btn
          v-else-if="user.id === 0"
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toTop')"
        >
          {{ $t("organisms.common.bar.app_footer.top") }}
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toContactForm')"
        >
          {{ $t("organisms.common.bar.app_footer.contact") }}
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toPrivacyPolicy')"
        >
          {{ $t("organisms.common.bar.app_footer.privacy") }}
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toTerms')"
        >
          {{ $t("organisms.common.bar.app_footer.terms") }}
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="$emit('toSpecifiedNotation')"
        >
          {{
            $t(
              "organisms.common.bar.app_footer.specified_commodity_transaction_law_notation"
            )
          }}
        </v-btn>
      </v-col>
      <v-col
        class="primary lighten-1 mt-2 text-center white--text"
        cols="12"
        lg="1"
        md="1"
        sm="1"
      >
        <v-btn class="ml-15" color="white" icon small @click="$emit('demo')">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" dark>mdi-movie</v-icon>
            </template>
            <span>{{ $t("template.top_page.demo_start") }}</span>
          </v-tooltip>
        </v-btn>
        <v-btn color="white" icon small @click="$emit('toGuide')">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" dark
                >mdi-head-question-outline</v-icon
              >
            </template>
            <span>操作ガイド（日本語版）</span>
          </v-tooltip>
        </v-btn>
      </v-col>
      <v-col
        class="primary lighten-1 py-1 text-center white--text"
        cols="12"
        lg="12"
        md="12"
        sm="12"
      >
        <strong>- Itamaster -</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    name: "appFooter",
    components: {},
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          simpleIcon: true,
          iconImg: "",
        }),
      },
    },
  };
</script>
