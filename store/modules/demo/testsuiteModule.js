const getDefaultState = () => ({
  testsuits: [],
  testsuiteCreateCount: 1000,
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    setTestsuits(state, payload) {
      state.testsuits = payload;
    },
    // testsuiteをstate内のtestsuitsに挿入する
    testsuiteInsert(state, payload) {
      state.testsuits.push(payload);
    },
    testsuiteCreateCountUp(state) {
      state.testsuiteCreateCount++;
    },
    // idを元に、state内のtestsuitsからtestsuiteを削除する
    testsuiteDelete(state, payload) {
      // payload = testsuits.id
      state.testsuits.some(function (v, i) {
        if (v.id == payload) state.testsuits.splice(i, 1);
      });
    },
  },
  getters: {
    getTestSuitsAllBelow: (state, getters, rootState) => (project_id) => {
      const testsuits = state.testsuits.filter(
        (element) => element.project_id === project_id
      );
      testsuits.map(function (element) {
        element.no = element.sequential_id;
        element.testcase = rootState.modules.demo.testcaseModule.testcases.filter(
          (e) => e.testsuite_id === element.id
        ).length;
        element.complete =
          element.testcase === 0
            ? 0
            : rootState.modules.demo.testcaseModule.testcases
                .filter((e) => e.testsuite_id === element.id)
                .filter((e) => e.status === "complete").length;
        element.retest =
          element.testcase === 0
            ? 0
            : rootState.modules.demo.testcaseModule.testcases
                .filter((e) => e.testsuite_id === element.id)
                .filter((e) => e.status === "retest").length;
        element.issue =
          element.testcase === 0
            ? 0
            : rootState.modules.demo.testcaseModule.testcases
                .filter((e) => e.testsuite_id === element.id)
                .filter((e) => e.status === "issue").length;
        return element;
      });
      return testsuits;
    },
  },
  actions: {
    // testsuiteの新規作成処理
    async testsuiteCreate({ commit }, data) {
      // data.id = 1+state.testsuiteCreateCount
      // commit('testsuiteInsert',data)
      // commit('testsuiteCreateCountUp')
    },

    // testsuiteの更新処理
    async testsuiteUpdate({ commit }, data) {
      // console.log(data)
      // commit('testsuiteDelete',data.testsuite.id)
      // commit('testsuiteInsert',data.testsuite)
    },

    // testsuiteの削除処理
    async testsuiteDelete({ commit }, data) {
      // commit('testsuiteDelete',data.testsuite_id)
    },
  },
};
