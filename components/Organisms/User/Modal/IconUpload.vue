<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{}">
        <input
          ref="input"
          type="file"
          style="display: none;"
          accept="image/*"
          @change="selectImage"
        />
        <v-btn class="mt-5" block @click="btnClick">
          {{ $t("organisms.user.modal.icon_upload.images_upload") }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="text-center mt-5">
          <div
            style="
              width: 400px;
              height: 300px;
              border: 1px solid gray;
              display: inline-block;
            "
          >
            <vue-cropper
              ref="cropper"
              :guides="true"
              :view-mode="2"
              drag-mode="crop"
              :auto-crop-area="0.5"
              :min-container-width="250"
              :min-container-height="180"
              :background="true"
              :rotatable="false"
              :src="imgSrc"
              alt="Source Image"
              :img-style="{ width: '400px', height: '300px' }"
              :aspect-ratio="1"
            ></vue-cropper>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="crop(), close()" class="ml-3">
            {{ $t("organisms.user.modal.icon_upload.crop") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import VueCropper from "vue-cropperjs";
  import "cropperjs/dist/cropper.css";
  export default {
    name: "iconUpload",
    components: {
      VueCropper,
    },
    data() {
      return {
        dialog: false,
        disabled: true,
        imgSrc: "",
        resizedImgSrc: "",
        cropImg: "",
      };
    },
    props: {
      iconImg: {
        type: String,
        require: false,
        default: "",
      },
    },
    computed: {},
    methods: {
      // 画像アップロードがクリックされた場合
      btnClick() {
        // input要素のclickイベントを発火させる
        this.$refs.input.click();
      },
      // 画像が選択された場合
      selectImage(e) {
        const file = e.target.files[0];
        if (!file) return;
        this.$data.dialog = true;
        if (!file.type.includes("image/")) {
          alert("Please select an image file");
          return;
        }
        if (typeof FileReader === "function") {
          const reader = new FileReader();
          reader.onload = (event) => {
            // data.imgSrcにファイルを代入
            this.$data.imgSrc = event.target.result;
            // refs内のcropperjsに、ファイルをセット
            this.$refs.cropper.replace(event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert("Sorry, FileReader API not supported");
        }
      },
      // cropperjsから、crop(切り取り)処理が発火した時
      async crop() {
        this.$data.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        const scope = this;
        this.ImgB64Resize(
          this.$data.cropImg,
          70,
          70,
          await function (img_b64) {
            scope.$data.resizedImgSrc = img_b64;
            return scope.$emit("imgCrop", scope.$data.resizedImgSrc);
          }
        );
      },
      close() {
        this.$data.dialog = false;
      },

      ImgB64Resize(imgB64_src, width, height, callback) {
        // Image Type
        const img_type = imgB64_src.substring(5, imgB64_src.indexOf(";"));
        // Source Image
        const img = new Image();
        img.onload = function () {
          // New Canvas
          let canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          // Draw (Resize)
          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          // Destination Image
          let imgB64_dst = canvas.toDataURL(img_type);
          callback(imgB64_dst);
        };
        img.src = imgB64_src;
      },
    },
  };
</script>
<style>
  /* 下記は円形にするなら必須です。 */
  .cropper-view-box,
  .cropper-face {
    border-radius: 50%;
  }
  /* 下記はできれば必要なスタイルかと思います。（厳密にはスタイルなど必要ありませんが、最低現のスタイルとしてという意味です。） */
  .cropper-container {
    width: 100%;
  }
  /* 下記は必須ではありません。 Sampleを見やすくするために作成しました。 */
  main .triming-image {
    width: 100%;
    height: 100px;
    border: dashed #000 1px;
    cursor: pointer;
  }
  main #trimed_image {
    height: 500px;
  }
</style>
