import { RepositoryFactory } from "/repositories/RepositoryFactory";
const teamRepository = RepositoryFactory.get("team");
const getDefaultState = () => ({
  teamIdCheckData: {
    id: 0,
    status: "",
  },
  teams: [],
  members: [],
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
    // ログイン時のget処理。所属チーム以下全ての情報を取得
    async initialGetter({ commit }) {
      commit("modules/apiModule/begin", null, { root: true });
      // getInitialData
      await teamRepository
        .getInitialData()
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            // 取得したteam配列をteamModule内に格納する
            commit("setTeams", resolve.teams);
            // teamをセットした際、teamMemberのユーザー情報をstate内のmembers配列に重複無く格納する
            commit("setMembers", resolve.teams);

            // 取得したprojects配列をprojectModuleのstateに格納する
            commit("modules/projectModule/setProjects", resolve.projects, {
              root: true,
            });
            // 取得したtestsuits配列をtestsuiteModuleのstateに格納する
            commit("modules/testsuiteModule/setTestsuits", resolve.testsuits, {
              root: true,
            });
            // 取得したtestcases配列をtestcaseModuleのstateに格納する
            commit("modules/testcaseModule/setTestcases", resolve.testcases, {
              root: true,
            });

            // 取得したinvitations(招待)配列を、userModulesのuserオブジェクトStateに格納する
            commit(
              "modules/userModule/invitationsInsert",
              resolve.invitations,
              { root: true }
            );
            // invitation.readedを集計し、unreadCountをstateに挿入する
            commit("modules/userModule/unreadCountInsert", null, {
              root: true,
            });
            // ログインユーザーのsubscription_dataを挿入する
            commit(
              "modules/paymentModule/subscriptionDataInsert",
              resolve.subscription_data,
              { root: true }
            );
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else {
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      commit("modules/apiModule/end", null, { root: true });
      // 上書きに成功した場合、所属チーム一覧に遷移
      this.$toHome();
    },

    // teamIdが使用可能であるかどうか、サーバーにリクエストを行う
    async teamIdCheckRequest({ commit }, teamId) {
      commit("teamIdChecking");
      await teamRepository
        .check(teamId)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("teamIdChecked", resolve.prossible);
          } else if (res.data.status === "error") {
            commit("teamIdChecked", false);
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("teamIdChecked", false);
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          commit("teamIdChecked", false);
          commit("modules/errorModule/exception", null, { root: true });
        });
    },

    // teamの新規作成処理
    async teamCreate({ commit }, data) {
      const request = {
        teamId: data.teamId,
        name: data.teamId,
        memo: data.memo,
        private: data.private,
      };
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .create(request)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("teamInsert", resolve);
            // team取得に伴って、members配列への挿入を行う
            commit("setMembers", [resolve]);
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

    // teamの更新時処理
    async teamUpdate({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .edit(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            // teamModuleのstate内のteams配列内、同一のidを持つteamを削除する
            commit("teamDelete", resolve.team.id);
            // resolve内の、更新後のteam情報を挿入する
            commit("teamInsert", resolve.team);
            // team取得に伴って、members配列への挿入を行う
            commit("setMembers", [resolve.team]);

            // 更新ターゲットのteamに従属するprojectの情報を全て、projectModuleのstateから削除する
            // projectModuleのstateにresolved.projectsを統合する
            // => project配列をprojectModuleに渡す
            commit(
              "modules/projectModule/updateFromTeam",
              { team_id: resolve.team.id, data: resolve.projects },
              { root: true }
            );
            // 更新ターゲットのteamに従属するtestsuiteの情報を全て、testsuiteModuleのstateから削除する
            // testsuiteModuleのstateにresolved.testsuitsを統合する
            // => testsuite配列をtestsuiteModuleに渡す
            commit(
              "modules/testsuiteModule/updateFromTeam",
              { team_id: resolve.team.id, data: resolve.testsuits },
              { root: true }
            );
            // 更新ターゲットのteamに従属するtestcaseの情報を全て、testcaseModuleのstateから削除する
            // testcaseModuleのstateにresolved.testcasesを統合する
            // => testcase配列をtestcaseModuleに渡す
            commit(
              "modules/testcaseModule/updateFromTeam",
              { team_id: resolve.team.id, data: resolve.testcases },
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

    // teamの削除処理
    async teamDelete({ commit }, id) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .delete(id)
        .then((res) => {
          if (res.data.status === "success") {
            // teamのidを元に、teamをstateから削除する
            commit("teamDelete", id);
            // my team一覧画面に遷移
            this.$toHome();
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

    // teamに招待
    async invitation({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      const query = {
        team_id: data.team_id,
        email: data.email,
        keyword: data.seacretWords,
      };
      await teamRepository
        .invitation(query)
        .then((res) => {
          if (res.data.status === "success") {
            // 招待メンバー一覧にデータを挿入する
            commit("invitationInsert", query);
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

    // teamからメンバーをキック
    async kickout({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .kickout(data)
        .then((res) => {
          if (res.data.status === "success") {
            // teamのidを元に、memberをstateから削除する
            commit("memberDelete", data);
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

    // teamへの招待を取り消し
    async invitationCancel({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .invitationCancel(data)
        .then((res) => {
          if (res.data.status === "success") {
            // 招待メンバー一覧から招待を削除する
            commit("invitationCancel", data);
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

    // teamに参加
    async join({ commit }, id) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .join(id)
        .then((res) => {
          if (res.data.status === "success") {
            // userModuleのuser情報のうち、idが同一のinvitations要素を削除する
            commit("modules/userModule/invitationDelete", id, { root: true });

            const resolve = res.data.data;

            // 取得したteam情報をteamModule内に格納する
            commit("teamInsert", resolve.team);
            // teamをセットした際、teamMemberのユーザー情報をstate内のmembers配列に重複無く格納する
            commit("setMembers", [resolve.team]);

            // 取得したprojects配列をprojectModuleのstateに格納する
            commit("modules/projectModule/setProjects", resolve.projects, {
              root: true,
            });
            // 取得したtestsuits配列をtestsuiteModuleのstateに格納する
            commit("modules/testsuiteModule/setTestsuits", resolve.testsuits, {
              root: true,
            });
            // 取得したtestcases配列をtestcaseModuleのstateに格納する
            commit("modules/testcaseModule/setTestcases", resolve.testcases, {
              root: true,
            });
            // myhome に遷移してもいいかもしれない
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

    // teamからの招待を拒否
    async reject({ commit }, id) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .reject(id)
        .then((res) => {
          if (res.data.status === "success") {
            // userModuleのuser情報のうち、idが同一のinvitations要素を削除する
            commit("modules/userModule/invitationDelete", id, { root: true });
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

    // teamから脱ける
    async exit({ commit }, id) {
      commit("modules/apiModule/begin", null, { root: true });
      await teamRepository
        .exit(id)
        .then((res) => {
          if (res.data.status === "success") {
            // userModuleのuser情報のうち、idが同一のinvitations要素を削除する
            commit("teamDelete", id);
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
