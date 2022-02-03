<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-card elevation="3" height="740" style="overflow-y: auto;">
          <v-card-title class="justify-center headline grey lighten-2">
            Itamaster 操作ガイド
          </v-card-title>
          <section class="it-MdContent ml-5">
            <div id="personal-public-article-body">
              <div>
                <h1>
                  <span id="サイトの概要" class="fragment"></span
                  ><a
                    href="#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E6%A6%82%E8%A6%81"
                    ><i class="fa fa-link"></i></a
                  >サイトの概要
                </h1>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/70370ba9b6ddb147346e13d93f757ab3c1dd841d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31623466633164642d383735612d626431312d323637632d3233656432356163316661342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1b4fc1dd-875a-bd11-267c-23ed25ac1fa4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f76043f9ab4518dc031be6864a7e4432"
                      alt="itamaster_twitter_icon.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1b4fc1dd-875a-bd11-267c-23ed25ac1fa4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1b4fc1dd-875a-bd11-267c-23ed25ac1fa4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=fe3651f6c10b578bf47c3a933ccf8779 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  Itamasterは、Web上で統合テストを設計、管理し、直感的な操作で実行が可能なサービスです。
                </p>

                <p>
                  テストには前提条件、手順、期待する結果を複数登録でき、実行ログは全てサーバーに保存されます。<br />
                  チームには他のユーザーを招待し、複数人で同時にテストの管理、実行が可能です。
                </p>

                <p>
                  また、システムはテスト結果を複数の選択肢からテンプレートを選択し、Excelへの出力が可能です。<br />
                  （テスト結果一覧表、テストサマリーレポートの出力が現在可能です。詳細やイメージは後述「プロジェクト」章にて解説します。）<br />
                  Excelを編集する際のCPUへの負荷と、作業時のストレスを無くすことが出来ます。
                </p>

                <p>
                  言語切り替え機能が実装されています。<br />
                  英語と日本語によってシステムを利用可能です。
                </p>

                <table>
                  <tbody></tbody>
                </table>

                <h1>
                  <span id="itamasterの使い方" class="fragment"></span
                  ><a href="#itamaster%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9"
                    ><i class="fa fa-link"></i></a
                  >Itamasterの使い方
                </h1>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/5fa9e94a320fea50c074a3518ea22580fbfdef48/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f61656466393338642d306331372d366337342d373738612d3530393861646464343634332e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Faedf938d-0c17-6c74-778a-5098addd4643.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=fc81ef49f560e3ff2c699fd9d3d3e206"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/aedf938d-0c17-6c74-778a-5098addd4643.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Faedf938d-0c17-6c74-778a-5098addd4643.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=6870f01d7283036a3ce4b54a901ecd82 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h2>
                  <span id="アカウント作成ログイン" class="fragment"></span
                  ><a
                    href="#%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >アカウント作成・ログイン
                </h2>

                <h3>
                  <span id="アカウント作成" class="fragment"></span
                  ><a
                    href="#%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90"
                    ><i class="fa fa-link"></i></a
                  >アカウント作成
                </h3>

                <p>
                  Itamasterを利用するにあたり、アカウント作成が必要になります。<br />
                  アカウント作成を行うには、トップ画面各所や、ヘッダー部右側に配置されている「アカウント登録」（英語表示時は、「SIGN
                  UP」）ボタンをクリックし、アカウント登録画面を表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/cd0387e18554f815f6799145d49dfadb02a5dbe1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39303037306435362d383366302d383138382d313236652d6235346463663966613636352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F90070d56-83f0-8188-126e-b54dcf9fa665.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=cab34af36ceba2d7f3dfd538ce06a7d3"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/90070d56-83f0-8188-126e-b54dcf9fa665.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F90070d56-83f0-8188-126e-b54dcf9fa665.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a21a2cd4a0c3d346cdee65821ca179dc 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>アカウント登録画面では、以下の情報を入力します。</p>

                <ul>
                  <li>名前（他のユーザーに表示されます。）</li>
                  <li>メールアドレス（他のユーザーに表示されます。）</li>
                  <li>
                    パスワード（絶対に忘れないようにしてください。確認のため、同じ入力を二度行います。）
                  </li>
                </ul>

                <p>
                  それらの情報を正しいフォーマットで入力したうえで、「プライバシーポリシー」、「利用規約」、「特定商品取引法に基づく表記」への同意を表明するチェックボックスをONにすると、カード右下の「アカウント登録」（「SIGN
                  UP」）ボタンが有効になり、クリックが可能になります。<br />
                  アカウント登録が完了した時点で、後述「チーム」章の、自分が所属しているチームの一覧画面にリダイレクトされます。
                </p>

                <h1>
                  <span id="ログイン" class="fragment"></span
                  ><a href="#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >ログイン
                </h1>

                <p>
                  ログインを行うには、トップ画面各所や、ヘッダー部右側に配置されている「ログイン」（英語表示時は、「SIGN
                  IN」）ボタンをクリックし、ログイン画面を表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/fe6b079ef619f2128c1c245f272b39e4fb9f9e6f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f65633038626462302d623061622d646436622d316634372d6631326237653530356335322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fec08bdb0-b0ab-dd6b-1f47-f12b7e505c52.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=fe348a7ae9935d8af3e27a2bb31b5555"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/ec08bdb0-b0ab-dd6b-1f47-f12b7e505c52.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fec08bdb0-b0ab-dd6b-1f47-f12b7e505c52.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ad1241ace97c6bca12ce2f4209ab47a5 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  正しい自分のメールアドレスとパスワードを入力することで、ログインが完了し、後述「チーム」章の、自分が所属しているチームの一覧画面にリダイレクトされます。
                </p>

                <h1>
                  <span id="チーム" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0"
                    ><i class="fa fa-link"></i></a
                  >チーム
                </h1>

                <h2>
                  <span
                    id="チーム一覧画面自分が所属しているチームの一覧画面"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E4%B8%80%E8%A6%A7%E7%94%BB%E9%9D%A2%E8%87%AA%E5%88%86%E3%81%8C%E6%89%80%E5%B1%9E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E4%B8%80%E8%A6%A7%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >チーム一覧画面（自分が所属しているチームの一覧画面）
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/0907f260ec7cf6ebeb82d1676ced0874a4a8b3ba/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66623864343264382d316436382d616334652d616535362d3635633734396135653261622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ffb8d42d8-1d68-ac4e-ae56-65c749a5e2ab.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=e14c273c8183aef31050928712b25b2c"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/fb8d42d8-1d68-ac4e-ae56-65c749a5e2ab.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ffb8d42d8-1d68-ac4e-ae56-65c749a5e2ab.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=bd8806aac2759541d6089d21ddb37ee7 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  この画面では、自分が所属しているチームを一覧表示・作成できます。<br />
                  自分が参加しているチーム、自分が運営を行っているチームの全てをこの画面で確認でき、チームに対するアクションが集結している画面です。<br />
                  また、この画面はログイン後のホーム画面で、フッター左部の「ホームに戻る」（「HOME」）ボタンをクリックした場合、この画面に遷移します。
                </p>

                <h3>
                  <span id="チームカード" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%82%AB%E3%83%BC%E3%83%89"
                    ><i class="fa fa-link"></i></a
                  >チームカード
                </h3>

                <p>
                  ある一つのチームの情報を表示し、チームに対するアクションを行うことが出来ます。<br />
                  「プロジェクト」（「PROJECT
                  PAGE」）と書かれているリンクボタンをクリックした場合、後述する「プロジェクト」章の「プロジェクト選択画面」に画面遷移します。<br />
                  カード右下に表示されている四種のボタンについては、後述「チーム」章内の「チームカードアクションボタン」で詳細な記述を行います。<br />
                  また、チームは以下の四種類の状態を有しています。
                </p>

                <h4>
                  <span
                    id="チームが有効管理者が有料会員プランに加入中であるでありログインユーザーがチームの管理者である場合の表示"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E6%9C%89%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%82%E3%82%8B%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >チームが有効（管理者が有料会員プランに加入中である）であり、ログインユーザーがチームの管理者である場合の表示
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/f3b4158d55f0526d9ea6ff8726d827c83a35f99d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f64633939333134332d316433332d626435312d653438642d6131613337616562396130392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fdc993143-1d33-bd51-e48d-a1a37aeb9a09.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=e1e255c0b4a26a17c24313d83cf54790"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/dc993143-1d33-bd51-e48d-a1a37aeb9a09.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fdc993143-1d33-bd51-e48d-a1a37aeb9a09.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=59375e092d00331b743fcb5fbdf58475 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span
                    id="チームが有効でありログインユーザーがチームの管理者ではない場合の表示"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E6%9C%89%E5%8A%B9%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >チームが有効であり、ログインユーザーがチームの管理者ではない場合の表示
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/4fb11cb7c2d439ef2440417ebfb3cb27565bf439/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66356263336434662d616564612d303464302d616331302d3362636663626338626630372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff5bc3d4f-aeda-04d0-ac10-3bcfcbc8bf07.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=c467259b494116d325ba9eebbbac76a6"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/f5bc3d4f-aeda-04d0-ac10-3bcfcbc8bf07.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff5bc3d4f-aeda-04d0-ac10-3bcfcbc8bf07.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=6e2db2d877af6b32591b7d52f1f78569 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span
                    id="チームが無効管理者が有料会員プランに加入中ではないでありログインユーザーがチームの管理者である場合の表示"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E7%84%A1%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >チームが無効（管理者が有料会員プランに加入中ではない）であり、ログインユーザーがチームの管理者である場合の表示
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/125e096fc8e4ae6b71072f6b66b0197b8e103716/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39343637323238382d623835342d366465342d343332382d6261666431633162366336322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F94672288-b854-6de4-4328-bafd1c1b6c62.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=4de27920f44c78a609d129edd7c9419a"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/94672288-b854-6de4-4328-bafd1c1b6c62.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F94672288-b854-6de4-4328-bafd1c1b6c62.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=1ec0ccad46b357c6d7ee9a56099b808a 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span
                    id="チームが無効管理者が有料会員プランに加入中ではないでありログインユーザーがチームの管理者でない場合の表示"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E7%84%A1%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >チームが無効（管理者が有料会員プランに加入中ではない）であり、ログインユーザーがチームの管理者でない場合の表示
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/6d03fdd6916ecbba8628271c5321bcfed41b46a1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63633666343331382d323134632d393938352d373264632d3663336165636133643764622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcc6f4318-214c-9985-72dc-6c3aeca3d7db.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=92d6bd3b29ef54cf62aa26311d13a76b"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/cc6f4318-214c-9985-72dc-6c3aeca3d7db.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcc6f4318-214c-9985-72dc-6c3aeca3d7db.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=9575870eec084be879b3c0b7233de1ef 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h3>
                  <span
                    id="チームカードアクションボタン"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%82%AB%E3%83%BC%E3%83%89%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >チームカードアクションボタン
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/baa44c12ef30d416aa47ee2723b5298183a7cbc1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34613030623237652d656336652d383639332d346236332d6563656561366138346163372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F4a00b27e-ec6e-8693-4b63-eceea6a84ac7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=8a2af5de933ed4601d282560d4de7753"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/4a00b27e-ec6e-8693-4b63-eceea6a84ac7.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F4a00b27e-ec6e-8693-4b63-eceea6a84ac7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0d492a5b6291d8ca94ccc14ad3f71813 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/1f51b57f746b3c14595b5719164d1be5781173c1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62666466393661652d356135372d663031382d313064342d3834373637383562383862342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbfdf96ae-5a57-f018-10d4-8476785b88b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0866dac27b9d277522d4f9468b4c3898"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/bfdf96ae-5a57-f018-10d4-8476785b88b4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbfdf96ae-5a57-f018-10d4-8476785b88b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0b4ed42745687188d29d06d095dd1713 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="informationボタン" class="fragment"></span
                  ><a href="#information%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >Informationボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/4bc60133439c28a67cce13d65b4a5d9aa39984cf/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31393861333962322d363237632d653535302d333130612d6633316330303033633230382e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F198a39b2-627c-e550-310a-f31c0003c208.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=c7e5032e7fe860eccc6a789f01d93565"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/198a39b2-627c-e550-310a-f31c0003c208.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F198a39b2-627c-e550-310a-f31c0003c208.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=7d55c8e80d1e85ba6dc53a00d27f9caf 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Informationボタンは、チームがどんな状態であっても、チームメンバーが誰でもクリック可能な唯一のボタンです。<br />
                  チームの情報や状況を表示するInformationダイアログを表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/2362158e54710b6c23bf3bb7431392b68bf557be/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38363564346137302d366564352d633562612d333931662d6365643331643732313833332e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F865d4a70-6ed5-c5ba-391f-ced31d721833.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ce4132d8babc77debbde35b7e0adc70e"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/865d4a70-6ed5-c5ba-391f-ced31d721833.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F865d4a70-6ed5-c5ba-391f-ced31d721833.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b93625679663cf1ce5ab2f69904c44d2 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="editボタン" class="fragment"></span
                  ><a href="#edit%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >Editボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/acf17f00b098ce5803588ef2c0761cc89c643b7e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31633130383739312d626538632d343233642d343564322d3065626664666132666363312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=5637c2a71d0a430788b8f9f6544321b7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cd704681e0a4ee302b23b20c4abb7a02 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Editボタンはクリックされた時、チームの情報や状況を編集するためのダイアログを表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/7451354db437876b74230735c03e16828f499930/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30303063333866392d653430392d383537652d633066372d3466623661303537343731322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F000c38f9-e409-857e-c0f7-4fb6a0574712.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f00960657360b359cf558d7282c6c581"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/000c38f9-e409-857e-c0f7-4fb6a0574712.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F000c38f9-e409-857e-c0f7-4fb6a0574712.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=6dcceb92f58c83c1c3a6eaf5fe3ff568 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームの登録時は、以下の項目が登録可能です。
                </p>

                <h5>
                  <span id="チームid" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0id"
                    ><i class="fa fa-link"></i></a
                  >チームID
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/891ef2bbfd29924f22ab98a9ac372feba1070af7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36306538636666392d363164382d623866332d343261622d6330376135343832366633302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F60e8cff9-61d8-b8f3-42ab-c07a54826f30.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=622b7f111b6b14e45c0a8d6d63dca0c6"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/60e8cff9-61d8-b8f3-42ab-c07a54826f30.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F60e8cff9-61d8-b8f3-42ab-c07a54826f30.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=d50a75c954179089b7325de7cc2ef9e7 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームIDは、チームを識別するためのユニークな文字列です。<br />
                  他に使われていないIDを取得する必要があるため、登録前にチェックが必要となっています。<br />
                  <a
                    href="https://camo.qiitausercontent.com/f73a1d7710eb5d69720b5cc21c93d62de4b5c851/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38376331383734612d303631372d643833332d393536352d3239663764386463356532332e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F87c1874a-0617-d833-9565-29f7d8dc5e23.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0c61dd9f223e416f71f632d348732bd7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/87c1874a-0617-d833-9565-29f7d8dc5e23.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F87c1874a-0617-d833-9565-29f7d8dc5e23.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0b93e5bf9045ef9c05c12819867b0597 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ID入力後、チェックされていない状態では、テキストボックス横のアイコンが黄色く警告表示されます。<br />
                  アイコンにカーソルを重ねると、「NotChecked」（チェックが行われていません）と表示されます。<br />
                  アイコン横の再読み込みのアイコンをクリックすることで、サーバーとの通信が行われ、入力されているチームIDが登録可能であるかをユーザーに告知します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/6856a2b0bfad04c486edf9a05d7ba77ff7dfd628/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30633634373036322d353030322d636134302d353039302d6236373962326335363430392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0c647062-5002-ca40-5090-b679b2c56409.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=23412df39b2639e80c6d5f35fdd67edd"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/0c647062-5002-ca40-5090-b679b2c56409.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0c647062-5002-ca40-5090-b679b2c56409.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=da04339c5ecbb31c016bb98fae2ae52a 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/28fb085831d376b3630638570ef737f28863aee9/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38613031653538622d336161382d386634662d623033612d6630353237666263343734632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8a01e58b-3aa8-8f4f-b03a-f0527fbc474c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=c66efa899afd232265393be3050f2417"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8a01e58b-3aa8-8f4f-b03a-f0527fbc474c.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8a01e58b-3aa8-8f4f-b03a-f0527fbc474c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=2cf0784e58c6b5aa1231b51536f379ba 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h5>
                  <span id="チーム名" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D"
                    ><i class="fa fa-link"></i></a
                  >チーム名
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/0392f08486a9ddf19a42987eb0f4f63cad03bbb3/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38646463363237302d643734372d383932372d653964382d3033653162353136366465642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8ddc6270-d747-8927-e9d8-03e1b5166ded.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=3682526de97308cdc0b9e98035a923c1"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8ddc6270-d747-8927-e9d8-03e1b5166ded.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8ddc6270-d747-8927-e9d8-03e1b5166ded.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=891c94c07720df2fa327318ca2047a02 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームの名前です。チームカード上部に表示されるのは、チーム名となります。
                </p>

                <h5>
                  <span id="チームメモ" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%A2"
                    ><i class="fa fa-link"></i></a
                  >チームメモ
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/957534d9efb6c8e2150787ae9ef0c38ac2566e05/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38353839633162632d336236642d343262332d333233302d3764316135326563313135612e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8589c1bc-3b6d-42b3-3230-7d1a52ec115a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a0e40b8359d5afd2e77d45725247dfd4"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8589c1bc-3b6d-42b3-3230-7d1a52ec115a.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8589c1bc-3b6d-42b3-3230-7d1a52ec115a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cb94fa500341e9dbaef77e41ec91525f 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームのメモです。Informationダイアログから、チームメンバーはいつでも閲覧可能です。
                </p>

                <h5>
                  <span id="プライベート設定" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A"
                    ><i class="fa fa-link"></i></a
                  >プライベート設定
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/50899af1fcdc114d3675006c0328907ffdfd0cf1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31643834373861622d306630342d333037632d643563642d6166336139663336396562362e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1d8478ab-0f04-307c-d5cd-af3a9f369eb6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a274fd1635c31b34db4dfce978e530d7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1d8478ab-0f04-307c-d5cd-af3a9f369eb6.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1d8478ab-0f04-307c-d5cd-af3a9f369eb6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=7d92ddb201652ab4bceadf5ddfcf3c91 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/0a665e4919665f2c545eab158a976522f8c919fc/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36313638633861632d303732612d373662362d626234622d6361623037333333613136302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6168c8ac-072a-76b6-bb4b-cab07333a160.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=e833e8ec71a7baab08d72977d578d664"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/6168c8ac-072a-76b6-bb4b-cab07333a160.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6168c8ac-072a-76b6-bb4b-cab07333a160.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b651bdc9d6811ee68d0d9dacce3a68ee 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ※
                  現在はまだ利用不可能な機能に関する項目ですが、ロックを取得したうえで、private:
                  trueにして登録を行う事を推奨します。
                </p>

                <h4>
                  <span id="チームメンバー管理ボタン" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%AE%A1%E7%90%86%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >チームメンバー管理ボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/a3ba1c5ffb3a616312e6ab1c9d6b10171c61e3ee/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62323636303031612d356238342d643866662d633664302d3131656239383134346231302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb266001a-5b84-d8ff-c6d0-11eb98144b10.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=2a199288b730ad06f4a27e598d53d8e0"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/b266001a-5b84-d8ff-c6d0-11eb98144b10.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb266001a-5b84-d8ff-c6d0-11eb98144b10.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a25c8c032ab2935a21a26b1b3a47093b 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  メンバー管理ボタンをクリックした場合、後述の「チーム」章、「チームメンバー管理」のチームメンバー管理画面に遷移します。
                </p>

                <h4>
                  <span id="exitボタン" class="fragment"></span
                  ><a href="#exit%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >Exitボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/66177069218f8192a5d0021849b89ad048ab2e7a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38663631396432362d663336382d616432302d623636332d6534643338396437623336322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8f619d26-f368-ad20-b663-e4d389d7b362.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=b09737cc88f04752a7c1d5daa8a30eda"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8f619d26-f368-ad20-b663-e4d389d7b362.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8f619d26-f368-ad20-b663-e4d389d7b362.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=9ba782a0d7344d112271af9ba6cbdc8c 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Exitボタンをクリックした時、「チームを抜けることへの同意」の趣旨の確認メッセージが表示されます。<br />
                  確認メッセージに同意した場合、ユーザーはチームのメンバーではなくなり、チームの情報にアクセス不可能になります。
                </p>

                <h4>
                  <span
                    id="プロジェクトリンクボタンチームアクションボタン表示非表示早見表"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%9C%E3%82%BF%E3%83%B3%E3%83%81%E3%83%BC%E3%83%A0%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3%E8%A1%A8%E7%A4%BA%E9%9D%9E%E8%A1%A8%E7%A4%BA%E6%97%A9%E8%A6%8B%E8%A1%A8"
                    ><i class="fa fa-link"></i></a
                  >プロジェクトリンクボタン・チームアクションボタン表示/非表示早見表
                </h4>

                <table>
                  <thead>
                    <tr>
                      <th>状態　\　ボタン</th>
                      <th>Informationボタン</th>
                      <th>Editボタン</th>
                      <th>メンバー管理ボタン</th>
                      <th>Exitボタン</th>
                      <th>プロジェクトリンクボタン</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        ログインユーザーがチームの管理者であり、<br />チームの管理者が有料会員プランに参加中である
                      </td>
                      <td>〇</td>
                      <td>〇</td>
                      <td>〇</td>
                      <td></td>
                      <td>〇</td>
                    </tr>
                    <tr>
                      <td>
                        ログインユーザーがチームの管理者であり、<br />チームの管理者が有料会員プランに参加中でない
                      </td>
                      <td>〇</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        ログインユーザーがチームの管理者でなく、<br />チームの管理者が有料会員プランに参加中である
                      </td>
                      <td>〇</td>
                      <td></td>
                      <td></td>
                      <td>〇</td>
                      <td>〇</td>
                    </tr>
                    <tr>
                      <td>
                        ログインユーザーがチームの管理者でなく、<br />チームの管理者が有料会員プランに参加中でない
                      </td>
                      <td>〇</td>
                      <td></td>
                      <td></td>
                      <td>〇</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <h3>
                  <span id="チームの新規作成" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E6%96%B0%E8%A6%8F%E4%BD%9C%E6%88%90"
                    ><i class="fa fa-link"></i></a
                  >チームの新規作成
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/b8c34f3cc8b8129fc46a93ed98f03a3958ef15a0/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f65323738386461342d306465312d353536322d333961612d3637363334373466346562362e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe2788da4-0de1-5562-39aa-6763474f4eb6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=8325a67248f927a4de0366e2971498f3"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/e2788da4-0de1-5562-39aa-6763474f4eb6.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe2788da4-0de1-5562-39aa-6763474f4eb6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a01cf79da746250d4725703f04b27b1a 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チーム一覧画面の、カード右下部のアイコンボタンをクリックし、チーム登録ダイアログを表示することによってチームの新規作成が可能です。<br />
                  各項目の説明は、前述した「チーム」章、「チームアクションボタン」内、「Editボタン」のものと同じです。
                </p>

                <h2>
                  <span id="チームメンバー管理画面" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >チームメンバー管理画面
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/f845fb286d2358c1774c0d0db3924fa5983274cc/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f37666330343431372d623265382d373462372d656437362d6634323931373336323337322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7fc04417-b2e8-74b7-ed76-f42917362372.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0ba6f8d2095ae29afe04e7f5f9a79d2c"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/7fc04417-b2e8-74b7-ed76-f42917362372.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7fc04417-b2e8-74b7-ed76-f42917362372.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=eaf71008bd83975f76a85426f5871a8f 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームメンバー管理画面では、チームメンバーをメールアドレスによって招待する事が可能です。<br />
                  また、既存のチームメンバーをチームから除名することも可能です。
                </p>

                <h3>
                  <span id="チームメンバーの招待" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E6%8B%9B%E5%BE%85"
                    ><i class="fa fa-link"></i></a
                  >チームメンバーの招待
                </h3>

                <p>
                  チームメンバーの招待は、カード右下のプラスアイコンボタンから行うことが出来ます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/ee97f517902ab25d0c684bd9880cb5c29c0d02b1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f64396461373361312d336438372d313066332d393262372d6561313738356161353439652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fd9da73a1-3d87-10f3-92b7-ea1785aa549e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=b7b4a437c3721d64a677bf3cca1c3948"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/d9da73a1-3d87-10f3-92b7-ea1785aa549e.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fd9da73a1-3d87-10f3-92b7-ea1785aa549e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0410258cdb4a5f3438ca832f3c057a75 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  招待したい人のメールアドレスを入力し、合言葉を設定します。<br />
                  登録ボタンをクリックすることで、招待が完了します。<br />
                  （Itamasterのアカウントを持っていない相手を招待した場合でも、アカウントを作成することで招待を受け取ることが出来ます。）
                </p>

                <h3>
                  <span id="チームへの加入" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%B8%E3%81%AE%E5%8A%A0%E5%85%A5"
                    ><i class="fa fa-link"></i></a
                  >チームへの加入
                </h3>

                <p>
                  招待されたユーザーは、通知欄から招待を表示することが出来ます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/cf4891869ff18c0c2fcdd802dc6fcd6d269eab37/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30353466363563322d376131322d643738622d383737382d6164666435356138316464382e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F054f65c2-7a12-d78b-8778-adfd55a81dd8.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=8a318e7ccbe781395b0187d1e6cd651b"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/054f65c2-7a12-d78b-8778-adfd55a81dd8.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F054f65c2-7a12-d78b-8778-adfd55a81dd8.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=24e8be556ebcdf2c85fa4d3ae6a179d6 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/cc38e36f7c02a0de101e841a0be794a166abebc9/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62653534323739362d316264372d356366612d663135312d3164323062656333633937652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbe542796-1bd7-5cfa-f151-1d20bec3c97e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=58362fc7b697a45c0ffa55f2803a17df"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/be542796-1bd7-5cfa-f151-1d20bec3c97e.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbe542796-1bd7-5cfa-f151-1d20bec3c97e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=4d99c83fe9e68ec90a9cbf7a4b996a88 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  招待を断る場合は、バツのアイコンボタンをクリックします。<br />
                  （間違って招待を断ってしまった場合は、チームの管理者に連絡をとり、再度招待を受け取ってください。）
                </p>

                <p>
                  招待を受ける場合は、マルのアイコンボタンをクリックすることで、加入ダイアログを表示することが出来ます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/348640f41251f2fd92af6d454b930d66fdfc5793/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38373138373332612d363237612d333439312d316530372d3666396263393064613335632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8718732a-627a-3491-1e07-6f9bc90da35c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=cbb96d61c38eaed6c6dee5e0c251c7fd"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8718732a-627a-3491-1e07-6f9bc90da35c.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8718732a-627a-3491-1e07-6f9bc90da35c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=71dc37fcccc64af0e6b268cd6935e273 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/61ae4642ce5ec72bd7fd80e87c0263fd2a4f4ec3/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f32343131616339322d373434632d613534382d323166302d3265336561333165626565392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2411ac92-744c-a548-21f0-2e3ea31ebee9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=de737bec9c9c8d6e4098455136a6fe69"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/2411ac92-744c-a548-21f0-2e3ea31ebee9.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2411ac92-744c-a548-21f0-2e3ea31ebee9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0556cc2314b0bea92044cb4f023571d5 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームの管理者から受け取った合言葉を入力し、登録ボタンをクリックしてください。
                </p>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/324ad70ceaa9f660b20d1ad4e5249e6d48ef5450/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f61666534346263342d393461382d393939322d356164322d3863393336323337303736622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fafe44bc4-94a8-9992-5ad2-8c936237076b.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=5cfc153c9af0f78b39953436b6425a24"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/afe44bc4-94a8-9992-5ad2-8c936237076b.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fafe44bc4-94a8-9992-5ad2-8c936237076b.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=d8d4769cd1e10ab31590da76ec013b3b 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  正常に、加入が成功しました。
                </p>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/a57838a6c65ffbf99f3a1bfd8b69eeb4ddfac07c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f61626161353631312d653030342d636137322d346136332d6532383665663138653566652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fabaa5611-e004-ca72-4a63-e286ef18e5fe.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=898c36e01035f582daa38dfd0cc4c6cf"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/abaa5611-e004-ca72-4a63-e286ef18e5fe.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fabaa5611-e004-ca72-4a63-e286ef18e5fe.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=5edffc7e3ab9852d73ff13651aad3afa 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームのInformationダイアログを表示し、チームメンバー一覧を見ると、正常に追加されていることがわかります。
                </p>

                <h3>
                  <span id="チームメンバーカード" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89"
                    ><i class="fa fa-link"></i></a
                  >チームメンバーカード
                </h3>

                <p>
                  チームメンバーを表示するカードには、三つの状態が存在します。
                </p>

                <h4>
                  <span id="チームの管理者" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85"
                    ><i class="fa fa-link"></i></a
                  >チームの管理者
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/e7d230e7180b04987a96fa3441424200f084b244/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36363435346339332d653331642d306266342d616262302d3735663037313365326366622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F66454c93-e31d-0bf4-abb0-75f0713e2cfb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=6ee4aa1f1328dea3417bce15b79a4132"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/66454c93-e31d-0bf4-abb0-75f0713e2cfb.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F66454c93-e31d-0bf4-abb0-75f0713e2cfb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=86627229c4f36e75526722bb9e6cad62 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  右下に、王冠アイコンが表示されます。
                </p>

                <h4>
                  <span id="チームに加入済のユーザー" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AB%E5%8A%A0%E5%85%A5%E6%B8%88%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC"
                    ><i class="fa fa-link"></i></a
                  >チームに加入済のユーザー
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/a34fa9d49c0801834dcdbc7952759f3fa47613ee/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38616537336231312d346134642d323038642d656631342d3165336335623737353664322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8ae73b11-4a4d-208d-ef14-1e3c5b7756d2.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=189ef345c14e0ee9305b08461520c776"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8ae73b11-4a4d-208d-ef14-1e3c5b7756d2.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8ae73b11-4a4d-208d-ef14-1e3c5b7756d2.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0c888614683353bb0acf14fec15671ba 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カードの右下に、薄赤のアイコンボタンが表示されます。<br />
                  クリックすることで、ユーザーをチームから除名することが出来ます。<br />
                  （再度招待を行い、加入させることで、チームに参加させることは可能です。）<br />
                  <a
                    href="https://camo.qiitausercontent.com/53e368e2b6cd4aa9174b810bc6881036524f5102/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30303764646133362d613135332d353861652d383530342d3031663863383661646163632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F007dda36-a153-58ae-8504-01f8c86adacc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=00c80c33be62136ad6087c5339e623d1"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/007dda36-a153-58ae-8504-01f8c86adacc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F007dda36-a153-58ae-8504-01f8c86adacc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=01d21d8ed7d351a07eaf63723ace6d9c 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="チームに招待中のユーザー" class="fragment"></span
                  ><a
                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AB%E6%8B%9B%E5%BE%85%E4%B8%AD%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC"
                    ><i class="fa fa-link"></i></a
                  >チームに招待中のユーザー
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/20c2de6a05da209baa5cc1bc980ee70cfcbfaa89/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38313531343134622d613039622d323261312d646530632d3332643766326132373266352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8151414b-a09b-22a1-de0c-32d7f2a272f5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=495f284b08323bdb6a29a3413ee3c335"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8151414b-a09b-22a1-de0c-32d7f2a272f5.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8151414b-a09b-22a1-de0c-32d7f2a272f5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=41f88de74eddb4a18d82cd9990850353 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カードにはメールアドレスのみが表示されます。<br />
                  同様に、右下のアイコンボタンをクリックすることで、招待を取り消すことが可能です。
                </p>

                <h1>
                  <span id="プロジェクト" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"
                    ><i class="fa fa-link"></i></a
                  >プロジェクト
                </h1>

                <h2>
                  <span id="プロジェクト選択画面" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E9%81%B8%E6%8A%9E%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >プロジェクト選択画面
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/9699b4d8bf18f5a35e3095d74511d3cf992486a2/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39343236623734372d306362632d366362652d353665322d3436346139373139313765662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F9426b747-0cbc-6cbe-56e2-464a971917ef.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ac3cd0c6511e0f04f17e3a042f642941"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/9426b747-0cbc-6cbe-56e2-464a971917ef.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F9426b747-0cbc-6cbe-56e2-464a971917ef.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=f83974b621ceccba421f8ea6135788b5 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームカードの、「プロジェクト」リンクボタン（或いは、チームInformationダイアログの「プロジェクト」リンクボタン）をクリック<br />
                  することで、プロジェクト選択画面に遷移します。
                </p>

                <h3>
                  <span id="プロジェクトの作成" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90"
                    ><i class="fa fa-link"></i></a
                  >プロジェクトの作成
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/66f610dfdb5c7411bfa09a5ebb4c040fcfe774cf/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62646638336537302d623635642d353438652d366665612d3464353463323536333964662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbdf83e70-b65d-548e-6fea-4d54c25639df.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=9df635f3b17ae8ffd7424b21fae64105"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/bdf83e70-b65d-548e-6fea-4d54c25639df.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fbdf83e70-b65d-548e-6fea-4d54c25639df.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=618c012aca7437d494582f93ab7c5566 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カード右上の、プラスアイコンボタンをクリックすることで、プロジェクトの作成ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/7bdbd90e37dc721a9983af50c99e838cde4138a4/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63663434353632332d663966662d306265662d383234322d3464353461383538613634312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcf445623-f9ff-0bef-8242-4d54a858a641.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=303b70511b999f9dfe139986aa80db8b"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/cf445623-f9ff-0bef-8242-4d54a858a641.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcf445623-f9ff-0bef-8242-4d54a858a641.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ab4c647de7afc1ecebd09aaba05bcf6c 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  プロジェクト作成時、以下の項目が設定可能です。
                </p>

                <h4>
                  <span id="プロジェクト名" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E5%90%8D"
                    ><i class="fa fa-link"></i></a
                  >プロジェクト名
                </h4>

                <p>
                  プロジェクト名です。<br />
                  プロジェクト選択時、選択肢に表示されます。
                </p>

                <h4>
                  <span id="メモ" class="fragment"></span
                  ><a href="#%E3%83%A1%E3%83%A2"><i class="fa fa-link"></i></a
                  >メモ
                </h4>

                <p>
                  プロジェクトカードに表示されます。<br />
                  チームメンバー全員がプロジェクト選択時に表示可能で、改行コードは処理されます。
                </p>

                <h4>
                  <span
                    id="create-environment-steps-page"
                    class="fragment"
                  ></span
                  ><a href="#create-environment-steps-page"
                    ><i class="fa fa-link"></i></a
                  >CREATE ENVIRONMENT STEPS PAGE
                </h4>

                <p>
                  環境構築手順をMarkdown記法で、wikiとして設置するオプションです。
                </p>

                <div class="note warn">
                  <span class="fa fa-fw fa-exclamation-circle"></span>
                  <p>現在、この機能はメンテナンス中で利用できません。</p>
                </div>

                <h4>
                  <span id="test-environment-url" class="fragment"></span
                  ><a href="#test-environment-url"><i class="fa fa-link"></i></a
                  >TEST ENVIRONMENT URL
                </h4>

                <p>
                  テスト環境のURLを設定可能です。<br />
                  テスト環境のURLを設定した場合、プロジェクトカードに自動的にテスト環境のリンクボタンが生成されます。
                </p>

                <h4>
                  <span id="repository-url" class="fragment"></span
                  ><a href="#repository-url"><i class="fa fa-link"></i></a
                  >REPOSITORY URL
                </h4>

                <p>
                  ソースコードを管理しているリポジトリのURLを設定可能です。<br />
                  リポジトリのURLを設定した場合、プロジェクトカードに自動的にリポジトリのリンクボタンが生成されます。
                </p>

                <h3>
                  <span id="プロジェクトの選択" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E9%81%B8%E6%8A%9E"
                    ><i class="fa fa-link"></i></a
                  >プロジェクトの選択
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/53b82c2915b5c177ce2be7f6479a645ee19d2f21/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33343936613361642d393064362d323861302d653364662d3763366461623330323561652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3496a3ad-90d6-28a0-e3df-7c6dab3025ae.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=58387ea4a99eaef35618ffdc0902965f"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3496a3ad-90d6-28a0-e3df-7c6dab3025ae.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3496a3ad-90d6-28a0-e3df-7c6dab3025ae.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b6767629d44ea7626d68bbd5acb9e934 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カードの上部のセレクトボックスをクリックすることで、チームに登録されているプロジェクトを選択できます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/469bb7af1e39c784da8cc6f178c911c30a94f453/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31393933313237392d316632392d363237372d393935342d6139383565363032376235642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F19931279-1f29-6277-9954-a985e6027b5d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0893126ea89825df9af5dce591e72960"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/19931279-1f29-6277-9954-a985e6027b5d.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F19931279-1f29-6277-9954-a985e6027b5d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=357ef7f9f89bc5bd24d021b916e46589 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  プロジェクトを選択した場合、カードの表示が切り替わります。<br />
                  <a
                    href="https://camo.qiitausercontent.com/8c10a07b00bdf0201bd7a22e6ffc408a08460202/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34326533323934382d383434652d326663382d303161372d6130336261633662663862652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F42e32948-844e-2fc8-01a7-a03bac6bf8be.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=4e77e41422830a13a02c766bdfe5f009"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/42e32948-844e-2fc8-01a7-a03bac6bf8be.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F42e32948-844e-2fc8-01a7-a03bac6bf8be.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=5ff351671d6ec20714a5e5132b67499a 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h3>
                  <span
                    id="プロジェクト全体でのテストの進捗バー"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E5%85%A8%E4%BD%93%E3%81%A7%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E9%80%B2%E6%8D%97%E3%83%90%E3%83%BC"
                    ><i class="fa fa-link"></i></a
                  >プロジェクト全体でのテストの進捗バー
                </h3>

                <p>
                  （進捗バー表示のため、テストスイートを三件、テストを五件登録したデータを用意しています。）<br />
                  <a
                    href="https://camo.qiitausercontent.com/5843df972126774f1b4fe9bbf0f27e68be9e7885/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62353563313839322d316337362d623961612d333761612d6230656162633738343262342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb55c1892-1c76-b9aa-37aa-b0eabc7842b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ce5ad8a159662e42ae0b81be31173e57"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/b55c1892-1c76-b9aa-37aa-b0eabc7842b4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb55c1892-1c76-b9aa-37aa-b0eabc7842b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=90f8dd28e5b2e6a5777953563a9029cd 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  プロジェクトに対して、テストスイートを作成（「テストスイート」章にて、後述します。）し、<br />
                  テストスイート以下にテストケースを作成（「テストケース」章にて、後述します。）することで、プロジェクトカードに進捗表示と、進捗バーが表示されます。<br />
                  プロジェクトに登録されているテストスイートと、テストケースの件数が表示されます。また、<br />
                  <a
                    href="https://camo.qiitausercontent.com/701db3978e598a0bca3bced8b27913226eb53d7f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f37633839323633632d376665372d396563372d373030332d6464393032616434326638302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7c89263c-7fe7-9ec7-7003-dd902ad42f80.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ebca41ecfd1742f9ddff0d0cf84c81d6"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/7c89263c-7fe7-9ec7-7003-dd902ad42f80.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7c89263c-7fe7-9ec7-7003-dd902ad42f80.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=695f2f6939726fa37a6f96ad454ba5a7 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  進捗バーにマウスを重ねると、ステータス毎のテストケースの件数を確認できます。<br />
                  それぞれ、<br />
                  青色　＝　「完了」<br />
                  黄色　＝　「再テスト」<br />
                  赤色　＝　「問題」<br />
                  灰色　＝　「未実行」<br />
                  の割合を示しています。
                </p>

                <h3>
                  <span id="テスト結果一覧表の出力" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E7%B5%90%E6%9E%9C%E4%B8%80%E8%A6%A7%E8%A1%A8%E3%81%AE%E5%87%BA%E5%8A%9B"
                    ><i class="fa fa-link"></i></a
                  >テスト結果一覧表の出力
                </h3>

                <p>
                  （出力のため、テストスイートを三件、テストを五件登録したデータを用意しています。）<br />
                  <a
                    href="https://camo.qiitausercontent.com/957f1d809d1a7c5f1cb47d8f7d3de24188bd89bb/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39323034336665302d663964652d656637332d626434382d3838376262316132313235632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F92043fe0-f9de-ef73-bd48-887bb1a2125c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=889cc91ad48881683cd1d0d7edd546f2"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/92043fe0-f9de-ef73-bd48-887bb1a2125c.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F92043fe0-f9de-ef73-bd48-887bb1a2125c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=fa9074697e06440d923b0ea7b5247cab 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カード右上の緑色のアイコンボタンをクリックしたとき、出力テンプレートの選択が可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/f11810fcd53c72c00596982a8b273f43a75fef1c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35306465656364622d343564362d343966302d323066652d3463363038363238663332352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F50deecdb-45d6-49f0-20fe-4c608628f325.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=b646b11c36bc8912d7431322fc26983a"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/50deecdb-45d6-49f0-20fe-4c608628f325.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F50deecdb-45d6-49f0-20fe-4c608628f325.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=87f1b164ce9b8c0915cc15e907db783d 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/8b9247ec72f8851c23b8ecc0bbc2175ab80f5534/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36643962316531642d666562362d633836332d663139352d6239653364343439346362622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6d9b1e1d-feb6-c863-f195-b9e3d4494cbb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=810df00310860c81626adaf66d92ae1d"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/6d9b1e1d-feb6-c863-f195-b9e3d4494cbb.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6d9b1e1d-feb6-c863-f195-b9e3d4494cbb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=6296bb32fd0778614fa824d44b5dd837 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テスト実行結果表の出力オプションを➁「情報の入力」にて行うことが可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/c4a1507dcfe06bada769c4082d9dbb47565f83c0/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36643064353261312d623766662d343935352d643636352d6264643130373035393164622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6d0d52a1-b7ff-4955-d665-bdd1070591db.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=8fb09eb7cd67e25a107ffef32fcbfccc"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/6d0d52a1-b7ff-4955-d665-bdd1070591db.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6d0d52a1-b7ff-4955-d665-bdd1070591db.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=97298e665ee461fe097e00455a671d65 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="出力オプション" class="fragment"></span
                  ><a
                    href="#%E5%87%BA%E5%8A%9B%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >出力オプション
                </h4>

                <p>
                  出力オプションの値は、出力されたExcelファイルのヘッダー部にセットされます。<br />
                  出力オプションには、以下の項目を設定できます。
                </p>

                <h5>
                  <span id="システム名" class="fragment"></span
                  ><a href="#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D"
                    ><i class="fa fa-link"></i></a
                  >システム名
                </h5>

                <p>
                  システムの名称です。<br />
                  初期状態時は、プロジェクト名がセットされています。
                </p>

                <h5>
                  <span id="サブシステム名" class="fragment"></span
                  ><a
                    href="#%E3%82%B5%E3%83%96%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D"
                    ><i class="fa fa-link"></i></a
                  >サブシステム名
                </h5>

                <p>
                  サブシステム名です。<br />
                  初期状態時は空白です。
                </p>

                <h5>
                  <span id="責任者" class="fragment"></span
                  ><a href="#%E8%B2%AC%E4%BB%BB%E8%80%85"
                    ><i class="fa fa-link"></i></a
                  >責任者
                </h5>

                <p>
                  チームの責任者を入力可能です。<br />
                  初期状態時は、チームの管理者ユーザーの表示名がセットされています。
                </p>

                <h5>
                  <span id="チーム名-1" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D-1"
                    ><i class="fa fa-link"></i></a
                  >チーム名
                </h5>

                <p>
                  チーム名を入力可能です。<br />
                  初期状態時は、チームの表示名がセットされています。
                </p>

                <h5>
                  <span id="テスト開始日テスト終了日" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E9%96%8B%E5%A7%8B%E6%97%A5%E3%83%86%E3%82%B9%E3%83%88%E7%B5%82%E4%BA%86%E6%97%A5"
                    ><i class="fa fa-link"></i></a
                  >テスト開始日・テスト終了日
                </h5>

                <p>
                  テスト開始日と、終了日を入力可能です。<br />
                  初期状態時は両方空白です。
                </p>

                <h4>
                  <span id="出力確認" class="fragment"></span
                  ><a href="#%E5%87%BA%E5%8A%9B%E7%A2%BA%E8%AA%8D"
                    ><i class="fa fa-link"></i></a
                  >出力確認
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/ae9bce2a496ca7b5c832353b5da22b800638325f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35633933386636642d353934392d336230642d343663382d3931653266646665613433642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F5c938f6d-5949-3b0d-46c8-91e2fdfea43d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=81e278c532ae3c52ae65269a2094c79f"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/5c938f6d-5949-3b0d-46c8-91e2fdfea43d.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F5c938f6d-5949-3b0d-46c8-91e2fdfea43d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=e0cfff41692625ed4a75cba211f3790f 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ファイル名を設定できるほか、➁で入力した出力オプションの確認を行います。<br />
                  ファイル名は、初期状態時は「テスト実行結果表」がセットされています。<br />
                  よろしければ、「出力」（「Export」）をクリックし、テスト実行結果表.xlsxの出力を行います。
                </p>

                <h4>
                  <span id="テスト実行結果表" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C%E8%A1%A8"
                    ><i class="fa fa-link"></i></a
                  >テスト実行結果表
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/0338a66b26152cc7ea9461790d776d868b54a467/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35636536336537302d366132372d386634632d363561392d6631646134393966363732662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F5ce63e70-6a27-8f4c-65a9-f1da499f672f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=8ce985ee454c5c4774d933560b83ac24"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/5ce63e70-6a27-8f4c-65a9-f1da499f672f.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F5ce63e70-6a27-8f4c-65a9-f1da499f672f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a77e6abcf8e7c4f98bc6bf10563c53c3 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h5>
                  <span id="項目" class="fragment"></span
                  ><a href="#%E9%A0%85%E7%9B%AE"><i class="fa fa-link"></i></a
                  >項目
                </h5>

                <p>テスト実行結果表には、以下の項目がセットされます。</p>

                <h6>
                  <span id="no" class="fragment"></span
                  ><a href="#no"><i class="fa fa-link"></i></a>No
                </h6>

                <p>テストケースに対して、自動で連番が振り当てられます。</p>

                <h6>
                  <span id="テストスイート" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88"
                    ><i class="fa fa-link"></i></a
                  >テストスイート
                </h6>

                <p>テストスイート名がセットされます。</p>

                <h6>
                  <span id="テストケース" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9"
                    ><i class="fa fa-link"></i></a
                  >テストケース
                </h6>

                <p>テストケース名がセットされます。</p>

                <h6>
                  <span id="前提条件" class="fragment"></span
                  ><a href="#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"
                    ><i class="fa fa-link"></i></a
                  >前提条件
                </h6>

                <p>
                  テストケースに登録可能なプロパティである、「前提とする条件」（「テストケース」章にて後述）が全て順番にセットされます。
                </p>

                <h6>
                  <span id="テスト手順" class="fragment"></span
                  ><a href="#%E3%83%86%E3%82%B9%E3%83%88%E6%89%8B%E9%A0%86"
                    ><i class="fa fa-link"></i></a
                  >テスト手順
                </h6>

                <p>
                  テストケースに登録可能なプロパティである、「テスト手順」（「テストケース」章にて後述）が全て順番にセットされます。
                </p>

                <h6>
                  <span id="期待する結果" class="fragment"></span
                  ><a
                    href="#%E6%9C%9F%E5%BE%85%E3%81%99%E3%82%8B%E7%B5%90%E6%9E%9C"
                    ><i class="fa fa-link"></i></a
                  >期待する結果
                </h6>

                <p>
                  テストケースに登録可能なプロパティである、「期待する結果」（「テストケース」章にて後述）が全て順番にセットされます。
                </p>

                <h6>
                  <span id="回数" class="fragment"></span
                  ><a href="#%E5%9B%9E%E6%95%B0"><i class="fa fa-link"></i></a
                  >回数
                </h6>

                <p>
                  テストを実行した回数をセットします。<br />
                  現在のステータスが「未実行」であるテストケースの場合、空白がセットされます。
                </p>

                <h6>
                  <span id="結果" class="fragment"></span
                  ><a href="#%E7%B5%90%E6%9E%9C"><i class="fa fa-link"></i></a
                  >結果
                </h6>

                <p>
                  回数目のテスト結果を、「完了」「再テスト」「問題」からセットします。<br />
                  現在のステータスが「未実行」であるテストケースの場合、空白がセットされます。
                </p>

                <h6>
                  <span id="実施日" class="fragment"></span
                  ><a href="#%E5%AE%9F%E6%96%BD%E6%97%A5"
                    ><i class="fa fa-link"></i></a
                  >実施日
                </h6>

                <p>
                  回数目のテストの実施日を「'YY-MM-DD」のフォーマットでセットします。<br />
                  現在のステータスが「未実行」であるテストケースの場合、空白がセットされます。
                </p>

                <h6>
                  <span id="実施者" class="fragment"></span
                  ><a href="#%E5%AE%9F%E6%96%BD%E8%80%85"
                    ><i class="fa fa-link"></i></a
                  >実施者
                </h6>

                <p>
                  回数目のテストの実施者のアカウントの、現在の表示名をセットします。<br />
                  現在のステータスが「未実行」であるテストケースの場合、空白がセットされます。
                </p>

                <h6>
                  <span id="備考" class="fragment"></span
                  ><a href="#%E5%82%99%E8%80%83"><i class="fa fa-link"></i></a
                  >備考
                </h6>

                <p>
                  テストは実行を行う際、「再テスト」「問題」をセットするテストケースに対して備考をセット可能です。（「テストケース」章にて後述）
                </p>

                <h5>
                  <span id="行の色" class="fragment"></span
                  ><a href="#%E8%A1%8C%E3%81%AE%E8%89%B2"
                    ><i class="fa fa-link"></i></a
                  >行の色
                </h5>

                <p>
                  出力時のテストケースの最終的なステータスが、「完了」でないもの（「未実行」「再テスト」「問題」のいずれかであるもの）を赤く表示し、未完了のテストをユーザーに通知します。
                </p>

                <h5>
                  <span id="簡易サマリ" class="fragment"></span
                  ><a href="#%E7%B0%A1%E6%98%93%E3%82%B5%E3%83%9E%E3%83%AA"
                    ><i class="fa fa-link"></i></a
                  >簡易サマリ
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/fb10aa20d7218e478e4dea16933c2176aed50d9e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31316332323336622d656431622d646530662d643635362d3166636364353837333762632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F11c2236b-ed1b-de0f-d656-1fccd58737bc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f74ac657eabba8cda60dd378316f5274"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/11c2236b-ed1b-de0f-d656-1fccd58737bc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F11c2236b-ed1b-de0f-d656-1fccd58737bc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=3bc7e352d960bc5295333a9fb363c763 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  上のような簡易サマリを別シートで出力します。
                </p>

                <h3>
                  <span
                    id="テストサマリーレポートの出力"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B5%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E5%87%BA%E5%8A%9B"
                    ><i class="fa fa-link"></i></a
                  >テストサマリーレポートの出力
                </h3>

                <p>
                  （出力のため、テストスイートを三件、テストを五件登録したデータを用意しています。）<br />
                  <a
                    href="https://camo.qiitausercontent.com/957f1d809d1a7c5f1cb47d8f7d3de24188bd89bb/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39323034336665302d663964652d656637332d626434382d3838376262316132313235632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F92043fe0-f9de-ef73-bd48-887bb1a2125c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=889cc91ad48881683cd1d0d7edd546f2"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/92043fe0-f9de-ef73-bd48-887bb1a2125c.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F92043fe0-f9de-ef73-bd48-887bb1a2125c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=fa9074697e06440d923b0ea7b5247cab 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カード右上の緑色のアイコンボタンをクリックしたとき、出力テンプレートの選択が可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/f11810fcd53c72c00596982a8b273f43a75fef1c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35306465656364622d343564362d343966302d323066652d3463363038363238663332352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F50deecdb-45d6-49f0-20fe-4c608628f325.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=b646b11c36bc8912d7431322fc26983a"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/50deecdb-45d6-49f0-20fe-4c608628f325.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F50deecdb-45d6-49f0-20fe-4c608628f325.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=87f1b164ce9b8c0915cc15e907db783d 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/3cd99b9c01d9de74c6c3ead5e4b34a2702b23398/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31373065306537382d363837362d373830302d323963612d6432303331373965633132322e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F170e0e78-6876-7800-29ca-d203179ec122.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=4792074abd09258a1da25c73bfdc24b8"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/170e0e78-6876-7800-29ca-d203179ec122.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F170e0e78-6876-7800-29ca-d203179ec122.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=817035cee73caf0c8ee604e42158f9a8 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テストサマリーレポートの出力オプションを➁「情報の入力」にて行うことが可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/628f1a40afc1e873d26e2bb766384e032e312d5d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36393463353836382d373930622d663434362d363864632d3266366632663836656439652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F694c5868-790b-f446-68dc-2f6f2f86ed9e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=d3c52971d893b4efd38a6d82f9119d61"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/694c5868-790b-f446-68dc-2f6f2f86ed9e.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F694c5868-790b-f446-68dc-2f6f2f86ed9e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=c5c455083027ed7decea380a5934007c 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="出力オプション-1" class="fragment"></span
                  ><a
                    href="#%E5%87%BA%E5%8A%9B%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-1"
                    ><i class="fa fa-link"></i></a
                  >出力オプション
                </h4>

                <p>
                  出力オプションの値は、出力されたExcelファイルのヘッダー部にセットされます。<br />
                  出力オプションには、以下の項目を設定できます。
                </p>

                <h5>
                  <span id="システム名-1" class="fragment"></span
                  ><a href="#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D-1"
                    ><i class="fa fa-link"></i></a
                  >システム名
                </h5>

                <p>
                  システムの名称です。<br />
                  初期状態時は、プロジェクト名がセットされています。
                </p>

                <h5>
                  <span id="サブシステム名-1" class="fragment"></span
                  ><a
                    href="#%E3%82%B5%E3%83%96%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D-1"
                    ><i class="fa fa-link"></i></a
                  >サブシステム名
                </h5>

                <p>
                  サブシステム名です。<br />
                  初期状態時は空白です。
                </p>

                <h5>
                  <span id="責任者-1" class="fragment"></span
                  ><a href="#%E8%B2%AC%E4%BB%BB%E8%80%85-1"
                    ><i class="fa fa-link"></i></a
                  >責任者
                </h5>

                <p>
                  チームの責任者を入力可能です。<br />
                  初期状態時は、チームの管理者ユーザーの表示名がセットされています。
                </p>

                <h5>
                  <span id="チーム名-2" class="fragment"></span
                  ><a href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D-2"
                    ><i class="fa fa-link"></i></a
                  >チーム名
                </h5>

                <p>
                  チーム名を入力可能です。<br />
                  初期状態時は、チームの表示名がセットされています。
                </p>

                <h5>
                  <span id="テスト開始日テスト終了日-1" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E9%96%8B%E5%A7%8B%E6%97%A5%E3%83%86%E3%82%B9%E3%83%88%E7%B5%82%E4%BA%86%E6%97%A5-1"
                    ><i class="fa fa-link"></i></a
                  >テスト開始日・テスト終了日
                </h5>

                <p>
                  テスト開始日と、終了日を入力可能です。<br />
                  初期状態時は両方空白です。
                </p>

                <h4>
                  <span id="出力確認-1" class="fragment"></span
                  ><a href="#%E5%87%BA%E5%8A%9B%E7%A2%BA%E8%AA%8D-1"
                    ><i class="fa fa-link"></i></a
                  >出力確認
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/daf06a9a56bc2700bb50f53bc91637ecb3f35093/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f61316431663336352d363732362d353332352d626662302d6163613036396332353461622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fa1d1f365-6726-5325-bfb0-aca069c254ab.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=6c3fdc0c1d2bf8b3b2de3d7117b6cb99"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/a1d1f365-6726-5325-bfb0-aca069c254ab.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fa1d1f365-6726-5325-bfb0-aca069c254ab.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ed7fc07af1edebcda436f0c4d8bdfcdb 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ファイル名を設定できるほか、➁で入力した出力オプションの確認を行います。<br />
                  ファイル名は、初期状態時は「サマリーレポート」がセットされています。<br />
                  よろしければ、「出力」（「Export」）をクリックし、サマリーレポート.xlsxの出力を行います。
                </p>

                <h4>
                  <span id="サマリーレポート" class="fragment"></span
                  ><a
                    href="#%E3%82%B5%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88"
                    ><i class="fa fa-link"></i></a
                  >サマリーレポート
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/2d4edb419d7fc0bbbc52f35c8f0568c87140291e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63323330623733382d306564352d626532372d316533322d3239383363366334386439382e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc230b738-0ed5-be27-1e32-2983c6c48d98.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=6b10f9a5c3d82f27c940573c0aaa29f0"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/c230b738-0ed5-be27-1e32-2983c6c48d98.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc230b738-0ed5-be27-1e32-2983c6c48d98.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=70ba3a211ce44fa3c5043b12664ea031 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h5>
                  <span id="データ" class="fragment"></span
                  ><a href="#%E3%83%87%E3%83%BC%E3%82%BF"
                    ><i class="fa fa-link"></i></a
                  >データ
                </h5>

                <p>
                  サマリーレポート、「データ」には、以下の情報が出力されます。
                </p>

                <h6>
                  <span id="完了率" class="fragment"></span
                  ><a href="#%E5%AE%8C%E4%BA%86%E7%8E%87"
                    ><i class="fa fa-link"></i></a
                  >完了率
                </h6>

                <p>
                  テストスイート毎に、<br />
                  「テスト件数」（テストスイートに対して登録されているテストケースの件数）に対する、「完了件数」（テストスイートに対して登録されているテストケースのうち、ステータスが「完了」となっているテストの件数）の割合を出力します。
                </p>

                <h6>
                  <span id="テスト密度" class="fragment"></span
                  ><a href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AF%86%E5%BA%A6"
                    ><i class="fa fa-link"></i></a
                  >テスト密度
                </h6>

                <p>
                  テストスイート毎に、<br />
                  「ステップ数」（テストスイートに対して登録されている実行ステップ数）に対する、「テスト件数」（テストスイートに対して登録されているテストケースの件数）の割合を出力します。
                </p>

                <h6>
                  <span id="検出不具合密度" class="fragment"></span
                  ><a
                    href="#%E6%A4%9C%E5%87%BA%E4%B8%8D%E5%85%B7%E5%90%88%E5%AF%86%E5%BA%A6"
                    ><i class="fa fa-link"></i></a
                  >検出不具合密度
                </h6>

                <p>
                  テストスイート毎に、<br />
                  「ステップ数」（テストスイートに対して登録されている実行ステップ数）に対する、「検出不具合件数」（テストスイートに対して登録されているテストケースのうち、ステータスが「問題」に変更された延べ件数）の割合を出力します。
                </p>

                <h6>
                  <span id="不具合発生率" class="fragment"></span
                  ><a
                    href="#%E4%B8%8D%E5%85%B7%E5%90%88%E7%99%BA%E7%94%9F%E7%8E%87"
                    ><i class="fa fa-link"></i></a
                  >不具合発生率
                </h6>

                <p>
                  「テスト件数」（テストスイートに対して登録されているテストケースの件数）に対する、「不具合発生件数」（テストスイートに対して登録されているテストケースのうち、ステータスが「問題」に変更された延べ件数）の割合を出力します。
                </p>

                <h6>
                  <span id="推測残存不具合件数" class="fragment"></span
                  ><a
                    href="#%E6%8E%A8%E6%B8%AC%E6%AE%8B%E5%AD%98%E4%B8%8D%E5%85%B7%E5%90%88%E4%BB%B6%E6%95%B0"
                    ><i class="fa fa-link"></i></a
                  >推測残存不具合件数
                </h6>

                <p>
                  「完了率」と「不具合発生率」から、残りのテスト件数に対しての不具合の件数を算出し、出力します。
                </p>

                <h5>
                  <span id="グラフ" class="fragment"></span
                  ><a href="#%E3%82%B0%E3%83%A9%E3%83%95"
                    ><i class="fa fa-link"></i></a
                  >グラフ
                </h5>

                <p>
                  サマリーレポートでは、<br />
                  「テスト密度」「検出不具合密度」「不具合発生率」のグラフを生成し出力します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/6286c91bc029e26a5bd17af6a66346070869565d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f64383064333563352d346239652d323034662d643936302d6639663461396563656361642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fd80d35c5-4b9e-204f-d960-f9f4a9ececad.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=5609f2038567840baa1d39eab05fbeb1"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/d80d35c5-4b9e-204f-d960-f9f4a9ececad.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fd80d35c5-4b9e-204f-d960-f9f4a9ececad.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=979c232fac0cc738529c70b92b6749bd 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h1>
                  <span id="テストスイート-1" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88-1"
                    ><i class="fa fa-link"></i></a
                  >テストスイート
                </h1>

                <p>
                  プロジェクトカード<br />
                  <a
                    href="https://camo.qiitausercontent.com/6117c3b7541c9436a31a60ee44f5ecf270258133/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63666464316537642d363765352d313135662d623764372d6232376433333565326637372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcfdd1e7d-67e5-115f-b7d7-b27d335e2f77.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=60e3dfe9cb24f682fcb58ebc43320a98"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/cfdd1e7d-67e5-115f-b7d7-b27d335e2f77.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fcfdd1e7d-67e5-115f-b7d7-b27d335e2f77.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=3f61bf493127fdb35f4ba079acf3d9c2 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テストスイート一覧テーブル<br />
                  <a
                    href="https://camo.qiitausercontent.com/602a36651766fe0ff897ce80074e238aef128957/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33346636363938662d373933642d363163642d393139372d3133376463343937386131372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F34f6698f-793d-61cd-9197-137dc4978a17.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=d705a90245bf919b7187eb94caf48c08"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/34f6698f-793d-61cd-9197-137dc4978a17.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F34f6698f-793d-61cd-9197-137dc4978a17.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=3ba9c019877220f43836e189a71f7f1e 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h2>
                  <span id="テストスイートの作成" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90"
                    ><i class="fa fa-link"></i></a
                  >テストスイートの作成
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/56175d3eb54fddd6eb195cee02af863600a69a45/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35343439306263382d653233362d353061362d396333642d6132303137376264383531612e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F54490bc8-e236-50a6-9c3d-a20177bd851a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f4c9c75bb11a18718caeb9037cb5c69c"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/54490bc8-e236-50a6-9c3d-a20177bd851a.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F54490bc8-e236-50a6-9c3d-a20177bd851a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=1d5252b9f7362815e6e5b7a1b8b625ff 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テストスイート一覧テーブル右下の、プラスアイコンボタンをクリックすることで、テストスイート登録ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/5ebe0eea085bf6e793b5602d121352f102941164/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33373864656135652d623834302d393136622d333464652d6363343066383163323037612e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F378dea5e-b840-916b-34de-cc40f81c207a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=860a1bd2dc20ebd343ca490a2641f32f"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/378dea5e-b840-916b-34de-cc40f81c207a.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F378dea5e-b840-916b-34de-cc40f81c207a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0ffab2697e729bd6f3f548bb03a94b14 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テストスイート作成時、以下の項目が設定可能です。
                </p>

                <h3>
                  <span id="タイトル" class="fragment"></span
                  ><a href="#%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB"
                    ><i class="fa fa-link"></i></a
                  >タイトル
                </h3>

                <p>
                  テストスイートの表示名です。<br />
                  テストスイート一覧テーブルに表示されます。
                </p>

                <h3>
                  <span id="備考-1" class="fragment"></span
                  ><a href="#%E5%82%99%E8%80%83-1"><i class="fa fa-link"></i></a
                  >備考
                </h3>

                <p>
                  テストスイートの備考情報を入力します。<br />
                  後述の「テストスイート章」、「アクションボタン」の、「Informationボタン」から表示可能です。
                </p>

                <h3>
                  <span id="実行ステップ" class="fragment"></span
                  ><a
                    href="#%E5%AE%9F%E8%A1%8C%E3%82%B9%E3%83%86%E3%83%83%E3%83%97"
                    ><i class="fa fa-link"></i></a
                  >実行ステップ
                </h3>

                <p>
                  プログラム中の、該当するテストスイートの機能を実装しているステップ数を入力可能です。<br />
                  「テストサマリーレポート」出力時の、「テスト密度」「不具合密度」を算出するため必要な項目です。
                </p>

                <h3>
                  <span id="編集担当者" class="fragment"></span
                  ><a href="#%E7%B7%A8%E9%9B%86%E6%8B%85%E5%BD%93%E8%80%85"
                    ><i class="fa fa-link"></i></a
                  >編集担当者
                </h3>

                <p>
                  該当するテストスイートを、「チーム管理者」と、「テストスイート作成者」以外で編集出来るメンバーを指定します。<br />
                  （「チーム管理者」と、「テストスイート作成者」は、編集担当者に指定しないでも編集・削除の権限を持ちます。）
                </p>

                <h2>
                  <span id="テストスイート一覧テーブル" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%E4%B8%80%E8%A6%A7%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"
                    ><i class="fa fa-link"></i></a
                  >テストスイート一覧テーブル
                </h2>

                <p>
                  テストスイートが一覧で表示されます。<br />
                  テストスイート一覧テーブルには、以下の項目が表示されます。
                </p>

                <h3>
                  <span id="no-1" class="fragment"></span
                  ><a href="#no-1"><i class="fa fa-link"></i></a>No
                </h3>

                <p>
                  プロジェクト内での、テストスイートが固有で所持する番号です。<br />
                  最初に作成されたものを「1」とし、順番にセットされます。
                </p>

                <h3>
                  <span id="completetestcase" class="fragment"></span
                  ><a href="#completetestcase"><i class="fa fa-link"></i></a
                  >complete/testcase(%)
                </h3>

                <p>
                  テストスイートに登録されているテストケースの件数に対する、テストスイートに登録されているテストケースの件数のうちステータスが「完了」となっているものの割合を表示します。
                </p>

                <h3>
                  <span id="test-suite-title" class="fragment"></span
                  ><a href="#test-suite-title"><i class="fa fa-link"></i></a
                  >Test Suite Title
                </h3>

                <p>テストスイート名が表示されます。</p>

                <h3>
                  <span id="actions" class="fragment"></span
                  ><a href="#actions"><i class="fa fa-link"></i></a>Actions
                </h3>

                <p>
                  テストスイートに対するアクションを選択できます。<br />
                  以下のようなものがあります。
                </p>

                <h4>
                  <span id="アクションボタン" class="fragment"></span
                  ><a
                    href="#%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >アクションボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/f9e7c8d6c30074032e25b91f1769a2a1932b5c40/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30646638613436302d356665612d373163312d663439632d6138653663343432336432352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0df8a460-5fea-71c1-f49c-a8e6c4423d25.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=10cb49f5269236b63044ec6c1c9530d5"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/0df8a460-5fea-71c1-f49c-a8e6c4423d25.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0df8a460-5fea-71c1-f49c-a8e6c4423d25.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=89a7c8c419bd8158a37b9083bd50bc6d 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h5>
                  <span id="展開ボタン" class="fragment"></span
                  ><a href="#%E5%B1%95%E9%96%8B%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >展開ボタン
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/1bf41cf03a735685c5b89d9868bcf0b135faf798/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62303361613130622d323161342d313464392d656635342d6338656338323662393065642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb03aa10b-21a4-14d9-ef54-c8ec826b90ed.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=dec4a2dec1b0e4d70d5cd23a32a33454"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/b03aa10b-21a4-14d9-ef54-c8ec826b90ed.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb03aa10b-21a4-14d9-ef54-c8ec826b90ed.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=7de2ab9aaaa26cd0f384020f67986185 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  展開ボタンは、ログインユーザーが編集担当者でも、チーム管理者でも、テストスイート作成者でもない場合であっても、クリック可能なボタンです。<br />
                  展開ボタンをクリックした場合、テストスイート内のテストケースを展開するオプションを選択するためのダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/fcc3e7fd30446920bf32b0c254e1e5af22d01538/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36376361633837632d313563342d656261642d386531322d6661396662326663636166632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F67cac87c-15c4-ebad-8e12-fa9fb2fccafc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=480afb96b45dc339a826346d174c31d1"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/67cac87c-15c4-ebad-8e12-fa9fb2fccafc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F67cac87c-15c4-ebad-8e12-fa9fb2fccafc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=8fd35ee2789e4b2b59d2c8ef2823a3b7 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「テストを実行する」を選択した場合、後述の「テストケース」章、「テスト実行画面」に遷移します。<br />
                  「テストを管理する」を選択した場合、後述の「テストケース」章、「テスト管理画面」に遷移します。
                </p>

                <h5>
                  <span id="informationボタン-1" class="fragment"></span
                  ><a href="#information%E3%83%9C%E3%82%BF%E3%83%B3-1"
                    ><i class="fa fa-link"></i></a
                  >Informationボタン
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/fcfa324fd59e2a4748b76adffc23871d4f30a0f6/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34373864393538302d346161362d663830632d383438372d3339306534613035653032342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F478d9580-4aa6-f80c-8487-390e4a05e024.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ab98ef10e971c0a7c4f0df7d914624b6"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/478d9580-4aa6-f80c-8487-390e4a05e024.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F478d9580-4aa6-f80c-8487-390e4a05e024.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=95926f112665473c91b99db3c65a6030 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Informationボタンは、ログインユーザーが編集担当者でも、チーム管理者でも、テストスイート作成者でもない場合であっても、クリック可能なボタンです。<br />
                  テストスイートの情報や状況を表示するInformationダイアログを表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/1fd9e313048c55b1926cdd24c8468e650ebb4604/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63363466323866322d656162382d633736352d613430652d3238346232393937333562632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc64f28f2-eab8-c765-a40e-284b299735bc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=c520a1e1d7695188085d81e39bf1ac6b"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/c64f28f2-eab8-c765-a40e-284b299735bc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc64f28f2-eab8-c765-a40e-284b299735bc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=aa751d1ad75b235a8f9c90beb151afd6 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <ul>
                  <li>テストスイートタイトル</li>
                  <li>備考</li>
                  <li>テストスイート作成者</li>
                  <li>実行ステップ数</li>
                  <li>編集担当者</li>
                  <li>テストスイート以下に登録されているテストケースの件数</li>
                  <li>
                    テストスイート以下に登録されているテストケースのそれぞれの状態
                  </li>
                  <li>テストスイート以下の進捗バー</li>
                </ul>

                <p>が表示されます。</p>

                <h5>
                  <span id="editボタン-1" class="fragment"></span
                  ><a href="#edit%E3%83%9C%E3%82%BF%E3%83%B3-1"
                    ><i class="fa fa-link"></i></a
                  >Editボタン
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/acf17f00b098ce5803588ef2c0761cc89c643b7e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31633130383739312d626538632d343233642d343564322d3065626664666132666363312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=5637c2a71d0a430788b8f9f6544321b7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cd704681e0a4ee302b23b20c4abb7a02 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Editボタンは、ログインユーザーがチームの管理者か、テストスイートの作成者か、テストスイートの編集権限者である場合のみクリック可能です。<br />
                  Editボタンをクリックすることで、テストスイート登録ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/5ebe0eea085bf6e793b5602d121352f102941164/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33373864656135652d623834302d393136622d333464652d6363343066383163323037612e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F378dea5e-b840-916b-34de-cc40f81c207a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=860a1bd2dc20ebd343ca490a2641f32f"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/378dea5e-b840-916b-34de-cc40f81c207a.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F378dea5e-b840-916b-34de-cc40f81c207a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=0ffab2697e729bd6f3f548bb03a94b14 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テストスイート作成時、以下の項目が設定可能です。
                </p>

                <h3>
                  <span id="タイトル-1" class="fragment"></span
                  ><a href="#%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-1"
                    ><i class="fa fa-link"></i></a
                  >タイトル
                </h3>

                <p>
                  テストスイートの表示名です。<br />
                  テストスイート一覧テーブルに表示されます。
                </p>

                <h3>
                  <span id="備考-2" class="fragment"></span
                  ><a href="#%E5%82%99%E8%80%83-2"><i class="fa fa-link"></i></a
                  >備考
                </h3>

                <p>
                  テストスイートの備考情報を入力します。<br />
                  後述の「テストスイート章」、「アクションボタン」の、「Informationボタン」から表示可能です。
                </p>

                <h3>
                  <span id="実行ステップ-1" class="fragment"></span
                  ><a
                    href="#%E5%AE%9F%E8%A1%8C%E3%82%B9%E3%83%86%E3%83%83%E3%83%97-1"
                    ><i class="fa fa-link"></i></a
                  >実行ステップ
                </h3>

                <p>
                  プログラム中の、該当するテストスイートの機能を実装しているステップ数を入力可能です。<br />
                  「テストサマリーレポート」出力時の、「テスト密度」「不具合密度」を算出するため必要な項目です。
                </p>

                <h3>
                  <span id="編集担当者-1" class="fragment"></span
                  ><a href="#%E7%B7%A8%E9%9B%86%E6%8B%85%E5%BD%93%E8%80%85-1"
                    ><i class="fa fa-link"></i></a
                  >編集担当者
                </h3>

                <p>
                  該当するテストスイートを、「チーム管理者」と、「テストスイート作成者」以外で編集出来るメンバーを指定します。<br />
                  （「チーム管理者」と、「テストスイート作成者」は、編集担当者に指定しないでも編集・削除の権限を持ちます。）
                </p>

                <h1>
                  <span id="テストケース-1" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9-1"
                    ><i class="fa fa-link"></i></a
                  >テストケース
                </h1>

                <h2>
                  <span id="テスト管理画面" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >テスト管理画面
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/616e3d82c09dd1dd90ff9384311a9ea0505436cf/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39616631653338622d323434312d653365302d383230392d3037653031663866333439662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F9af1e38b-2441-e3e0-8209-07e01f8f349f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=81782645e83d54ce1be1328ace853dfa"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/9af1e38b-2441-e3e0-8209-07e01f8f349f.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F9af1e38b-2441-e3e0-8209-07e01f8f349f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a3cb3d7c6851397887e2fb3858814dfd 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「テストスイート」章、「アクションボタン」内の、「展開ボタン」から、「テストを管理する」を選択した場合、テストスイート以下のテストケースを管理する画面を表示します。<br />
                  テストケース一覧テーブル<br />
                  <a
                    href="https://camo.qiitausercontent.com/3fd56bce64f18212b8939c24d8dc9dd7cfed5299/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f37306235653031642d643233652d303538662d636438302d6230663433343433633165382e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F70b5e01d-d23e-058f-cd80-b0f43443c1e8.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=671d9c0a313715119457ef4a99a3da4c"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/70b5e01d-d23e-058f-cd80-b0f43443c1e8.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F70b5e01d-d23e-058f-cd80-b0f43443c1e8.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ab75b42a9e7f78b248f80088a376a0ed 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h3>
                  <span id="テストケースの作成" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90"
                    ><i class="fa fa-link"></i></a
                  >テストケースの作成
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/54d3e393e3f12fe51df933e97266655313c2001a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31396239333031372d626465382d346634392d333033662d6434366135633832376633642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F19b93017-bde8-4f49-303f-d46a5c827f3d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=7f9478ff1303be2549fe318c54bfb229"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/19b93017-bde8-4f49-303f-d46a5c827f3d.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F19b93017-bde8-4f49-303f-d46a5c827f3d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=82d6870fcf7ab11d3e59cbfb59655a7d 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カード右下の、プラスアイコンボタンをクリックすることで、テストケースの作成ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/bfa6fc855caafb14caca0f2ad284cb70f68e4448/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f32666464326236612d336333652d313332652d653665372d6361386461636530353962622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2fdd2b6a-3c3e-132e-e6e7-ca8dace059bb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=d2a66282b5512848bb928ee624b4a60d"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/2fdd2b6a-3c3e-132e-e6e7-ca8dace059bb.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2fdd2b6a-3c3e-132e-e6e7-ca8dace059bb.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=4b54b52ff7ec14242198aab723a7cac3 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>テストケース作成時、以下の項目が設定可能です。</p>

                <h4>
                  <span id="テストケースタイトル" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB"
                    ><i class="fa fa-link"></i></a
                  >テストケースタイトル
                </h4>

                <p>
                  テストケースのタイトルを入力します。<br />
                  テストケース一覧テーブルに表示されます。
                </p>

                <h4>
                  <span id="テスト担当者" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E6%8B%85%E5%BD%93%E8%80%85"
                    ><i class="fa fa-link"></i></a
                  >テスト担当者
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/c230aa2cd311cc323505337f5536a8d9b441911b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39386162353330652d643964612d666639392d316532392d3563346235663034383535312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F98ab530e-d9da-ff99-1e29-5c4b5f048551.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0646832d17bc195ed2cebb95b1a9ed91"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/98ab530e-d9da-ff99-1e29-5c4b5f048551.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F98ab530e-d9da-ff99-1e29-5c4b5f048551.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=7880435cd635ba85cc0bc97416f65f05 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームのメンバーをセレクトボックスから一名選択できます。<br />
                  該当するテストケースの実行を担当します。
                </p>

                <h4>
                  <span id="重要度" class="fragment"></span
                  ><a href="#%E9%87%8D%E8%A6%81%E5%BA%A6"
                    ><i class="fa fa-link"></i></a
                  >重要度
                </h4>

                <p>☆の数によってテストケースの重要度を設定できます。</p>

                <h4>
                  <span id="詳細" class="fragment"></span
                  ><a href="#%E8%A9%B3%E7%B4%B0"><i class="fa fa-link"></i></a
                  >詳細
                </h4>

                <p>
                  「前提条件」、「（テスト実行）手順」、「（期待する）結果」を設定できます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/c018b09deeefab49588ed5ddd85c9e5ffa42e409/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34393730366534662d643530372d323837622d623634632d3161366265353737653761392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F49706e4f-d507-287b-b64c-1a6be577e7a9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=4ed34a60107b0fc1dfe723c4e4d512fd"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/49706e4f-d507-287b-b64c-1a6be577e7a9.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F49706e4f-d507-287b-b64c-1a6be577e7a9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b123c2cc38df15fecba1eecea5479d16 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  いずれも、順番に複数項目追加可能です。
                </p>

                <h3>
                  <span id="テストケース一覧テーブル" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E4%B8%80%E8%A6%A7%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"
                    ><i class="fa fa-link"></i></a
                  >テストケース一覧テーブル
                </h3>

                <h4>
                  <span id="no-2" class="fragment"></span
                  ><a href="#no-2"><i class="fa fa-link"></i></a>No
                </h4>

                <p>
                  テストスイート内での、テストケースが固有で所持する番号です。<br />
                  最初に作成されたものを「1」とし、順番にセットされます。
                </p>

                <h4>
                  <span id="status" class="fragment"></span
                  ><a href="#status"><i class="fa fa-link"></i></a>Status
                </h4>

                <p>
                  テストケースの状態を四色のパターンで示します。<br />
                  それぞれ、<br />
                  青色　＝　「完了」<br />
                  黄色　＝　「再テスト」<br />
                  赤色　＝　「問題」<br />
                  灰色　＝　「未実行」<br />
                  を示しています。
                </p>

                <h4>
                  <span id="importance-level" class="fragment"></span
                  ><a href="#importance-level"><i class="fa fa-link"></i></a
                  >Importance Level
                </h4>

                <p>
                  後述しますが、テストケース作成時に、テストケースに対して「重要度」を設定できます。<br />
                  「重要度」を1 ~ 3で示します。<br />
                  （並び替え可能です。）
                </p>

                <h4>
                  <span id="order" class="fragment"></span
                  ><a href="#order"><i class="fa fa-link"></i></a>Order
                </h4>

                <p>
                  テストスイート内での、テストケースが固有で所持する整列順序です。<br />
                  最初に作成されたものを「1」とし、順番にセットされます。<br />
                  （整列順序を変更する機能は現在メンテナンス中です。）
                </p>

                <h4>
                  <span id="test-case-title" class="fragment"></span
                  ><a href="#test-case-title"><i class="fa fa-link"></i></a>Test
                  Case Title
                </h4>

                <p>テストケースのタイトルを表示します。</p>

                <h4>
                  <span id="tester" class="fragment"></span
                  ><a href="#tester"><i class="fa fa-link"></i></a>Tester
                </h4>

                <p>
                  テストの実行担当者をアイコン表示します。<br />
                  並び替えが可能です。
                </p>

                <h4>
                  <span id="actions-1" class="fragment"></span
                  ><a href="#actions-1"><i class="fa fa-link"></i></a>Actions
                </h4>

                <p>
                  テストケースに対して実行可能なアクションを行うためのボタングループです。<br />
                  以下のようなものがあります。
                </p>

                <h5>
                  <span id="アクションボタン-1" class="fragment"></span
                  ><a
                    href="#%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3-1"
                    ><i class="fa fa-link"></i></a
                  >アクションボタン
                </h5>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/c339a055dbe04f93966088f82cd120aff2ca6715/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33633061666462372d633265362d383131312d666531312d6430383030396632323761372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3c0afdb7-c2e6-8111-fe11-d08009f227a7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=7b8100121248ae3034da804e7bdb4486"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3c0afdb7-c2e6-8111-fe11-d08009f227a7.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3c0afdb7-c2e6-8111-fe11-d08009f227a7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=3b6d56a2204e53ba0ba39d064ebb4bef 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h6>
                  <span id="informationボタン-2" class="fragment"></span
                  ><a href="#information%E3%83%9C%E3%82%BF%E3%83%B3-2"
                    ><i class="fa fa-link"></i></a
                  >Informationボタン
                </h6>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/fcfa324fd59e2a4748b76adffc23871d4f30a0f6/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34373864393538302d346161362d663830632d383438372d3339306534613035653032342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F478d9580-4aa6-f80c-8487-390e4a05e024.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ab98ef10e971c0a7c4f0df7d914624b6"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/478d9580-4aa6-f80c-8487-390e4a05e024.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F478d9580-4aa6-f80c-8487-390e4a05e024.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=95926f112665473c91b99db3c65a6030 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Informationボタンは、ログインユーザーが編集担当者でも、チーム管理者でも、テストスイート作成者でもない場合であっても、クリック可能なボタンです。<br />
                  テストケースの情報や状況を表示するInformationダイアログを表示します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/3d7f258f1951826eca6738d50e8df0385c4b0631/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f65343336323863322d306465632d356134642d633134632d6665363732613836303931352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe43628c2-0dec-5a4d-c14c-fe672a860915.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=9d927801d68fbab12d9b11e88dd3092d"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/e43628c2-0dec-5a4d-c14c-fe672a860915.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe43628c2-0dec-5a4d-c14c-fe672a860915.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=d853a63b0983017537dcd25df02850e2 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <ul>
                  <li>ステータス</li>
                </ul>

                <p>
                  テストケースの状態を四色のパターンで示します。<br />
                  それぞれ、<br />
                  青色　＝　「完了」<br />
                  黄色　＝　「再テスト」<br />
                  赤色　＝　「問題」<br />
                  灰色　＝　「未実行」<br />
                  を示しています。
                </p>

                <ul>
                  <li>重要度</li>
                  <li>テストケースの作成者</li>
                  <li>テストケースの最新更新者</li>
                  <li>テスト担当者</li>
                  <li>詳細</li>
                </ul>

                <p>
                  「前提条件」、「手順」、「（期待する）結果」が、全て順番に表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/268709b76b51972d5fe3e3ac59495a5091cb3264/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66313966653861352d383061642d643538312d303530322d3363306431646537343832642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff19fe8a5-80ad-d581-0502-3c0d1de7482d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=1711181b8f4671f85cfd295c06e24dbd"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/f19fe8a5-80ad-d581-0502-3c0d1de7482d.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff19fe8a5-80ad-d581-0502-3c0d1de7482d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=20d3632ca9587fdf01ff5eab91b36d25 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <ul>
                  <li>LOGS</li>
                </ul>

                <p>
                  テストの実行ログが、古い順から表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/30216c47ae9cc062ef62f8256d3b04dd6cbc3d3d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30363837643835352d633563362d333363352d633333382d3533666232383330326133332e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0687d855-c5c6-33c5-c338-53fb28302a33.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=78b344d991a175cfe262fc412c9b90ed"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/0687d855-c5c6-33c5-c338-53fb28302a33.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0687d855-c5c6-33c5-c338-53fb28302a33.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=09a05e58eb3ab0c54a7dbbf550724517 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  実行ログ一つに対して、「実施日」、「実施者」、「元のステータス」、「テスト後のステータス」、「テスト時記録した備考」が表示されます。
                </p>

                <h6>
                  <span id="editボタン-2" class="fragment"></span
                  ><a href="#edit%E3%83%9C%E3%82%BF%E3%83%B3-2"
                    ><i class="fa fa-link"></i></a
                  >Editボタン
                </h6>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/acf17f00b098ce5803588ef2c0761cc89c643b7e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31633130383739312d626538632d343233642d343564322d3065626664666132666363312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=5637c2a71d0a430788b8f9f6544321b7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1c108791-be8c-423d-45d2-0ebfdfa2fcc1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cd704681e0a4ee302b23b20c4abb7a02 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  Editボタンは、ログインユーザーがチームの管理者か、テストスイートの作成者か、テストスイートの編集権限者である場合のみクリック可能です。<br />
                  Editボタンをクリックすることで、テストケース登録ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/d8507e0213cac1c97ae94bd8e604daab3433d09c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f65373830663237652d636566612d643161362d616166352d3036653837383239303038622e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe780f27e-cefa-d1a6-aaf5-06e87829008b.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=cadb6566a0e60f05c80df7355e743158"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/e780f27e-cefa-d1a6-aaf5-06e87829008b.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fe780f27e-cefa-d1a6-aaf5-06e87829008b.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=d20a088aee4e4e4f067c45685bc36ec5 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>テストケース作成時、以下の項目が設定可能です。</p>

                <h4>
                  <span id="テストケースタイトル-1" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-1"
                    ><i class="fa fa-link"></i></a
                  >テストケースタイトル
                </h4>

                <p>
                  テストケースのタイトルを入力します。<br />
                  テストケース一覧テーブルに表示されます。
                </p>

                <h4>
                  <span id="テスト担当者-1" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E6%8B%85%E5%BD%93%E8%80%85-1"
                    ><i class="fa fa-link"></i></a
                  >テスト担当者
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/c230aa2cd311cc323505337f5536a8d9b441911b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39386162353330652d643964612d666639392d316532392d3563346235663034383535312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F98ab530e-d9da-ff99-1e29-5c4b5f048551.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0646832d17bc195ed2cebb95b1a9ed91"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/98ab530e-d9da-ff99-1e29-5c4b5f048551.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F98ab530e-d9da-ff99-1e29-5c4b5f048551.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=7880435cd635ba85cc0bc97416f65f05 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  チームのメンバーをセレクトボックスから一名選択できます。<br />
                  該当するテストケースの実行を担当します。
                </p>

                <h4>
                  <span id="重要度-1" class="fragment"></span
                  ><a href="#%E9%87%8D%E8%A6%81%E5%BA%A6-1"
                    ><i class="fa fa-link"></i></a
                  >重要度
                </h4>

                <p>☆の数によってテストケースの重要度を設定できます。</p>

                <h4>
                  <span id="詳細-1" class="fragment"></span
                  ><a href="#%E8%A9%B3%E7%B4%B0-1"><i class="fa fa-link"></i></a
                  >詳細
                </h4>

                <p>
                  「前提条件」、「（テスト実行）手順」、「（期待する）結果」を設定できます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/c018b09deeefab49588ed5ddd85c9e5ffa42e409/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f34393730366534662d643530372d323837622d623634632d3161366265353737653761392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F49706e4f-d507-287b-b64c-1a6be577e7a9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=4ed34a60107b0fc1dfe723c4e4d512fd"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/49706e4f-d507-287b-b64c-1a6be577e7a9.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F49706e4f-d507-287b-b64c-1a6be577e7a9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b123c2cc38df15fecba1eecea5479d16 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  いずれも、順番に複数項目追加可能です。
                </p>

                <h2>
                  <span id="テスト実行画面" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >テスト実行画面
                </h2>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/dc795218eef2519d795cdf2235d6b673fc34bf6c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30303263333764302d386335352d616232642d363431352d6534356533643333313839342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F002c37d0-8c55-ab2d-6415-e45e3d331894.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=59d54a3a4822b2c1843db8084817c541"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/002c37d0-8c55-ab2d-6415-e45e3d331894.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F002c37d0-8c55-ab2d-6415-e45e3d331894.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ac59ff179c311383db9f3e1901f6a816 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「テストスイート」章、「アクションボタン」内の、「展開ボタン」から、「テストを実行する」を選択した場合、テストスイート以下のテストケースを実行する画面を表示します。<br />
                  テスト実行画面には、ログインユーザーがテスト担当者に指定されているテストケースのみが表示されます。
                </p>

                <h3>
                  <span id="テスト実行カード" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E3%82%AB%E3%83%BC%E3%83%89"
                    ><i class="fa fa-link"></i></a
                  >テスト実行カード
                </h3>

                <p>
                  テスト実行カードは、テストケース一件を表示し、テスト結果を入力するためのカードです。<br />
                  <a
                    href="https://camo.qiitausercontent.com/eb4c67e7e2ba2f343488b62074b789fe5fc82d37/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f37653431316564392d383035322d346437622d373736332d3164663266373961373466312e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7e411ed9-8052-4d7b-7763-1df2f79a74f1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=3d30448f8aadbb6bc78dc466e57a73aa"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/7e411ed9-8052-4d7b-7763-1df2f79a74f1.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F7e411ed9-8052-4d7b-7763-1df2f79a74f1.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cee1accf84ffa0c59ca2fcddacc91bc1 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  初期状態時はClose状態であり、クリックすることで展開されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/103cca45d2db7586c5084732665bd80e66286093/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38613665336361382d313939392d353432352d653134342d6661323533306466306433352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8a6e3ca8-1999-5425-e144-fa2530df0d35.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=e4bea2e5bbe172690fb5250b41ec2596"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/8a6e3ca8-1999-5425-e144-fa2530df0d35.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F8a6e3ca8-1999-5425-e144-fa2530df0d35.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=bff50d48fd80ccccaac3603c5cbe6638 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  テストケースのタイトルはClose状態でも、左端に表示されています。<br />
                  （展開時も、左上に引き続き表示されます。）
                </p>

                <h4>
                  <span id="詳細-2" class="fragment"></span
                  ><a href="#%E8%A9%B3%E7%B4%B0-2"><i class="fa fa-link"></i></a
                  >詳細
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/07c144684f5ab6afc6d7d4e897d8a061a93a1bdc/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66316539653634652d363038332d656632372d303239362d3633353831626330613764662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff1e9e64e-6083-ef27-0296-63581bc0a7df.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=d4796e54238309a0e9f66f93acbb5ef5"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/f1e9e64e-6083-ef27-0296-63581bc0a7df.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff1e9e64e-6083-ef27-0296-63581bc0a7df.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=757f2b46a1405cb4e59c590131028c3d 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「前提条件」、「手順」、「（期待する）結果」が、全て順番に表示されます。
                </p>

                <h4>
                  <span id="ステータス表示" class="fragment"></span
                  ><a
                    href="#%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >ステータス表示
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/74f3a5cfd035b93cf9e0512aca7c8495356db09b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f35346234346131332d396637352d616234322d333666392d3365636332653661336363352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F54b44a13-9f75-ab42-36f9-3ecc2e6a3cc5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=57c3dc0def3d5cb7d502cf1278cd46a3"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/54b44a13-9f75-ab42-36f9-3ecc2e6a3cc5.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F54b44a13-9f75-ab42-36f9-3ecc2e6a3cc5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=c0ccff6e1b7a4caae05208a3fbe271cd 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  カード上中心部には、（現在のステータス）　➡　（テスト後のステータス）　が表示されています。<br />
                  状態を四色のパターンで示します。<br />
                  青色　＝　「完了」<br />
                  黄色　＝　「再テスト」<br />
                  赤色　＝　「問題」<br />
                  灰色　＝　「未実行」<br />
                  を示しています。
                </p>

                <p>
                  また、（テスト後のステータス）部をクリックすることで、テスト結果を入力することが可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/0683281c9f0225e7b5c12b58d53776eabcc949d1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f32623238653234612d346466302d643439332d303734622d3261376263343934303962302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2b28e24a-4df0-d493-074b-2a7bc49409b0.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=eaa50ea3d2cf5971acc0855535ca2af7"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/2b28e24a-4df0-d493-074b-2a7bc49409b0.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2b28e24a-4df0-d493-074b-2a7bc49409b0.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=981c6a241467bbbc7f48412015cb6a6e 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span
                    id="テスト結果入力ラジオボックス"
                    class="fragment"
                  ></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E7%B5%90%E6%9E%9C%E5%85%A5%E5%8A%9B%E3%83%A9%E3%82%B8%E3%82%AA%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9"
                    ><i class="fa fa-link"></i></a
                  >テスト結果入力ラジオボックス
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/e4bb35d5d72037e54d2fea57ff8dafe09cd63844/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f61613564363738632d633636652d613561372d363032322d6637333936616633663066352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Faa5d678c-c66e-a5a7-6022-f7396af3f0f5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=af700b4300590ddaa06213389af09644"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/aa5d678c-c66e-a5a7-6022-f7396af3f0f5.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Faa5d678c-c66e-a5a7-6022-f7396af3f0f5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=3dc19ff1d13ab9300fb7f61e520d5699 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テスト結果を、「完了（complete）」「再テスト（retest）」「問題（Issue）」から選択し、入力することが出来ます。
                </p>

                <h4>
                  <span id="理由備考" class="fragment"></span
                  ><a href="#%E7%90%86%E7%94%B1%E5%82%99%E8%80%83"
                    ><i class="fa fa-link"></i></a
                  >理由（備考）
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/2644cffd54b3f0469deb625a17489a22466b5bcc/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f30663733636433632d366461632d373535312d383430382d6133333036613338633963392e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0f73cd3c-6dac-7551-8408-a3306a38c9c9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=bad24d78aa39e8f0f170bb5db8ef8216"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/0f73cd3c-6dac-7551-8408-a3306a38c9c9.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F0f73cd3c-6dac-7551-8408-a3306a38c9c9.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=af6a315b98fcf3057be3d8cebf9baa53 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テスト結果に、「再テスト（retest）」「問題（Issue）」を選択している場合のみ登録が可能です。
                </p>

                <h3>
                  <span id="テストの完了" class="fragment"></span
                  ><a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E5%AE%8C%E4%BA%86"
                    ><i class="fa fa-link"></i></a
                  >テストの完了
                </h3>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/fa1b3723630922f06c385ad127a3f82f0025f57a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31323966363035332d323239662d383238352d383234312d6263353437396339366534662e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F129f6053-229f-8285-8241-bc5479c96e4f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f0c55d42e01bfac4498299a0d12ab154"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/129f6053-229f-8285-8241-bc5479c96e4f.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F129f6053-229f-8285-8241-bc5479c96e4f.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ca7b1bb4d22cf81bb0ddf77083d1220a 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  テスト実行画面左下部の、「^」アイコンボタンをクリックすると、テスト実行画面でのアクションを選択できます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/dc9f5d43d88130e24f337f0f72d955064e5fe292/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36323631646364642d613133662d366262342d366539352d6366373339313238353234612e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6261dcdd-a13f-6bb4-6e95-cf739128524a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=394e3fdd4e0f23e99af3faa4efc5178a"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/6261dcdd-a13f-6bb4-6e95-cf739128524a.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6261dcdd-a13f-6bb4-6e95-cf739128524a.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=1b0e4f5fd8e1130909f41254fde44ca1 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <h4>
                  <span id="完了ボタン" class="fragment"></span
                  ><a href="#%E5%AE%8C%E4%BA%86%E3%83%9C%E3%82%BF%E3%83%B3"
                    ><i class="fa fa-link"></i></a
                  >完了ボタン
                </h4>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/1a98168c82563218bbbc1dcb95fa58668f631a0c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f36633631313966302d393264332d656432622d633634622d3863613736633938366464372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6c6119f0-92d3-ed2b-c64b-8ca76c986dd7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=947ed8b7caac417dafe943b66e8382e8"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/6c6119f0-92d3-ed2b-c64b-8ca76c986dd7.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F6c6119f0-92d3-ed2b-c64b-8ca76c986dd7.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cf6a78e81dc3a0df9bc82e444e5faf22 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  緑色の紙飛行機アイコンボタンをクリックすると、完了確認メッセージが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/4a26b1fc14605607f7f2932d53c1531ee1de3a75/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63316164353935622d393832612d343534302d643736342d6263333634383362366433632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc1ad595b-982a-4540-d764-bc36483b6d3c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=75f084a8579285300be196789c38a14e"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/c1ad595b-982a-4540-d764-bc36483b6d3c.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc1ad595b-982a-4540-d764-bc36483b6d3c.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=b9271a87e7a223c424d14a5f07cb3abd 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「はい」をクリックした場合、テスト結果を入力しているテストのみが送信され、テスト結果がサーバーに登録されます。
                </p>

                <h1>
                  <span id="有料会員登録" class="fragment"></span
                  ><a
                    href="#%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2"
                    ><i class="fa fa-link"></i></a
                  >有料会員登録
                </h1>

                <p>
                  チームの運営は、有料会員のみが可能な機能です。<br />
                  （サブスクリプションプランに参加しなくとも、チームに参加し、テストを管理・実行する機能は問題なく利用できます。）<br />
                  <a
                    href="https://camo.qiitausercontent.com/be83f79af1c47df524538419fb07a0bae1cf4a8f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33626338306633662d623939612d376565312d386339322d6633623238363135363765342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=790be6238eb011e0f1048e78ef4f539e"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=bf2c3566a23a81df6f86edd2ee74a96c 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ヘッダー右端部の、アクションドロップダウンを展開し、<br />
                  <a
                    href="https://camo.qiitausercontent.com/112d7fbdd4c8301a53a0f96e030d0f09b515c9ff/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f32663365363533392d636331392d316530652d303133392d3634653461313964313566632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a78a5cb0c7d523d6274563a3dd0a11b4"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=e26e25c9913d25d4da6891dd587504b9 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「有料オプション管理」をクリックすると、有料オプション管理画面に遷移します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/4e1271549950b7f7b58b7e5b30ccb10a89e615d8/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f39353033396164342d303361322d653461332d353230312d3863333561373336303633302e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F95039ad4-03a2-e4a3-5201-8c35a7360630.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=88926ae7cbd053d932c2beb9550db756"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/95039ad4-03a2-e4a3-5201-8c35a7360630.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F95039ad4-03a2-e4a3-5201-8c35a7360630.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=9c3f89d0c5709781e0aff8df86005104 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  プラン説明、<br />
                  トライアル期間について、<br />
                  自動更新について、<br />
                  解約方法については、有料オプション管理画面に記載されています。
                </p>

                <h1>
                  <span id="プロフィールの表示" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    ><i class="fa fa-link"></i></a
                  >プロフィールの表示
                </h1>

                <p>
                  他のユーザーのアイコンをクリックすると、ユーザーアクションモーダルを表示可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/dea43c7526c52b8cf13cbd46ab598fcb48fbff23/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62373833313631362d656135632d383837622d333363302d6362353936633539636564642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb7831616-ea5c-887b-33c0-cb596c59cedd.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a614ad4fb74450cc8f9175e2c1351774"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/b7831616-ea5c-887b-33c0-cb596c59cedd.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb7831616-ea5c-887b-33c0-cb596c59cedd.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ac1edf83e3b7cfcf26fd6e103f211b2e 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「プロフィール」をクリックした場合、プロフィール画面に遷移します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/0265ef63f42dc8b6910d67b89a0b599f515325ad/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33623335386433332d666634332d336564392d373462642d3935353561386664316264352e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3b358d33-ff43-3ed9-74bd-9555a8fd1bd5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a2ad5feeb83876d7a9df1dc90932e13c"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3b358d33-ff43-3ed9-74bd-9555a8fd1bd5.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3b358d33-ff43-3ed9-74bd-9555a8fd1bd5.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=4383ccf97700c010e3cd2bb8ec0a21fe 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  プロフィールは、後述するプロフィール編集画面から、さまざまなカスタマイズが可能です。
                </p>

                <h1>
                  <span id="プロフィール編集画面" class="fragment"></span
                  ><a
                    href="#%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E7%B7%A8%E9%9B%86%E7%94%BB%E9%9D%A2"
                    ><i class="fa fa-link"></i></a
                  >プロフィール編集画面
                </h1>

                <p>
                  <a
                    href="https://camo.qiitausercontent.com/be83f79af1c47df524538419fb07a0bae1cf4a8f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33626338306633662d623939612d376565312d386339322d6633623238363135363765342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=790be6238eb011e0f1048e78ef4f539e"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3bc80f3f-b99a-7ee1-8c92-f3b2861567e4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=bf2c3566a23a81df6f86edd2ee74a96c 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  ヘッダー右端部の、アクションドロップダウンを展開し、<br />
                  <a
                    href="https://camo.qiitausercontent.com/112d7fbdd4c8301a53a0f96e030d0f09b515c9ff/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f32663365363533392d636331392d316530652d303133392d3634653461313964313566632e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a78a5cb0c7d523d6274563a3dd0a11b4"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F2f3e6539-cc19-1e0e-0139-64e4a19d15fc.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=e26e25c9913d25d4da6891dd587504b9 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「プロフィールを編集する」をクリックすると、プロフィール編集画面に遷移します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/96a7506d3b3a929571cb6150f34618e140c49a7d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66353239326639372d373061652d623538652d393364312d3664373739393937613837342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff5292f97-70ae-b58e-93d1-6d779997a874.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=3561020b246c77acd64655a2613856df"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/f5292f97-70ae-b58e-93d1-6d779997a874.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Ff5292f97-70ae-b58e-93d1-6d779997a874.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ee8b3b0855f6dd610ccf8f112d51c949 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  「表示名」、「メッセージ文（プロフィール文）」を編集できるほか、アイコンを変更可能です。
                </p>

                <h2>
                  <span id="アイコン編集ダイアログ" class="fragment"></span
                  ><a
                    href="#%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B7%A8%E9%9B%86%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0"
                    ><i class="fa fa-link"></i></a
                  >アイコン編集ダイアログ
                </h2>

                <p>
                  プロフィール編集画面から、自分のアイコンをクリックすると、アイコン編集ダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/d07fe20cdf3fff711cf610c07ecfd096af54a69b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33343033343538332d346135352d646561332d346634302d6664316336336636613739342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F34034583-4a55-dea3-4f40-fd1c63f6a794.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=b01f5ccd9b92b1244f5a5162ccda19fb"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/34034583-4a55-dea3-4f40-fd1c63f6a794.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F34034583-4a55-dea3-4f40-fd1c63f6a794.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=26911535ee1f066a3feb42c74ec52cc3 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  画面中央のセレクトボックスで、「シンプルアイコン」を選択している場合は、色を選択し、頭文字を入力することでアイコンをカスタマイズ可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/0d7d21e0ba39bcbf635b74e789db1e6cb02035b1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f38373564383064322d373635332d313963652d306265622d3938323962336639346162362e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F875d80d2-7653-19ce-0beb-9829b3f94ab6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=d41a523a81a05ce0c8ea055d04c5c219"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/875d80d2-7653-19ce-0beb-9829b3f94ab6.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F875d80d2-7653-19ce-0beb-9829b3f94ab6.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ec01df18c542a75599235aac4a2cadf5 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/4911f9b7b20208d48e439edcdca2e3ce44514c7b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f63396135383338382d643239662d336637392d333762632d3033656632383232303762342e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc9a58388-d29f-3f79-37bc-03ef282207b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f706b67caae0249988e2e58c00f35eef"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/c9a58388-d29f-3f79-37bc-03ef282207b4.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fc9a58388-d29f-3f79-37bc-03ef282207b4.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=eff5f9a323b4dc6655d5d4152c0ea167 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  「画像アイコン」を選択した場合は、画像のアップロードが可能です。<br />
                  画像をアップロードする場合は、「画像をアップロード」ボタンをクリックしてください。
                </p>

                <p>
                  画像が正常にアップロードされた場合は、円形選択切り抜きダイアログが表示されます。<br />
                  <a
                    href="https://camo.qiitausercontent.com/a631930bbb0e6676eeeca89cdbbf541ce02147cb/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f66666135633162662d333537392d343535302d356261362d3066393133623939626531642e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fffa5c1bf-3579-4550-5ba6-0f913b99be1d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=3a15595bce3572077ed53f986f1aed01"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/ffa5c1bf-3579-4550-5ba6-0f913b99be1d.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fffa5c1bf-3579-4550-5ba6-0f913b99be1d.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=ef040d4d197b257d4e37ec1bc5c0e2bd 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  選択円は自由に縮小・拡大・移動が可能です。<br />
                  <a
                    href="https://camo.qiitausercontent.com/0a7936f392b6601ed1264035da58ab4425fcd4a5/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f62303630323961632d653063612d393239312d393734362d3633306331626135633534382e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb06029ac-e0ca-9291-9746-630c1ba5c548.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=ad0141fa06b33f809f51bc4992145a58"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/b06029ac-e0ca-9291-9746-630c1ba5c548.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2Fb06029ac-e0ca-9291-9746-630c1ba5c548.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cde9f7780356a06a2c728d3c380fa593 1x
                      "
                      loading="lazy" /></a
                  ><br />
                  <a
                    href="https://camo.qiitausercontent.com/11dee3220720c38b18d3a47726b818250f55ac5e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f31323237643034642d356436652d653934342d356163632d3763396564663231333432332e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1227d04d-5d6e-e944-5acc-7c9edf213423.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=a5a2c91ced0a8bf147396da80d377704"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/1227d04d-5d6e-e944-5acc-7c9edf213423.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F1227d04d-5d6e-e944-5acc-7c9edf213423.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=10aba9dcaf23a5da1b8c004f37387256 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  選択が完了したら、ダイアログ左下の「切り取り」ボタンをクリックし、円形選択切り抜きダイアログを終了します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/5d961eca88e2d6c8ec8f4e3cd851e8b62572c9ef/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f33646563623739662d376237332d626561382d316462642d3736396135333462656637652e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3decb79f-7b73-bea8-1dbd-769a534bef7e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=0a0963aa7aaf30b52ca82285c3293e0d"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/3decb79f-7b73-bea8-1dbd-769a534bef7e.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F3decb79f-7b73-bea8-1dbd-769a534bef7e.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=a7d527116ceff4243745db2f78dc6cca 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  引き続き、ダイアログ左下の「登録」ボタンをクリックし、アイコン編集ダイアログを終了します。<br />
                  <a
                    href="https://camo.qiitausercontent.com/cb3872c21ba971fff6f4c49c587aaf24218844c8/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313836393036312f37383735323064342d343464382d393637322d383935642d6262656663633139656335372e706e67"
                    target="_blank"
                    rel="nofollow noopener"
                    ><img
                      src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F787520d4-44d8-9672-895d-bbefcc19ec57.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=c75de12ba7551c76651d4c2037f16825"
                      alt="image.png"
                      data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1869061/787520d4-44d8-9672-895d-bbefcc19ec57.png"
                      srcset="
                        https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1869061%2F787520d4-44d8-9672-895d-bbefcc19ec57.png?ixlib=rb-4.0.0&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=d47db6d69a69b508721b9f48d3746490 1x
                      "
                      loading="lazy"
                  /></a>
                </p>

                <p>
                  最後に、カード左下部の「登録」ボタンをクリックし、正常に保存が完了したら、プロフィールの編集が完了です。
                </p>
              </div>
            </div>
          </section>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card height="740" style="overflow-y: auto;">
          <div class="it-Toc">
            <div class="it-Toc_nav">
              <ul>
                <li>
                  <a
                    href="#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E6%A6%82%E8%A6%81"
                    class=""
                    >サイトの概要</a
                  >
                </li>
                <li>
                  <a
                    href="#itamaster%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9"
                    class=""
                    >Itamasterの使い方</a
                  >
                  <ul>
                    <li>
                      <a
                        href="#%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3"
                        class=""
                        >アカウント作成・ログイン</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90"
                            class=""
                            >アカウント作成</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3" class=""
                    >ログイン</a
                  >
                </li>
                <li>
                  <a href="#%E3%83%81%E3%83%BC%E3%83%A0" class="">チーム</a>
                  <ul>
                    <li>
                      <a
                        href="#%E3%83%81%E3%83%BC%E3%83%A0%E4%B8%80%E8%A6%A7%E7%94%BB%E9%9D%A2%E8%87%AA%E5%88%86%E3%81%8C%E6%89%80%E5%B1%9E%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E4%B8%80%E8%A6%A7%E7%94%BB%E9%9D%A2"
                        class=""
                        >チーム一覧画面（自分が所属しているチームの一覧画面）</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%82%AB%E3%83%BC%E3%83%89"
                            class=""
                            >チームカード</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E6%9C%89%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%82%E3%82%8B%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                                class=""
                                >チームが有効（管理者が有料会員プランに加入中である）であり、ログインユーザーがチームの管理者である場合の表示</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E6%9C%89%E5%8A%B9%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                                class=""
                                >チームが有効であり、ログインユーザーがチームの管理者ではない場合の表示</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E7%84%A1%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                                class=""
                                >チームが無効（管理者が有料会員プランに加入中ではない）であり、ログインユーザーがチームの管理者である場合の表示</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%8C%E7%84%A1%E5%8A%B9%E7%AE%A1%E7%90%86%E8%80%85%E3%81%8C%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E3%83%97%E3%83%A9%E3%83%B3%E3%81%AB%E5%8A%A0%E5%85%A5%E4%B8%AD%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8A%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%E3%81%A7%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E8%A1%A8%E7%A4%BA"
                                class=""
                                >チームが無効（管理者が有料会員プランに加入中ではない）であり、ログインユーザーがチームの管理者でない場合の表示</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%82%AB%E3%83%BC%E3%83%89%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3"
                            class=""
                            >チームカードアクションボタン</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#information%E3%83%9C%E3%82%BF%E3%83%B3"
                                class=""
                                >Informationボタン</a
                              >
                            </li>
                            <li>
                              <a
                                href="#edit%E3%83%9C%E3%82%BF%E3%83%B3"
                                class=""
                                >Editボタン</a
                              >
                              <ul>
                                <li>
                                  <a
                                    href="#%E3%83%81%E3%83%BC%E3%83%A0id"
                                    class=""
                                    >チームID</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D"
                                    >チーム名</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%A2"
                                    >チームメモ</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A"
                                    >プライベート設定</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%AE%A1%E7%90%86%E3%83%9C%E3%82%BF%E3%83%B3"
                                >チームメンバー管理ボタン</a
                              >
                            </li>
                            <li>
                              <a href="#exit%E3%83%9C%E3%82%BF%E3%83%B3"
                                >Exitボタン</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%9C%E3%82%BF%E3%83%B3%E3%83%81%E3%83%BC%E3%83%A0%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3%E8%A1%A8%E7%A4%BA%E9%9D%9E%E8%A1%A8%E7%A4%BA%E6%97%A9%E8%A6%8B%E8%A1%A8"
                                class="focus"
                                >プロジェクトリンクボタン・チームアクションボタン表示/非表示早見表</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E6%96%B0%E8%A6%8F%E4%BD%9C%E6%88%90"
                            >チームの新規作成</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2"
                        >チームメンバー管理画面</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E6%8B%9B%E5%BE%85"
                            >チームメンバーの招待</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%B8%E3%81%AE%E5%8A%A0%E5%85%A5"
                            >チームへの加入</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89"
                            >チームメンバーカード</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85"
                                >チームの管理者</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AB%E5%8A%A0%E5%85%A5%E6%B8%88%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC"
                                >チームに加入済のユーザー</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%81%E3%83%BC%E3%83%A0%E3%81%AB%E6%8B%9B%E5%BE%85%E4%B8%AD%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC"
                                >チームに招待中のユーザー</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"
                    >プロジェクト</a
                  >
                  <ul>
                    <li>
                      <a
                        href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E9%81%B8%E6%8A%9E%E7%94%BB%E9%9D%A2"
                        >プロジェクト選択画面</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90"
                            >プロジェクトの作成</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E5%90%8D"
                                >プロジェクト名</a
                              >
                            </li>
                            <li>
                              <a href="#%E3%83%A1%E3%83%A2">メモ</a>
                            </li>
                            <li>
                              <a href="#create-environment-steps-page"
                                >CREATE ENVIRONMENT STEPS PAGE</a
                              >
                            </li>
                            <li>
                              <a href="#test-environment-url"
                                >TEST ENVIRONMENT URL</a
                              >
                            </li>
                            <li>
                              <a href="#repository-url">REPOSITORY URL</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E9%81%B8%E6%8A%9E"
                            >プロジェクトの選択</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E5%85%A8%E4%BD%93%E3%81%A7%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E9%80%B2%E6%8D%97%E3%83%90%E3%83%BC"
                            >プロジェクト全体でのテストの進捗バー</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E7%B5%90%E6%9E%9C%E4%B8%80%E8%A6%A7%E8%A1%A8%E3%81%AE%E5%87%BA%E5%8A%9B"
                            >テスト結果一覧表の出力</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E5%87%BA%E5%8A%9B%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3"
                                >出力オプション</a
                              >
                              <ul>
                                <li>
                                  <a
                                    href="#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D"
                                    >システム名</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%82%B5%E3%83%96%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D"
                                    >サブシステム名</a
                                  >
                                </li>
                                <li>
                                  <a href="#%E8%B2%AC%E4%BB%BB%E8%80%85"
                                    >責任者</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D-1"
                                    >チーム名</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%86%E3%82%B9%E3%83%88%E9%96%8B%E5%A7%8B%E6%97%A5%E3%83%86%E3%82%B9%E3%83%88%E7%B5%82%E4%BA%86%E6%97%A5"
                                    >テスト開始日・テスト終了日</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#%E5%87%BA%E5%8A%9B%E7%A2%BA%E8%AA%8D"
                                >出力確認</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C%E8%A1%A8"
                                >テスト実行結果表</a
                              >
                              <ul>
                                <li>
                                  <a href="#%E9%A0%85%E7%9B%AE">項目</a>
                                  <ul>
                                    <li>
                                      <a href="#no">No</a>
                                    </li>
                                    <li>
                                      <a
                                        href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88"
                                        >テストスイート</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9"
                                        >テストケース</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"
                                        >前提条件</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E3%83%86%E3%82%B9%E3%83%88%E6%89%8B%E9%A0%86"
                                        >テスト手順</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E6%9C%9F%E5%BE%85%E3%81%99%E3%82%8B%E7%B5%90%E6%9E%9C"
                                        >期待する結果</a
                                      >
                                    </li>
                                    <li>
                                      <a href="#%E5%9B%9E%E6%95%B0">回数</a>
                                    </li>
                                    <li>
                                      <a href="#%E7%B5%90%E6%9E%9C">結果</a>
                                    </li>
                                    <li>
                                      <a href="#%E5%AE%9F%E6%96%BD%E6%97%A5"
                                        >実施日</a
                                      >
                                    </li>
                                    <li>
                                      <a href="#%E5%AE%9F%E6%96%BD%E8%80%85"
                                        >実施者</a
                                      >
                                    </li>
                                    <li>
                                      <a href="#%E5%82%99%E8%80%83">備考</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#%E8%A1%8C%E3%81%AE%E8%89%B2"
                                    >行の色</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E7%B0%A1%E6%98%93%E3%82%B5%E3%83%9E%E3%83%AA"
                                    >簡易サマリ</a
                                  >
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B5%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E5%87%BA%E5%8A%9B"
                            >テストサマリーレポートの出力</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E5%87%BA%E5%8A%9B%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-1"
                                >出力オプション</a
                              >
                              <ul>
                                <li>
                                  <a
                                    href="#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D-1"
                                    >システム名</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%82%B5%E3%83%96%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%90%8D-1"
                                    >サブシステム名</a
                                  >
                                </li>
                                <li>
                                  <a href="#%E8%B2%AC%E4%BB%BB%E8%80%85-1"
                                    >責任者</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%81%E3%83%BC%E3%83%A0%E5%90%8D-2"
                                    >チーム名</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#%E3%83%86%E3%82%B9%E3%83%88%E9%96%8B%E5%A7%8B%E6%97%A5%E3%83%86%E3%82%B9%E3%83%88%E7%B5%82%E4%BA%86%E6%97%A5-1"
                                    >テスト開始日・テスト終了日</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#%E5%87%BA%E5%8A%9B%E7%A2%BA%E8%AA%8D-1"
                                >出力確認</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%82%B5%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88"
                                >サマリーレポート</a
                              >
                              <ul>
                                <li>
                                  <a href="#%E3%83%87%E3%83%BC%E3%82%BF"
                                    >データ</a
                                  >
                                  <ul>
                                    <li>
                                      <a href="#%E5%AE%8C%E4%BA%86%E7%8E%87"
                                        >完了率</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AF%86%E5%BA%A6"
                                        >テスト密度</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E6%A4%9C%E5%87%BA%E4%B8%8D%E5%85%B7%E5%90%88%E5%AF%86%E5%BA%A6"
                                        >検出不具合密度</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E4%B8%8D%E5%85%B7%E5%90%88%E7%99%BA%E7%94%9F%E7%8E%87"
                                        >不具合発生率</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#%E6%8E%A8%E6%B8%AC%E6%AE%8B%E5%AD%98%E4%B8%8D%E5%85%B7%E5%90%88%E4%BB%B6%E6%95%B0"
                                        >推測残存不具合件数</a
                                      >
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#%E3%82%B0%E3%83%A9%E3%83%95"
                                    >グラフ</a
                                  >
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88-1"
                    >テストスイート</a
                  >
                  <ul>
                    <li>
                      <a
                        href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90"
                        >テストスイートの作成</a
                      >
                      <ul>
                        <li>
                          <a href="#%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB"
                            >タイトル</a
                          >
                        </li>
                        <li>
                          <a href="#%E5%82%99%E8%80%83-1">備考</a>
                        </li>
                        <li>
                          <a
                            href="#%E5%AE%9F%E8%A1%8C%E3%82%B9%E3%83%86%E3%83%83%E3%83%97"
                            >実行ステップ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E7%B7%A8%E9%9B%86%E6%8B%85%E5%BD%93%E8%80%85"
                            >編集担当者</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%E4%B8%80%E8%A6%A7%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"
                        >テストスイート一覧テーブル</a
                      >
                      <ul>
                        <li>
                          <a href="#no-1">No</a>
                        </li>
                        <li>
                          <a href="#completetestcase">complete/testcase(%)</a>
                        </li>
                        <li>
                          <a href="#test-suite-title">Test Suite Title</a>
                        </li>
                        <li>
                          <a href="#actions">Actions</a>
                          <ul>
                            <li>
                              <a
                                href="#%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3"
                                >アクションボタン</a
                              >
                              <ul>
                                <li>
                                  <a
                                    href="#%E5%B1%95%E9%96%8B%E3%83%9C%E3%82%BF%E3%83%B3"
                                    >展開ボタン</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#information%E3%83%9C%E3%82%BF%E3%83%B3-1"
                                    >Informationボタン</a
                                  >
                                </li>
                                <li>
                                  <a href="#edit%E3%83%9C%E3%82%BF%E3%83%B3-1"
                                    >Editボタン</a
                                  >
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-1"
                            >タイトル</a
                          >
                        </li>
                        <li>
                          <a href="#%E5%82%99%E8%80%83-2">備考</a>
                        </li>
                        <li>
                          <a
                            href="#%E5%AE%9F%E8%A1%8C%E3%82%B9%E3%83%86%E3%83%83%E3%83%97-1"
                            >実行ステップ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#%E7%B7%A8%E9%9B%86%E6%8B%85%E5%BD%93%E8%80%85-1"
                            >編集担当者</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9-1"
                    >テストケース</a
                  >
                  <ul>
                    <li>
                      <a
                        href="#%E3%83%86%E3%82%B9%E3%83%88%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2"
                        >テスト管理画面</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90"
                            >テストケースの作成</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB"
                                >テストケースタイトル</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E6%8B%85%E5%BD%93%E8%80%85"
                                >テスト担当者</a
                              >
                            </li>
                            <li>
                              <a href="#%E9%87%8D%E8%A6%81%E5%BA%A6">重要度</a>
                            </li>
                            <li>
                              <a href="#%E8%A9%B3%E7%B4%B0">詳細</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E4%B8%80%E8%A6%A7%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"
                            >テストケース一覧テーブル</a
                          >
                          <ul>
                            <li>
                              <a href="#no-2">No</a>
                            </li>
                            <li>
                              <a href="#status">Status</a>
                            </li>
                            <li>
                              <a href="#importance-level">Importance Level</a>
                            </li>
                            <li>
                              <a href="#order">Order</a>
                            </li>
                            <li>
                              <a href="#test-case-title">Test Case Title</a>
                            </li>
                            <li>
                              <a href="#tester">Tester</a>
                            </li>
                            <li>
                              <a href="#actions-1">Actions</a>
                              <ul>
                                <li>
                                  <a
                                    href="#%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3-1"
                                    >アクションボタン</a
                                  >
                                  <ul>
                                    <li>
                                      <a
                                        href="#information%E3%83%9C%E3%82%BF%E3%83%B3-2"
                                        >Informationボタン</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#edit%E3%83%9C%E3%82%BF%E3%83%B3-2"
                                        >Editボタン</a
                                      >
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-1"
                                >テストケースタイトル</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E6%8B%85%E5%BD%93%E8%80%85-1"
                                >テスト担当者</a
                              >
                            </li>
                            <li>
                              <a href="#%E9%87%8D%E8%A6%81%E5%BA%A6-1"
                                >重要度</a
                              >
                            </li>
                            <li>
                              <a href="#%E8%A9%B3%E7%B4%B0-1">詳細</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E7%94%BB%E9%9D%A2"
                        >テスト実行画面</a
                      >
                      <ul>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E8%A1%8C%E3%82%AB%E3%83%BC%E3%83%89"
                            >テスト実行カード</a
                          >
                          <ul>
                            <li>
                              <a href="#%E8%A9%B3%E7%B4%B0-2">詳細</a>
                            </li>
                            <li>
                              <a
                                href="#%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E8%A1%A8%E7%A4%BA"
                                >ステータス表示</a
                              >
                            </li>
                            <li>
                              <a
                                href="#%E3%83%86%E3%82%B9%E3%83%88%E7%B5%90%E6%9E%9C%E5%85%A5%E5%8A%9B%E3%83%A9%E3%82%B8%E3%82%AA%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9"
                                >テスト結果入力ラジオボックス</a
                              >
                            </li>
                            <li>
                              <a href="#%E7%90%86%E7%94%B1%E5%82%99%E8%80%83"
                                >理由（備考）</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="#%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E5%AE%8C%E4%BA%86"
                            >テストの完了</a
                          >
                          <ul>
                            <li>
                              <a
                                href="#%E5%AE%8C%E4%BA%86%E3%83%9C%E3%82%BF%E3%83%B3"
                                >完了ボタン</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#%E6%9C%89%E6%96%99%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2"
                    >有料会員登録</a
                  >
                </li>
                <li>
                  <a
                    href="#%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%81%AE%E8%A1%A8%E7%A4%BA"
                    >プロフィールの表示</a
                  >
                </li>
                <li>
                  <a
                    href="#%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E7%B7%A8%E9%9B%86%E7%94%BB%E9%9D%A2"
                    >プロフィール編集画面</a
                  >
                  <ul>
                    <li>
                      <a
                        href="#%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B7%A8%E9%9B%86%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0"
                        >アイコン編集ダイアログ</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: "guidePage",
  };
</script>
