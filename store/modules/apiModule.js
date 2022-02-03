export default {
  namespaced: true,
  state: { api: false },
  mutations: {
    begin(state) {
      state.api = true;
    },
    end(state) {
      state.api = false;
    },
  },
};
