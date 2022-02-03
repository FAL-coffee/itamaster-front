<template>
  <v-card outlined class="text-center" style="height: 302px;">
    <v-row>
      <v-col lg="3" md="1" sm="0"></v-col>
      <v-col lg="6" md="10" sm="12" style="display: block;">
        <div style="width: 100%;">
          <v-img :src="backImg" max-height="300px" style="align-items: center;">
            <div class="text-lg-h1 text-md-h1 text-sm-h1 font-weight-black">
              Itamaster
            </div>
          </v-img>
        </div>
      </v-col>
      <v-col lg="3" md="1" sm="0"></v-col
    ></v-row>
  </v-card>
</template>

<script>
  export default {
    name: "imageCard",
    data() {
      return {
        backImg: require("@/assets/TopPage/backImg.jpg"),
      };
    },
  };
</script>
