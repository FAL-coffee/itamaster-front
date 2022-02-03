export default ({ app }, inject) => {
  // util
  const signin = () => {
    return app.router.push(app.localePath({ path: "/signIn" }));
  };
  const signup = () => {
    return app.router.push(app.localePath({ path: "/signUp" }));
  };
  const profile = (id) => {
    return app.router.push(app.localePath({ path: "/profile/" + id }));
  };
  const profileRegist = () => {
    return app.router.push(app.localePath({ path: "/profileRegister" }));
  };
  const toContactForm = () => {
    return app.router.push(app.localePath({ path: "/contactForm" }));
  };
  const toPrivacyPolicy = () => {
    return app.router.push(app.localePath({ path: "/privacyPolicy" }));
  };
  const toHome = () => {
    return app.router.push(app.localePath({ path: "/myteam" }));
  };
  const toTerms = () => {
    return app.router.push(app.localePath({ path: "/terms" }));
  };
  const toGuide = () => {
    return app.router.push(app.localePath({ path: "/guide" }));
  };
  const toTop = () => {
    return app.router.push(app.localePath({ path: "/" }));
  };
  const toPayment = () => {
    return app.router.push(app.localePath({ path: "/payment" }));
  };
  const toSpecifiedNotation = () => {
    return app.router.push(app.localePath({ path: "/specifiedNotation" }));
  };
  const toNewsPage = () => {
    return app.router.push(app.localePath({ path: "/news" }));
  };

  // 自分が所属しているチームの一覧画面を表示する
  const toTeamList = () => {
    return app.router.push(app.localePath({ path: "/myteam" }));
  };

  // チーム管理画面を表示する
  const toTeamManage = (data) => {
    // data{teamId} ...teamId
    return app.router.push(
      app.localePath({ path: "/team/" + data + "/manage" })
    );
  };

  // プロジェクト選択兼テストスイート管理画面を表示する
  const toProjects = (teamId) => {
    return app.router.push(app.localePath({ path: "/team/" + teamId }));
  };

  // テスト環境構築手順ページを表示する
  const toCreateEnvironmentSteps = (data) => {
    // data{teamId,project_id}
    return app.router.push(
      app.localePath({
        path: "/team/" + data.teamId + "/project/" + data.project_id,
      })
    );
  };

  // テストスイートの管理画面を表示する
  const toTestSuiteManage = (data) => {
    // data{teamId,project_id,testsuite_id}
    return app.router.push(
      app.localePath({
        path:
          "/team/" +
          data.teamId +
          "/project/" +
          data.project_id +
          "/testsuite/" +
          data.testsuite_id +
          "/manage",
      })
    );
  };

  // テストスイート実行画面を表示する
  const toTestSuiteRun = (data) => {
    // data{teamId,project_id,testsuite_id}
    return app.router.push(
      app.localePath({
        path:
          "/team/" +
          data.teamId +
          "/project/" +
          data.project_id +
          "/testsuite/" +
          data.testsuite_id +
          "/run",
      })
    );
  };

  inject("signin", signin);
  inject("signup", signup);
  inject("profile", profile);
  inject("profileRegist", profileRegist);
  inject("toContactForm", toContactForm);
  inject("toPrivacyPolicy", toPrivacyPolicy);
  inject("toHome", toHome);
  inject("toTerms", toTerms);
  inject("toGuide", toGuide);
  inject("toNewsPage", toNewsPage);
  inject("toTop", toTop);
  inject("toPayment", toPayment);
  inject("toSpecifiedNotation", toSpecifiedNotation);

  inject("toTeamList", toTeamList); //myteam
  inject("toTeamManage", toTeamManage); //team manage
  inject("toProjects", toProjects); //project
  inject("toCreateEnvironmentSteps", toCreateEnvironmentSteps); //environment
  inject("toTestSuiteManage", toTestSuiteManage); //testcase list(manage)
  inject("toTestSuiteRun", toTestSuiteRun); //testcase list(running)
};
