const getDefaultState = () => ({
  error: {
    displayFlag: false,
    status: "success",
    messages: [],
  },
});
export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    error(state, payload) {
      state.error.displayFlag = true;
      state.error.status = "error";
      state.error.messages = payload;
    },
    exception(state) {
      state.error.displayFlag = true;
      state.error.status = "exception";
    },
    read(state) {
      state.error.displayFlag = false;
    },
  },
  getters: {
    // stateからデータを取り出す際はgetterを経由する
    // isEven: (state) => state.count % 2 === 0,
  },
  actions: {
    readed({ commit }) {
      commit("read");
    },
  },
};
