import { RepositoryFactory } from "/repositories/RepositoryFactory";
const authRepository = RepositoryFactory.get("auth");
const userRepository = RepositoryFactory.get("user");
const getDefaultState = () => ({
  user: {
    id: 0,
    initials: "",
    name: "",
    email: "",
    color: "",
    simpleIcon: true,
    bgImg: "",
    iconImg: "",
    message: "",
    trialed: false,
  },
  unreadCount: 0,
  invitations: [],
});

export default {
  name: "userModule",
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    dataInsert(state, payload) {
      state.user = payload;
    },
    dataDelete(state) {
      state = getDefaultState();
    },
    // unreadCountを0に
    newsRead(state) {
      state.unreadCount = 0;
    },
    // unreadCountを集計して値を挿入
    unreadCountInsert(state) {
      // console.log(state.user.invitations)
      // console.log(state.user.invitations.reduce((prev, item) => {return prev + (item.readed === false ? 1 : 0) }, 0))
      state.unreadCount = state.invitations.reduce((prev, item) => {
        return prev + (item.readed === false ? 1 : 0);
      }, 0);
      // state.unreadCount = 5
    },
    // invitationsを格納(from. information)
    invitationsInsert(state, payload) {
      state.invitations = payload;
    },
    // idを元に招待を削除する
    invitationDelete(state, payload) {
      // payload = invitation.id
      // state.invitations.some(function(v, i){
      //     if (v.id==payload) state.invitations.splice(i,1);
      // });
      state.invitations = state.invitations.filter((e) => e.id != payload);
    },
  },
  getters: {
    // userの取得時、invitationsをuserのプロパティにして渡す
    getUser: function (state) {
      return state.user;
    },
  },
  actions: {
    // sign in
    async signin({ dispatch, commit, state }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await authRepository
        .signin(data)
        .then((res) => {
          const resolved = res.data.data;
          // 正常終了時、dataInsert mutationを呼び出しローカルのuser stateを上書きする
          commit("dataInsert", resolved);
          // localStrageにaccess-token,client,uidを格納する
          window.sessionStorage.setItem(
            "access-token",
            res.headers["access-token"]
          );
          window.sessionStorage.setItem("client", res.headers.client);
          window.sessionStorage.setItem("uid", res.headers.uid);
          window.sessionStorage.setItem(
            "token-type",
            res.headers["token-type"]
          );
          // ユーザー情報をteam/members（プロフィール閲覧の際に利用する）に格納
          commit("modules/teamModule/setLoginUser", resolved, { root: true });
        })
        // .then(function(){
        //     // 所属チーム以下全情報を取得
        //     dispatch('modules/teamModule/initialGetter', null, {root: true} )
        // })
        .catch((error) => {
          // console.log(error.response)
          // if(!error.response.data.success) commit('modules/errorModule/error',error.response.data.errors,{root:true})
          // else commit('modules/errorModule/exception',null,{root:true})
          if (error.response) {
            if (error.response.data.success)
              commit(
                "modules/errorModule/error",
                error.response.data.errors.full_messages,
                { root: true }
              );
            else commit("modules/errorModule/exception", null, { root: true });
          } else {
            commit("modules/errorModule/exception", null, { root: true });
          }
        });
      // apiModuleのapiをfalseにするmutationを呼び出す
      await commit("modules/apiModule/end", null, { root: true });
      if (state.user.id != 0) {
        await dispatch("modules/teamModule/initialGetter", null, {
          root: true,
        });
      }
    },

    // signup
    async signup({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await authRepository
        .signup(data)
        .then((res) => {
          const resolve = res.data.data;
          commit("dataInsert", resolve);
          // localStrageにaccess-token,client,uidを格納する
          window.sessionStorage.setItem(
            "access-token",
            res.headers["access-token"]
          );
          window.sessionStorage.setItem("client", res.headers.client);
          window.sessionStorage.setItem("uid", res.headers.uid);
          window.sessionStorage.setItem(
            "token-type",
            res.headers["token-type"]
          );
          commit("modules/teamModule/setLoginUser", resolve, { root: true });
          // 上書きに成功した場合、所属チーム一覧に遷移
          this.$toHome();
        })
        .catch((error) => {
          if (error.response.data.status === "error")
            commit(
              "modules/errorModule/error",
              error.response.data.errors.full_messages,
              { root: true }
            );
          else commit("modules/errorModule/exception", null, { root: true });
        });
      // apiModuleのapiをfalseにするmutationを呼び出す
      await commit("modules/apiModule/end", null, { root: true });
    },

    // sign out
    async signout({ commit }) {
      commit("modules/apiModule/begin", null, { root: true });
      await authRepository
        .signout()
        .then(() => {
          commit("dataDelete");
        })
        .catch((error) => {
          commit("dataDelete");
        });
      // localstorage内のaccess-token,client,uidを削除する
      await window.sessionStorage.removeItem("access-token");
      await window.sessionStorage.removeItem("client");
      await window.sessionStorage.removeItem("uid");
      await window.sessionStorage.removeItem("token-type");
      await commit("modules/apiModule/end", null, { root: true });
      // topページのurlを現在のwindowに置換する(repositoryが初期化されるため、二度目以降も正常なサインアウトが可能になる) <= 何故かエラーに。
      // await location.replace('/')
      window.location.href = process.env.VUE_APP_URL;
    },

    // unreadCountを0にする
    async newsRead({ commit, state }) {
      await commit("modules/apiModule/begin", null, { root: true });
      commit("newsRead");
      const ids = state.invitations.map((element) => element.id);
      await userRepository
        .newsRead(ids)
        .then(() => {})
        .catch((error) => {
          commit("modules/errorModule/exception", null, { root: true });
        });
      await commit("modules/apiModule/end", null, { root: true });
    },

    // userの編集登録時処理
    async edit({ commit, dispatch }, data) {
      await commit("modules/apiModule/begin", null, { root: true });
      await userRepository
        .edit(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolved = res.data.data;
            // 正常終了時、dataInsert mutationを呼び出しローカルのuser stateを上書きする
            commit("dataInsert", resolved);
            commit("modules/teamModule/deleteMember", resolved.id, {
              root: true,
            });
            // ユーザー情報をteam/members（プロフィール閲覧の際に利用する）に格納
            commit("modules/teamModule/setLoginUser", resolved, { root: true });
            // チーム以下の情報を全取得
            dispatch("modules/teamModule/initialGetter", null, { root: true });
          } else if (res.data.data === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
        })
        .catch((error) => {
          console.log(error);
          commit("modules/errorModule/exception", null, { root: true });
        });
      await commit("modules/apiModule/end", null, { root: true });
    },
  },
};
