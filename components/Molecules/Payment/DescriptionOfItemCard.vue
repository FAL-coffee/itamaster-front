<template>
  <v-card elevation="0">
    <v-card-title class="justify-center headline blue lighten-4">
      Itamaster サブスクリプションプランについて
    </v-card-title>

    <v-card-subtitle class="mt-3 headline">
      サブスクリプションプランで出来ること
    </v-card-subtitle>
    <v-card-text class="">
      Itamaster
      サブスクリプションプランに参加することで、ユーザーはチームを作成・運営し、チームの管理者となることが可能となります。
      <br />
      チームには、ほかのユーザーをメールアドレスによって招待することが可能です。
      <br />
      サブスクリプションプランに参加している場合、ユーザーの招待は無制限に可能です。
      <br />
      （チームメンバー人数に制限の追加等の変更が行われる場合は、利用規約に則り、事前にユーザーに通知を行います。）
      <v-row class="mt-3">
        <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
          チーム情報ダイアログ
          <v-img
            :src="teamInformationImg"
            max-height="400"
            min-height="300"
            contain
          />
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
          チームメンバー管理画面
          <v-img
            :src="teamManagementImg"
            max-height="400"
            min-height="400"
            contain
          />
        </v-col>
      </v-row>
      <v-divider class="mt-6" />
      <br class="mt-6" />
      チームには、プロジェクトを作成できます。
      <br />
      サブスクリプションプランに参加している場合、プロジェクトの作成は無制限に可能です。
      <br />
      （プロジェクト作成数に制限の追加等の変更が行われる場合は、利用規約に則り、事前にユーザーに通知を行います。）
      <v-row class="mt-3">
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="text-center">プロジェクト登録ダイアログ</div>
          <v-img
            :src="projectManagementImg"
            max-height="400"
            min-height="400"
            contain
          />
          <span style="white-space: pre-line;"
            >プロジェクトには、以下の項目が設定できます。 ・名前 ・メモ
            ・テストの環境構築手順（現在は利用できません。） ・テスト環境のURL
            ・プロジェクト管理リポジトリのURL
            また、テスト環境のURL、プロジェクト管理リポジトリのURLを設定した場合は、プロジェクトページにリンクが自動で生成されます。
          </span>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="text-center">サマリーレポート（Excel）出力機能</div>
          <v-img :src="projectSummaryImg" max-height="200" min-height="200" />
          <v-img
            :src="projectSummaryDiagramImg"
            max-height="200"
            min-height="200"
          />
          <span style="white-space: pre-line;"
            >各テストスイートに対して、ステップ数を設定している場合、以下の情報を自動で計算し、棒グラフ（3D）付きでExcelに出力します。
            ・完了率 ・テスト密度 ・検出不具合密度 ・不具合発生率
            ・推測残存不具合件数（グラフ無し）
          </span>
        </v-col>
      </v-row>
      <v-divider class="mt-6" />
      <br class="mt-6" />
      プロジェクトには、テストスイートを無制限に作成できます。
      <v-row class="mt-3">
        <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
          テストスイート登録ダイアログ
          <v-img
            :src="testsuiteManagementImg"
            max-height="400"
            min-height="400"
            contain
          />
          <div class="pt-5">
            <v-divider></v-divider>
            プロジェクト全体での進捗バー
          </div>
          <v-img :src="testsuiteBarImg" max-height="400" min-height="400" />
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
          テストスイートの一覧画面
          <v-img
            :src="testsuiteTableImg"
            max-height="400"
            min-height="400"
            contain
          />
          <div class="pt-5">
            <v-divider></v-divider>
            テストスイート単位での進捗バー
          </div>
          <v-img
            :src="testsuiteInfoBarImg"
            max-height="400"
            min-height="400"
            contain
          />
        </v-col>
      </v-row>
      <span style="white-space: pre-line;">
        Itamasterでは、テストスイート内のテストケースの件数、「完了」「再テスト」「問題」「未実行」の、それぞれの状態の件数を常時観測します。
        その機能によって、プロジェクト内に何件のテストが登録されていて、プロジェクト全体での進捗率をリアルタイムで監視することが出来ます。
        また、テストスイートの一覧テーブルには、当該のテストスイートの完了率を表示でき、さらにソートが可能です。
      </span>
      <v-divider class="mt-6" />
      <br class="mt-6" />
      テストスイートには、テストケースを無制限に作成出来ます。
      <v-row class="mt-3">
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="text-center">テストケース登録ダイアログ</div>
          <v-img
            :src="testcaseManagementImg"
            max-height="400"
            min-height="400"
            contain
          />
          <span style="white-space: pre-line;"
            >テストケースには、以下の項目を設定できます。 ・タイトル
            ・テスト担当者 ・重要度 ・前提条件（複数項目の設定が可能）
            ・手順（複数項目の設定が可能） ・結果（複数項目の設定が可能）
          </span>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="text-center">テストケース一覧画面</div>
          <v-img
            :src="testcaseTableImg"
            max-height="400"
            min-height="400"
            contain
          />
          <span style="white-space: pre-line;">
            テストケースの一覧画面では、登録ダイアログによって作成したテストケースの情報を一覧で表示します。
            その際、ステータス（完了、未実行等の状態）は色分けされたバッジによって表示され、さらに、ソートも可能です。
            重要度、テスト実行者等の項目も同様にソートが可能となっており、また、テストケースをタイトルから、右上の検索フォームによって絞り込み表示することも可能です。
            感覚的に操作が可能なUIとなっています。
          </span>
        </v-col>
      </v-row>
      <v-divider class="mt-6" />
      <br class="mt-6" />
      テストの実行時は、テストスイート毎に、自分がテスト担当者のテストケースのみが表示されます。
      <v-img :src="testcaseRunning" max-height="600" min-height="600" contain />
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "descriptionOfItemCard",
    data() {
      return {
        teamManagementImg: require("@/assets/DescriptionCard/01/team_management.png"),
        teamInformationImg: require("@/assets/DescriptionCard/01/team_information.png"),
        projectManagementImg: require("@/assets/DescriptionCard/01/project_management.png"),
        projectSummaryImg: require("@/assets/DescriptionCard/01/project_summary.png"),
        projectSummaryDiagramImg: require("@/assets/DescriptionCard/01/project_summary_diagram.png"),
        testsuiteManagementImg: require("@/assets/DescriptionCard/01/testsuite_management.png"),
        testsuiteTableImg: require("@/assets/DescriptionCard/01/testsuite_table.png"),
        testsuiteBarImg: require("@/assets/DescriptionCard/01/testsuite_bar.png"),
        testsuiteInfoBarImg: require("@/assets/DescriptionCard/01/testsuite_info_bar.png"),
        testcaseManagementImg: require("@/assets/DescriptionCard/01/testcase_management.png"),
        testcaseTableImg: require("@/assets/DescriptionCard/01/testcase_table.png"),
        testcaseRunning: require("@/assets/DescriptionCard/01/testcase_running.png"),
      };
    },
  };
</script>
