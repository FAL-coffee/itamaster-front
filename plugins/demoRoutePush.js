export default ({ app }, inject) => {
  // util
  const demo = () => {
    return app.router.push(app.localePath({ path: "/demo" }));
  };
  const profile = (id) => {
    return app.router.push(app.localePath({ path: "/demo/profile/" + id }));
  };

  // 自分が所属しているチームの一覧画面を表示する
  const toTeamList = () => {
    return app.router.push(app.localePath({ path: "/demo/myteam" }));
  };

  // チーム管理画面を表示する
  const toTeamManage = (data) => {
    // data{teamId} ...teamId
    return app.router.push(
      app.localePath({ path: "/demo/team/" + data + "/manage" })
    );
  };

  // プロジェクト選択兼テストスイート管理画面を表示する
  const toProjects = (teamId) => {
    return app.router.push(app.localePath({ path: "/demo/team/" + teamId }));
  };

  // テスト環境構築手順ページを表示する
  const toCreateEnvironmentSteps = (data) => {
    // data{teamId,project_id}
    return app.router.push(
      app.localePath({
        path: "/demo/team/" + data.teamId + "/project/" + data.project_id,
      })
    );
  };

  // テストスイートの管理画面を表示する
  const toTestSuiteManage = (data) => {
    // data{teamId,project_id,testsuite_id}
    return app.router.push(
      app.localePath({
        path:
          "/demo/team/" +
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
          "/demo/team/" +
          data.teamId +
          "/project/" +
          data.project_id +
          "/testsuite/" +
          data.testsuite_id +
          "/run",
      })
    );
  };

  inject("demo", demo);

  inject("demoProfile", profile);
  inject("toDemoTeamList", toTeamList); //myteam
  inject("toDemoTeamManage", toTeamManage); //team manage
  inject("toDemoProjects", toProjects); //project
  inject("toDemoCreateEnvironmentSteps", toCreateEnvironmentSteps); //environment
  inject("toDemoTestSuiteManage", toTestSuiteManage); //testcase list(manage)
  inject("toDemoTestSuiteRun", toTestSuiteRun); //testcase list(running)
};
