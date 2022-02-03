import { RepositoryFactory } from "/repositories/RepositoryFactory";
const paymentRepository = RepositoryFactory.get("payment");
const getDefaultState = () => ({
  subscriptionData: null,
});

export default {
  name: "paymentModule",
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    // ユーザーが課金中であるかどうか
    subscriptionDataInsert(state, payload) {
      state.subscriptionData = payload;
    },
    subscriptionDataDelete(state) {
      state.subscriptionData = null;
    },
  },
  getters: {
    // statusを参照し、active,trialingのいずれかであればtrueを返す。
    // => subscriptionDataがnullの場合、active,trialingでなければfalse
    userIsPaid: function (state) {
      if (state.subscriptionData === null) return false;
      if (
        state.subscriptionData.status === "active" ||
        state.subscriptionData.status === "trialing"
      ) {
        return true;
      } else {
        return false;
      }
    },

    // subscriptionDataが空の場合は、intactive(非活性)を返す
    // subscriptionData.statusがactiveでも、trialingでも無い場合、intactive(非活性)を返す
    // subscriptionData.statusがtrialingで、なおかつstate.subscriptionData.cancel_at_period_endがfalse(解約手続きが行われていない = 次月以降の更新がある)場合、trialing(トライアル期間中)を返す
    // subscriptionData.statusがactiveで、なおかつstate.subscriptionData.cancel_at_period_endがfalse(解約手続きが行われていない = 次月以降の更新がある)場合、active(有料会員期間中)を返す
    // subscriptionData.statusがactiveか、trialingで、state.subscriptionData.cancel_at_period_endがtrue(解約手続きが行われている = 次月以降の更新がない)場合、canceled(解約手続き実行済)を返す
    getPaidStatus: function (state) {
      if (state.subscriptionData === null) return "intactive";
      switch (state.subscriptionData.status) {
        case "active":
          if (state.subscriptionData.cancel_at_period_end) return "canceled";
          else return "active";
        case "trialing":
          if (state.subscriptionData.cancel_at_period_end) return "canceled";
          else return "trialing";
        default:
          return "intactive";
      }
    },

    // trial中であるかを取得する(return : bool)
    userIsTrialing: function (state) {
      if (state.subscriptionData === null) return false;
      if (state.subscriptionData.status == "trialing") {
        return true;
      } else {
        return false;
      }
    },

    // activeか、trial、intactiveを返す
    getAboutStatus: function (state) {
      if (state.subscriptionData === null) return "intactive";
      if (state.subscriptionData.status == "active") {
        return "active";
      } else if (state.subscriptionData.status == "trialing") {
        return "trialing";
      }
    },

    // trial期間を取得する
    getTrialPeriod: function (state) {
      if (state.subscriptionData === null)
        return { trialStart: "", trialEnd: "" };
      const trial_start = new Date(state.subscriptionData.trial_start * 1000);
      const trial_end = new Date(state.subscriptionData.trial_end * 1000);
      if (state.subscriptionData.status === "trialing") {
        return {
          trialStart: trial_start.toLocaleDateString("ja-JP"),
          trialEnd: trial_end.toLocaleDateString("ja-JP"),
        };
      } else {
        return { trialStart: "", trialEnd: "" };
      }
    },

    // 課金期間を取得する
    getSubscriptionPeriod: function (state) {
      if (state.subscriptionData === null)
        return { subscriptionStart: "", subscriptionEnd: "" };
      const current_period_start = new Date(
        state.subscriptionData.current_period_start * 1000
      );
      const current_period_end = new Date(
        state.subscriptionData.current_period_end * 1000
      );
      if (state.subscriptionData.status === "active") {
        return {
          subscriptionStart: current_period_start.toLocaleDateString("ja-JP"),
          subscriptionEnd: current_period_end.toLocaleDateString("ja-JP"),
        };
      } else {
        return { subscriptionStart: "", subscriptionEnd: "" };
      }
    },
  },
  actions: {
    // 1,280円のサブスクリプションプランに加入
    async subscribe({ commit, dispatch }, data) {
      await commit("modules/apiModule/begin", null, { root: true });
      await paymentRepository
        .subscribe(data)
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("subscriptionDataInsert", resolve.subscription_data);
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
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
      await commit("modules/apiModule/end", null, { root: true });
      await dispatch("modules/teamModule/initialGetter", null, { root: true });
    },

    // 解約処理
    async unsubscribe({ commit, dispatch }) {
      await commit("modules/apiModule/begin", null, { root: true });
      await paymentRepository
        .unsubscribe()
        .then((res) => {
          if (res.data.status === "success") {
            const resolve = res.data.data;
            commit("subscriptionDataInsert", resolve.subscription_data);
          } else if (res.data.status === "error") {
            commit("modules/errorModule/error", res.data.errors.full_messages, {
              root: true,
            });
          } else if (res.data.status === "exception") {
            commit("modules/errorModule/exception", null, { root: true });
          }
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
      await commit("modules/apiModule/end", null, { root: true });
      await dispatch("modules/teamModule/initialGetter", null, { root: true });
    },
  },
};
