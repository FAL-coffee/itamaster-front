<template>
  <div style="background: #8cd4f3;">
    <v-row>
      <v-col lg="1" md="1" sm="1" xs="0" />
      <v-col lg="6" md="5" sm="11" xs="12">
        <div class="mt-8">
          <div class="text-h4">
            <u>
              {{ $t("organisms.top.simple_design.can_intuition") }}
            </u>
          </div>
          <div class="mt-5">
            <v-row>
              <v-col
                class="hidden-sm-and-down"
                cols="12"
                lg="2"
                md="1"
                sm="0"
                xs="0"
              />
              <v-col cols="12" lg="8" md="10" sm="12" xs="12" class="text-h4">{{
                $t("organisms.top.simple_design.many")
              }}</v-col>
              <v-col cols="12" lg="2" md="1" sm="0" xs="0" />
            </v-row>
            <v-row>
              <v-col cols="12" lg="2" md="1" sm="0" xs="0" />
              <v-col cols="12" lg="2" md="1" sm="1" xs="1" />
              <v-col cols="12" lg="8" md="10" sm="11" xs="11" class="text-h4">{{
                $t("organisms.top.simple_design.simple")
              }}</v-col>
            </v-row>
          </div>
          <v-row class="mt-8">
            <v-col cols="12" lg="3" md="2" sm="2" xs="2" />
            <v-col cols="12" lg="6" md="8" sm="8" xs="8" class="text-h4">
              <div class="hidden-md-and-down" style="width: 100%;">
                <accessButtons
                  @signin="$emit('signin')"
                  @signup="$emit('signup')"
                /></div
            ></v-col>
            <v-col cols="12" lg="3" md="2" sm="2" xs="2" />
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" xs="12">
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <v-img :src="many1" max-height="300" contain />
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <v-img :src="many2" max-height="300" contain />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <v-img :src="many3" max-height="300" contain />
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="6" xs="6">
            <v-img :src="many4" max-height="300" contain />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="1" md="2" sm="2" xs="2" />
    </v-row>
  </div>
</template>
<script>
  import accessButtons from "@organisms/Top/AccessButtons";
  export default {
    name: "simpleDesign",
    components: { accessButtons },
    data() {
      return {
        many1: require("@/assets/TopPage/many.jpg"),
        many2: require("@/assets/TopPage/many2.jpg"),
        many3: require("@/assets/TopPage/many3.jpg"),
        many4: require("@/assets/TopPage/many4.jpg"),
      };
    },
  };
</script>
