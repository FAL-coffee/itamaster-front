import { RepositoryFactory } from "/repositories/RepositoryFactory";
const testsuiteRepository = RepositoryFactory.get("testsuite");
const getDefaultState = () => ({
  testsuits: [],
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    setTestsuits(state, payload) {
      state.testsuits = payload;
    },
    // team更新時の配列上書き
    updateFromTeam(state, payload) {
      // payload.team_id = team.id, payload.data = testsuits(arr)
      // team_idが削除されたteamのidではないもののみをtestsuitsに格納する
      state.testsuits = state.testsuits.filter(
        (element) => element.team_id != payload.team_id
      );
      // 受け渡されたtestsuits配列を結合
      state.testsuits.push(payload.data);
      state.testsuits = state.testsuits.flat();
    },
    // project更新時の配列上書き
    updateFromProject(state, payload) {
      // payload.project_id = project.id, payload.data = testsuits(arr)
      // project_idが削除されたprojectのidではないもののみをtestsuitsに格納する
      state.testsuits = state.testsuits.filter(
        (element) => element.project_id != payload.project_id
      );
      // 受け渡されたtestsuits配列を結合
      state.testsuits.push(payload.data);
      state.testsuits = state.testsuits.flat();
    },

    // testsuiteをstate内のtestsuitsに挿入する
    testsuiteInsert(state, payload) {
      state.testsuits.push(payload);
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
        element.testcase = rootState.modules.testcaseModule.testcases.filter(
          (e) => e.testsuite_id === element.id
        ).length;
        element.complete =
          element.testcase === 0
            ? 0
            : rootState.modules.testcaseModule.testcases
                .filter((e) => e.testsuite_id === element.id)
                .filter((e) => e.status === "complete").length;
        element.retest =
          element.testcase === 0
            ? 0
            : rootState.modules.testcaseModule.testcases
                .filter((e) => e.testsuite_id === element.id)
                .filter((e) => e.status === "retest").length;
        element.issue =
          element.testcase === 0
            ? 0
            : rootState.modules.testcaseModule.testcases
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
      commit("modules/apiModule/begin", null, { root: true });
      await testsuiteRepository
        .create(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("testsuiteInsert", resolve);
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
    },

    // testsuiteの更新処理
    async testsuiteUpdate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testsuiteRepository
        .edit(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("testsuiteDelete", resolve.testsuite.id);
            commit("testsuiteInsert", resolve.testsuite);
            // 更新ターゲットのtestsuiteに従属するtestcaseの情報を全て、testcaseModuleのstateから削除する
            // testcaseModuleのstateにresolved.testcasesを統合する
            // => testcase配列をtestcaseModuleに渡す
            commit(
              "modules/testcaseModule/updateFromTestsuite",
              { testsuite_id: resolve.testsuite.id, data: resolve.testcases },
              { root: true }
            );
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
    },

    // testsuiteの削除処理
    async testsuiteDelete({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testsuiteRepository
        .delete(data)
        .then((res) => {
          if (res.data.status === "success") {
            // testsuiteのidを元に、testsuiteをstateから削除する
            commit("testsuiteDelete", data.testsuite_id);
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
    },
  },
};
