import { RepositoryFactory } from "/repositories/RepositoryFactory";
const projectRepository = RepositoryFactory.get("project");
const getDefaultState = () => ({
  projects: [],
  projectCreateCount: 0,
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
    projectCreateCountUp(state) {
      state.projectCreateCount++;
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
      // data.id = 1+state.projectCreateCount
      // commit('projectInsert',data)
      // commit('projectCreateCountUp')
    },

    // projectの更新処理
    async projectUpdate({ commit }, data) {
      // commit('projectDelete',data.id)
      // commit('projectInsert',data)
    },

    // projectの削除処理
    async projectDelete({ commit }, data) {
      // commit('projectDelete',data.project_id)
    },

    // テスト結果のエクスポート
    async fileExport({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await projectRepository
        .demoExport(data)
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
          commit("modules/demo/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
    },
  },
};
