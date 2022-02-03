import { RepositoryFactory } from "/repositories/RepositoryFactory";
const contactRepository = RepositoryFactory.get("contact");
export default {
  namespaced: true,
  mutations: {},
  actions: {
    async create({ commit }, data) {
      commit("modules/apiModule/begin", null, { root: true });
      await contactRepository
        .create(data)
        .then((res) => {
          if (res.data.status === "success") {
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
  },
};
