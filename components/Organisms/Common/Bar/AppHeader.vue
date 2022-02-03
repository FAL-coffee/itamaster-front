<template>
  <div>
    <v-app-bar app color="cyan" dark>
      <v-toolbar-title>Itamaster</v-toolbar-title>
      <v-menu right bottom>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <v-btn class="ml-5" outlined
              >{{ $t("organisms.common.bar.app_header.language")
              }}<v-icon>mdi-chevron-down</v-icon></v-btn
            >
          </div>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <linkBtn
                icon="mdi-arrow-right-bold-outline"
                :text="$t('organisms.common.bar.app_header.english')"
                @linkClick="$emit('en')"
              />
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <linkBtn
                icon="mdi-arrow-right-bold-outline"
                :text="$t('organisms.common.bar.app_header.japanese')"
                @linkClick="$emit('jp')"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="ml-15" color="white" icon small @click="$emit('toGuide')">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" dark
              >mdi-head-question-outline</v-icon
            >
          </template>
          <span>操作ガイド（日本語版）</span>
        </v-tooltip>
      </v-btn>

      <v-btn class="ml-15" color="white" icon small @click="$emit('demo')">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" dark>mdi-movie</v-icon>
          </template>
          <span>{{ $t("template.top_page.demo_start") }}</span>
        </v-tooltip>
      </v-btn>
      <v-spacer></v-spacer>

      <div v-if="user.id != 0" style="display: inline-flex;">
        <bellMenu
          :unreadCount="unreadCount"
          :invitations="invitations"
          @bellMenuOpen="$emit('bellMenuOpen')"
          @join="join"
          @reject="reject"
        />

        <userInfoModal :user="user" @profile="$emit('profile', user.id)" />

        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="ml-3 mt-1 mr-5">
              <v-btn
                elevation="0"
                fab
                color="cyan"
                small
                dark
                @click="$emit('dataAllLoad')"
              >
                <v-icon large dark>mdi-reload</v-icon>
              </v-btn>
            </div>
          </template>
          <span>{{
            $t("organisms.common.bar.app_header.data_all_reload")
          }}</span>
        </v-tooltip>

        <v-menu right bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>
                <signOutConfMessage @signout="$emit('signout')" />
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <linkBtn
                  icon="mdi-arrow-right-bold-outline"
                  :text="$t('general.profile_card')"
                  @linkClick="$emit('profile', user.id)"
                />
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <linkBtn
                  icon="mdi-arrow-right-bold-outline"
                  :text="$t('general.profile_edit')"
                  @linkClick="$emit('profileRegist')"
                />
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <linkBtn
                  icon="mdi-arrow-right-bold-outline"
                  :text="$t('general.to_payment')"
                  @linkClick="$emit('toPayment')"
                />
              </v-list-item-title>
            </v-list-item>
            <!--
              <v-list-item>  
                <v-list-item-title>	
                    <linkBtn icon="mdi-arrow-right-bold-outline" text="change e-mail" @linkClick="$emit('changeEmail')"/>
                </v-list-item-title>
              </v-list-item>
              -->
            <!--
              <v-list-item>  
                <v-list-item-title>	
                    <linkBtn icon="mdi-arrow-right-bold-outline" text="change password" @linkClick="$emit('changePassword')"/>
                </v-list-item-title>
              </v-list-item>
              -->
            <!--
              <v-list-item>  
                <v-list-item-title>	
                    <linkBtn icon="mdi-arrow-right-bold-outline" text="my task list" @linkClick="$emit('myTaskList')"/>
                </v-list-item-title>
              </v-list-item>
              -->
          </v-list>
        </v-menu>
      </div>
      <!-- 未ログイン時、SING UP , SIGN INボタンのみを表示する -->
      <div v-else-if="user.id === 0">
        <v-btn outlined @click="$emit('signup')">{{
          $t("general.signup")
        }}</v-btn>
        <v-btn outlined @click="$emit('signin')">{{
          $t("general.signin")
        }}</v-btn>
      </div>
    </v-app-bar>
    <notLatestDataBar
      :notLatestData="notLatestData"
      @dataLoad="$emit('dataLoad')"
    />
  </div>
</template>
<script>
  import notLatestDataBar from "@molecules/Common/NotLatestDataBar.vue";
  import linkBtn from "@molecules/Common/LinkBtn.vue";
  import signOutConfMessage from "@molecules/Msg/SignOutConfMessage.vue";
  import userInfoModal from "@organisms/User/Modal/UserInfoModal.vue";
  import bellMenu from "@organisms/Common/Bar/BellMenu/BellMenu.vue";
  export default {
    name: "appHeader",
    components: {
      notLatestDataBar,
      linkBtn,
      userInfoModal,
      signOutConfMessage,
      bellMenu,
    },
    props: {
      user: {
        type: Object,
        require: false,
        default: () => ({
          id: 0,
          name: "",
          simpleIcon: true,
          iconImg: "",
          invitations: [],
        }),
      },
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
      notLatestData: {
        type: Boolean,
        require: false,
        default: false,
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
