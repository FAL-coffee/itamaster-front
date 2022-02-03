<template>
  <v-card elevation="0">
    <v-card-title class="justify-center headline blue lighten-4">
      契約について
    </v-card-title>

    <v-card-subtitle class="mt-3 headline">
      注意事項
    </v-card-subtitle>

    <v-card-text>
      <div>
        <span style="color: blue;">
          Itamaster サブスクリプションプラン
        </span>
        <br />
        <v-divider></v-divider>
        月額1,280円で、チームの運営が可能となる自動更新の月額有料（サブスクリプション型）サービスです。
        <br />
        解約をしない限り、自動的に更新され、毎月料金が発生します。
        <br />
        有効期間は、購入後１か月です。
        <br />
        支払いはクレジットカードのみとなっております。
      </div>

      <div class="mt-3">
        <span style="color: blue;">
          トライアル期間
        </span>
        <br />
        <v-divider></v-divider>
        14日間、「Itamaster
        サブスクリプションプラン」を無料でお試しいただけます。
        <br />
        無料トライアル期間だけで終了する場合は、有効期間が終了する日の日本時間0：00までに解約手続き（自動更新の停止）をする必要があります。
        <br />
        それ以降に解約した場合、自動的に更新され、月額料金が発生します。
        <br />
        <span style="color: red;">
          無料トライアルは、初回の契約時のみ利用可能です。
          <br />
          無料トライアルを利用したことのあるユーザーは、無料トライアル付きのプランを選択することは出来ません。
        </span>
      </div>

      <div class="mt-3">
        <span style="color: blue;">
          自動更新
        </span>
        <br />
        <v-divider></v-divider>
        「Itamaster
        サブスクリプションプラン」を購入した場合、手続きの必要なく契約が自動的に更新されます。
        <br />
        自動更新を停止する場合、解約手続き（自動更新の停止）をする必要があります。
        <br />
        解約手続き（自動更新の停止）は、有効期間が終了する前日の日本時間0:00までに行ってください。
      </div>

      <div class="mt-3">
        <span style="color: blue;">
          解約（自動更新の停止）
        </span>
        <br />
        <v-divider></v-divider>
        「Itamaster
        サブスクリプションプラン」の解約手続きは、以下の方法で行うことが出来ます。
        <br />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-img
              :src="cancellationMethod"
              max-height="400"
              min-height="400"
              contain
            />
            <span style="white-space: pre-line;">
              サブスクリプションプランに契約している場合は、上のような解約フォームが、画面右のクレジットカードの画像下に表示されます。
            </span>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-img
              :src="cancellationConf"
              max-height="400"
              min-height="400"
              contain
            />
            <span style="white-space: pre-line;">
              解約のための確認メッセージが表示されます。
              解約を選択し、サブスクリプションプランを解約します。
            </span>
          </v-col>
        </v-row>
        <br />
        解約手続き（自動更新の停止）を行ったとしても、有料会員オプション（チームの作成・運営）はすぐには凍結されず、有料期間終了日まではお使いいただけます。
        <br />
        解約手続き（自動更新の停止）は、有効期間が終了する前日の日本時間0:00までに行ってください。
        <br />
        それ以降に行った場合、月額料金が発生します。
        <br />
      </div>
    </v-card-text>

    <v-card-subtitle class="mt-3 headline">
      その他の注意事項
    </v-card-subtitle>
    <v-card-text>
      <div class="mt-3">
        ・ご契約内容、クレジットカード情報は、暗号化されて送信されます。
        <br />
        ・返金、返品、キャンセル、有効期間の延長等については、利用規約を御覧ください。
        <br />
        ・個人情報の取り扱いについては、プライバシーポリシーを御覧ください。
        <br />
        ・特定商品取引法に基づく表記は、画面下部のフッターより御覧いただけます。
        <br />
        ・その他、お問い合わせは画面下部のフッターより、お問い合わせフォームを利用してお願いいたします。
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "informationCard",
    data() {
      return {
        cancellationConf: require("@/assets/InformationCard/cancellationConf.png"),
        cancellationMethod: require("@/assets/InformationCard/cancellationMethod.png"),
      };
    },
  };
</script>
