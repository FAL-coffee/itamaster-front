import { RepositoryFactory } from "/repositories/RepositoryFactory";
import demoData from "./demo.json";
const getDefaultState = () => ({
  teamIdCheckData: {
    id: 0,
    status: "",
  },
  teams: [],
  members: [],
  teamCreateCount: 0,
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    // team配列をteamsに格納する
    setTeams(state, payload) {
      state.teams = payload;
    },
    // loginUserを先んじてmembers配列に格納する
    setLoginUser(state, payload) {
      state.members.push(payload);
    },

    deleteMember(state, payload) {
      state.members = state.members.filter((member) => member.id != payload);
    },
    // チーム取得時、teamのmembers配列をstate内のmembers配列に結合する
    setMembers(state, payload) {
      payload.forEach((element) => state.members.push(element.teamMember));
      state.members = state.members.flat();
    },

    // teamId変更時、teamのidを受け取って、state内のteamIdCheckDataを変更する（[NotChecked,Checking,Okay,PleaseChange]）
    teamIdChanged(state, payload) {
      state.teamIdCheckData.id = payload;
      state.teamIdCheckData.status = "NotChecked";
    },
    // teamEditDialogのclose時、state内のteamIdCheckDataを初期化する
    teamIdInitialize(state) {
      state.teamIdCheckData = { id: 0, status: "" };
    },
    // teamId使用可否チェック中は、statusをCheckingに変更する
    teamIdChecking(state) {
      state.teamIdCheckData.status = "Checking";
    },
    // teamId使用可否チェック後、state内のteamIdCheckDataを変更する
    teamIdChecked(state, payload) {
      const newStatus = payload ? "Okay" : "PleaseChange";
      state.teamIdCheckData.status = newStatus;
    },

    // team作成成功時、teams配列にteamの情報を格納する
    teamInsert(state, payload) {
      state.teams.push(payload);
    },
    teamCreateCountUp(state) {
      state.teamCreateCount++;
    },
    // team削除成功時、teamsからteamの情報を削除する
    teamDelete(state, payload) {
      // payload = team.id
      state.teams.some(function (v, i) {
        if (v.id == payload) state.teams.splice(i, 1);
      });
    },

    // チームにユーザーを招待
    invitationInsert(state, payload) {
      // data = {team_id, email, seacretword}
      state.teams.some(function (v, i) {
        if (v.id == payload.team_id)
          state.teams[i].invitations.push({
            email: payload.email,
            invitation: true,
          });
      });
    },
    // メンバーを削除
    memberDelete(state, payload) {
      let teamIndex;
      // teamMemberからユーザーを削除
      state.teams.some(function (v, i) {
        if (v.id == payload.team_id) teamIndex = i;
      });
      state.teams[teamIndex].teamMember.some(function (v, i) {
        if (v.id == payload.user_id)
          state.teams[teamIndex].teamMember.splice(i, 1);
      });
    },
    // チームへの招待を取り消し
    invitationCancel(state, payload) {
      let teamIndex;
      // teamMemberからユーザーを削除
      state.teams.some(function (v, i) {
        if (v.id == payload.team_id) teamIndex = i;
      });
      state.teams[teamIndex].invitations.some(function (v, i) {
        if (v.email == payload.email)
          state.teams[teamIndex].invitations.splice(i, 1);
      });
    },
  },
  getters: {
    // stateからデータを取り出す際はgetterを経由する
    // isEven: (state) => state.count % 2 === 0,
  },
  actions: {
    async initialGetter({ commit }) {
      const resolve = demoData;
      // 取得したteam配列をteamModule内に格納する
      commit("setTeams", resolve.teams);
      // teamをセットした際、teamMemberのユーザー情報をstate内のmembers配列に重複無く格納する
      commit("setMembers", resolve.teams);

      // 取得したprojects配列をprojectModuleのstateに格納する
      commit("modules/demo/projectModule/setProjects", resolve.projects, {
        root: true,
      });
      // 取得したtestsuits配列をtestsuiteModuleのstateに格納する
      commit("modules/demo/testsuiteModule/setTestsuits", resolve.testsuits, {
        root: true,
      });
      // 取得したtestcases配列をtestcaseModuleのstateに格納する
      commit("modules/demo/testcaseModule/setTestcases", resolve.testcases, {
        root: true,
      });

      // demo/myteamに画面遷移
      this.$toDemoTeamList();
    },

    async teamIdCheckRequest({ commit }) {
      commit("teamIdChecked", true);
    },

    // teamの新規作成処理
    async teamCreate({ commit, state, rootState }, data) {
      // data.id = 1+state.teamCreateCount
      // data.isPaidTeam = true
      // // selected user
      // data.teamMember = [rootState.modules.demo.userModule.user]
      // commit('teamInsert',data)
      // commit('teamCreateCountUp')
    },

    // teamの更新時処理
    async teamUpdate({ commit, state }, data) {
      // data.isPaidTeam = true
      // const targetTeam = state.teams.find(team => team.id === data.id)
      // data.teamMember = targetTeam.teamMember
      // // teamModuleのstate内のteams配列内、同一のidを持つteamを削除する
      // commit('teamDelete',data.id)
      // // resolve内の、更新後のteam情報を挿入する
      // commit('teamInsert',data)
    },

    // teamの削除処理
    async teamDelete({ commit }, id) {
      // commit('teamDelete',id)
      // // my team一覧画面に遷移demo
      this.$toDemoTeamList();
    },

    // teamに招待
    async invitation({ commit }, data) {
      const query = {
        team_id: data.team_id,
        email: data.email,
        keyword: data.seacretWords,
      };
      // 招待メンバー一覧にデータを挿入する
      commit("invitationInsert", query);
    },

    // teamからメンバーをキック
    async kickout({ commit }, data) {
      // commit('memberDelete',data)
    },

    // teamへの招待を取り消し
    async invitationCancel({ commit }, data) {
      commit("invitationCancel", data);
    },

    // teamから脱ける
    async exit({ commit }, id) {
      // userModuleのuser情報のうち、idが同一のinvitations要素を削除する
      // commit('teamDelete',id)
    },
  },
};
