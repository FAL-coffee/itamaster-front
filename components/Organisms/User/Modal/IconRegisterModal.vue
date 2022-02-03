<template>
  <div class="text-center" style="display: inline-block;">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-on="on" v-bind="attrs" icon @click="open()">
          <userIcon :user="user" size="large" />
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ $t("organisms.user.modal.icon_register_modal.modal_name") }}
          <v-spacer></v-spacer>
          <v-btn elevation="0" fab color="transparent" small @click="close()">
            <v-icon large color="grey">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="text-center mt-5">
          {{ $t("organisms.user.modal.icon_register_modal.preview") }}<br />
          <div class="mt-5 mb-5">
            <userIcon :user="iconData" size="large" class="ml-2" />
            <userIcon :user="iconData" size="midium" class="ml-8" />
            <userIcon :user="iconData" size="small" class="ml-3" />
          </div>

          <div class="mt-8">
            <v-select
              v-model="iconChange"
              :items="[
                $t('organisms.user.modal.icon_register_modal.simple_icon'),
                $t('organisms.user.modal.icon_register_modal.images_icon'),
              ]"
              :label="$t('organisms.user.modal.icon_register_modal.icon_type')"
              solo
            />
          </div>

          <div v-if="iconData.simpleIcon">
            {{ $t("organisms.user.modal.icon_register_modal.icon_color") }}
            <div class="d-flex justify-center mb-5">
              <v-color-picker
                v-model="colors"
                hide-inputs
                hide-canvas
                hide-sliders
                show-swatches
                :swatches="swatches"
                swatches-max-height="140px"
              ></v-color-picker>
            </div>
            {{ $t("organisms.user.modal.icon_register_modal.icon_text") }}
            <v-text-field
              :rules="[rules.required, rules.max]"
              name="input-10-2"
              :label="$t('organisms.user.modal.icon_register_modal.initial')"
              value="Pa"
              counter="3"
              @click:append="show = !show"
              v-model="initialsChange"
              color="accent"
            ></v-text-field>
          </div>

          <div v-else-if="!iconData.simpleIcon">
            {{ $t("organisms.user.modal.icon_register_modal.images_icon") }}
            <br />
            <iconUpload @imgCrop="imgCrop" />
            <v-btn class="mt-5" block @click="iconImgDelete">
              {{ $t("organisms.user.modal.icon_register_modal.images_delete") }}
            </v-btn>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="save()"
            class="ml-3"
          >
            {{ $t("general.save") }}
          </v-btn>
        </v-card-actions>
      </v-card>
      <div>
        <v-snackbar
          v-model="snackbar"
          :timeout="-1"
          :value="true"
          absolute
          bottom
          color="primary"
          center
          text
        >
          <template v-slot:action="{ attrs }">
            <v-btn color="cyan" text v-bind="attrs" @click="snackbar = false">
              {{ $t("general.ok") }}
            </v-btn>
          </template>
          {{
            $t("organisms.user.modal.icon_register_modal.images_delete_message")
          }}
        </v-snackbar>
      </div>
    </v-dialog>
  </div>
</template>
<script>
  import userIcon from "@molecules/User/UserIcon.vue";
  import iconUpload from "@organisms/User/Modal/IconUpload.vue";
  export default {
    name: "iconRegisterModal",
    components: {
      userIcon,
      iconUpload,
    },
    data() {
      return {
        disabled: false,
        dialog: false,
        snackbar: false,
        show: false,
        rules: {
          required: (value) =>
            !!value || this.$t("general.input_alert_msg.required"),
          max: (value) =>
            value.length <= 3 || this.$t("general.input_alert_msg.less_than_3"),
        },
        iconData: {
          initials: "",
          color: "",
          simpleIcon: true,
          iconImg: { url: "" },
        },
        swatches: [
          ["#FF0000", "#AA0000", "#550000"],
          ["#F3A937", "#D17E00", "#8D2A00"],
          ["#00AA00", "#005500", "#003812"],
          ["#00A29B", "#00AAAA", "#005555"],
          ["#0000FF", "#0000AA", "#000055"],
        ],
      };
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          initials: "",
          email: "",
          color: "",
          simpleIcon: false,
          // bgImg:'',
          iconImg: { url: null },
          message: "",
        }),
      },
    },
    mounted() {
      // console.log(this.$props.user)
    },
    computed: {
      iconChange: {
        get() {
          return this.$data.iconData.simpleIcon
            ? this.$t("organisms.user.modal.icon_register_modal.simple_icon")
            : this.$t("organisms.user.modal.icon_register_modal.images_icon");
        },
        set(val) {
          this.$set(
            this.$data.iconData,
            "simpleIcon",
            val ===
              this.$t("organisms.user.modal.icon_register_modal.simple_icon")
          );
          this.$set(
            this.$data.iconData,
            "initials",
            JSON.parse(JSON.stringify(this.$props.user.initials))
          );
          if (
            !!this.$data.iconData.initials &&
            this.$data.iconData.initials.length <= 3
          )
            this.$data.disabled = false;
          return;
        },
      },
      colors: {
        get() {
          return;
        },
        set(val) {
          this.$set(this.$data.iconData, "color", val.hex);
          if (
            !this.$data.iconData.initials ||
            this.$data.iconData.initials.length > 3
          )
            this.$data.disabled = true;
          if (
            !!this.$data.iconData.initials &&
            this.$data.iconData.initials.length <= 3
          )
            this.$data.disabled = false;
        },
      },
      initialsChange: {
        get() {
          return this.$data.iconData.initials;
        },
        set(val) {
          this.$set(this.$data.iconData, "initials", val);
          if (
            !this.$data.iconData.initials ||
            this.$data.iconData.initials.length > 3
          )
            this.$data.disabled = true;
          if (
            !!this.$data.iconData.initials &&
            this.$data.iconData.initials.length <= 3
          )
            this.$data.disabled = false;
        },
      },
    },
    methods: {
      iconImgDelete() {
        this.$data.snackbar = true;
        this.$data.disabled = false;
        return this.$set(this.$data.iconData, "iconImg", { url: "" });
      },
      imgCrop(img) {
        this.$data.disabled = false;
        return this.$set(this.$data.iconData, "iconImg", { url: img });
      },
      open() {
        this.$set(
          this.$data.iconData,
          "initials",
          JSON.parse(JSON.stringify(this.$props.user.initials))
        );
        this.$set(
          this.$data.iconData,
          "color",
          JSON.parse(JSON.stringify(this.$props.user.color))
        );
        this.$set(
          this.$data.iconData,
          "simpleIcon",
          JSON.parse(JSON.stringify(this.$props.user.simpleIcon))
        );
        this.$set(
          this.$data.iconData,
          "iconImg",
          JSON.parse(JSON.stringify(this.$props.user.iconImg))
        );
      },
      save() {
        this.$emit("save", this.$data.iconData);
        this.close();
      },
      close() {
        this.$data.dialog = false;
        this.disabled = true;
      },
    },
  };
</script>
