const getDefaultState = () => ({
  testcases: [],
  testcaseCreateCount: 1000,
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    testcaseInsert(state, payload) {
      state.testcases.push(payload);
    },
    testcaseCreateCountUp(state) {
      state.testcaseCreateCount++;
    },

    setTestcases(state, payload) {
      state.testcases = payload;
    },

    // testcaseを削除/更新した時、対象データの従属するtestsuiteに従属するtestcaseの配列が返される
    // updateFromTestsuite が使える。(payload = { testsuite_id, data(testcases) })

    // team更新時の配列上書き
    updateFromTeam(state, payload) {
      // payload.team_id = team.id, payload.data = testcases(arr)
      // team_idが削除されたteamのidではないもののみをtestcasesに格納する
      state.testcases = state.testcases.filter(
        (element) => element.team_id != payload.team_id
      );
      // 受け渡されたtestcases配列を結合
      state.testcases.push(payload.data);
      state.testcases = state.testcases.flat();
    },
    // project更新時の配列上書き
    updateFromProject(state, payload) {
      // payload.project_id = testcases.id, payload.data = testcases(arr)
      // project_idが削除されたprojectのidではないもののみをtestcasesに格納する
      state.testcases = state.testcases.filter(
        (element) => element.project_id != payload.project_id
      );
      // 受け渡されたtestcases配列を結合
      state.testcases.push(payload.data);
      state.testcases = state.testcases.flat();
    },

    // testsuite更新時の配列上書き
    updateFromTestsuite(state, payload) {
      // payload.testsuite_id = testcases.id, payload.data = testcases(arr)
      // testsuite_idが削除されたtestsuiteのidではないもののみをtestcasesに格納する
      state.testcases = state.testcases.filter(
        (element) => element.testsuite_id != payload.testsuite_id
      );
      // 受け渡されたtestcases配列を結合
      state.testcases.push(payload.data);
      state.testcases = state.testcases.flat();
    },
  },
  getters: {
    // stateからデータを取り出す際はgetterを経由する
    // isEven: (state) => state.count % 2 === 0,
  },
  actions: {
    // testcaseの新規作成処理
    async testcaseCreate({ commit, state }, data) {
      // data.id = 1+state.testcaseCreateCount
      // commit('testcaseInsert',data)
      // commit('testcaseCreateCountUp')
    },

    // testcaseの更新処理
    async testcaseUpdate({ commit }, data) {},

    // testcaseの削除処理
    async testcaseDelete({ commit }, data) {},

    // testcaseのテスト結果送信処理
    async testcaseConfirm({ commit }, data) {
      this.$toDemoTeamList();
    },
  },
};
