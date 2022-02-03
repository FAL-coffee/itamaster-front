<template>
  <v-card elevation="4" max-width="1800">
    <v-card-title class="justify-center">
      {{ $t("organisms.common.privacy_policy.privacy_policy_card.title") }}
    </v-card-title>
    <v-card-text>
      {{ $t("organisms.common.privacy_policy.privacy_policy_card.preamble") }}
      <div
        v-for="(content, index) in $t(
          'organisms.common.privacy_policy.privacy_policy_card.contents'
        )"
        :key="index"
      >
        <div v-for="(content_lg, index_lg) in content" :key="index_lg">
          <!-- contentの一行目は、タイトル行であるためstrongタグによって表示 -->
          <strong v-if="index_lg === 0"
            ><div class="mt-5">{{ content_lg }}</div></strong
          >
          <!-- 二行目以降は、Objectの場合とStringの場合がある。 -->
          <div v-else-if="index_lg != 0">
            <!-- タイトル直下二行目がString型である場合は、該当条にリストが存在しない場合である -->
            <div v-if="typeof content_lg === 'string'">
              <span style="white-space: pre-line;">{{ content_lg }}</span>
            </div>

            <!-- Object型の場合、ループを開始。（i18nのJSON内の配列は、typeofマクロではObjectに分類されるため） -->
            <div v-else-if="typeof content_lg === 'object'">
              <div
                v-for="(content_mid, index_mid) in content_lg"
                :key="index_mid"
              >
                <!-- content_midがString型の場合、index_midを「　1.　」のように文頭に設置し、content_mid文を表示する -->
                <div v-if="typeof content_mid === 'string'">
                  <div>
                    <span style="white-space: pre-line;"
                      >{{ index_mid + 1 }}. {{ content_mid }}</span
                    >
                  </div>
                </div>

                <!-- content_midがObject型の場合、ループを開始。 -->
                <div v-if="typeof content_mid === 'object'">
                  <div
                    v-for="(content_sm, index_sm) in content_mid"
                    :key="index_sm"
                  >
                    <!-- content_smがstringである場合、index_smを「　　(1)　」のように文頭に設置し、content_smを表示する -->
                    <div v-if="typeof content_sm === 'string'">
                      <!-- index_smが0の時のみ、index_midタイトル部のレイアウトで表示する -->
                      <div v-if="index_sm === 0">
                        <span style="white-space: pre-line;"
                          >{{ index_mid + 1 }}. {{ content_sm }}</span
                        >
                      </div>
                      <div v-else class="ml-7">
                        <span style="white-space: pre-line;"
                          >({{ index_sm }}) {{ content_sm }}</span
                        >
                      </div>
                    </div>
                    <!-- content_smがobjectである場合、ループを開始（最小） -->
                    <div v-else-if="typeof content_sm === 'object'">
                      <div
                        v-for="(content_min, index_min) in content_sm"
                        :key="index_min"
                        style=""
                      >
                        <!-- index_minを「　　　<1>　」のように文頭に設置し、content_minを表示する -->
                        <div v-if="index_min === 0" class="ml-7">
                          <span style="white-space: pre-line;"
                            >({{ index_sm }}) {{ content_min }}</span
                          >
                        </div>
                        <div v-else class="ml-15">
                          <span style="white-space: pre-line;"
                            >&lt;{{ index_min }}&gt; {{ content_min }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "privacyPolicyCard",
  };
</script>
