import { RepositoryFactory } from "/repositories/RepositoryFactory";
const testcaseRepository = RepositoryFactory.get("testcase");
const getDefaultState = () => ({
  testcases: [],
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    testcaseInsert(state, payload) {
      state.testcases.push(payload);
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
    async testcaseCreate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testcaseRepository
        .create(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("testcaseInsert", resolve);
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

    // testcaseの更新処理
    async testcaseUpdate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testcaseRepository
        .edit(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            // data.testsuite_idを元に、削除対象データが従属するtestsuiteに従属するtestcaseを全て削除する
            // testcasesにresolveデータを挿入する
            // commit('setTestcases',resolve)
            commit("updateFromTestsuite", {
              testsuite_id: data.testsuite_id,
              data: resolve,
            });
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

    // testcaseの削除処理
    async testcaseDelete({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testcaseRepository
        .delete(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("updateFromTestsuite", {
              testsuite_id: data.testsuite_id,
              data: resolve,
            });
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

    // testcaseのテスト結果送信処理
    async testcaseConfirm({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await testcaseRepository
        .confirm(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("updateFromTestsuite", {
              testsuite_id: data.testsuite_id,
              data: resolve,
            });
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
      await commit("modules/apiModule/end", null, { root: true });
      await this.$toHome();
    },
  },
};
