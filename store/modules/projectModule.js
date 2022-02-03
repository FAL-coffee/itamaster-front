import { RepositoryFactory } from "/repositories/RepositoryFactory";
const projectRepository = RepositoryFactory.get("project");
const getDefaultState = () => ({
  projects: [],
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    // 全取得時の全格納
    setProjects(state, payload) {
      state.projects = payload;
    },
    // team削除時の配列上書き
    updateFromTeam(state, payload) {
      // payload.team_id = team.id, payload.data = projects(arr)
      // team_idが削除されたteamのidではないもののみをprojectsに格納する
      state.projects = state.projects.filter(
        (element) => element.team_id != payload.team_id
      );
      // 受け渡されたproject配列を結合
      state.projects.push(payload.data);
      state.projects = state.projects.flat();
    },
    // プロジェクトをstate内のprojectsに挿入する
    projectInsert(state, payload) {
      state.projects.push(payload);
    },
    // idを元に、state内のprojectsからprojectを削除する
    projectDelete(state, payload) {
      // payload = projects.id
      state.projects.some(function (v, i) {
        if (v.id == payload) state.projects.splice(i, 1);
      });
    },
  },
  getters: {},
  actions: {
    // projectの新規作成処理
    async projectCreate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await projectRepository
        .create(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("projectInsert", resolve);
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

    // projectの更新処理
    async projectUpdate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await projectRepository
        .edit(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("projectDelete", resolve.project.id);
            commit("projectInsert", resolve.project);
            // 更新ターゲットのprojectに従属するtestsuiteの情報を全て、testsuiteModuleのstateから削除する
            // testsuiteModuleのstateにresolved.testsuitsを統合する
            // => testsuite配列をtestsuiteModuleに渡す
            commit(
              "modules/testsuiteModule/updateFromProject",
              { project_id: resolve.project.id, data: resolve.testsuits },
              { root: true }
            );
            // 更新ターゲットのprojectに従属するtestcaseの情報を全て、testcaseModuleのstateから削除する
            // testcaseModuleのstateにresolved.testcasesを統合する
            // => testcase配列をtestcaseModuleに渡す
            commit(
              "modules/testcaseModule/updateFromProject",
              { project_id: resolve.project.id, data: resolve.testcases },
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

    // projectの削除処理
    async projectDelete({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await projectRepository
        .delete(data)
        .then((res) => {
          if (res.data.status === "success") {
            // projectのidを元に、projectをstateから削除する
            commit("projectDelete", data.project_id);
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

    // テスト結果のエクスポート
    async fileExport({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await projectRepository
        .export(data)
        .then((res) => {
          const resolved = res.data;
          const fileURL = window.URL.createObjectURL(new Blob([resolved]));
          let fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", data.fileName + ".xlsx");
          document.body.appendChild(fileLink);
          return fileLink.click();
        })
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
    },
  },
};
