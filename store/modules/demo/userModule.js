const getDefaultState = () => ({
  user: {
    id: 0,
  },
  selectableUsers: [
    {
      id: 9997,
      initials: "TE",
      name: "TESTUSER",
      email: "TEST",
      color: "red",
      simpleIcon: true,
      bgImg: "",
      iconImg: { url: "" },
      message: "THIS IS TEST USER.\nTHANK YOU FOR DEMO MODE TRIAL.",
      trialed: false,
    },
    {
      id: 9998,
      initials: "パ",
      name: "Mr.パンダ",
      email: "パンダの国五丁目四番",
      color: "red",
      simpleIcon: false,
      bgImg: "",
      iconImg: { url: "" },
      message:
        "パンダを選んでくれてありがとう！\n製品版でも、アイコン画像を一度もアップロードしていない時だけは僕に会えるよ！\n",
      trialed: false,
    },
    {
      id: 9999,
      initials: "MO",
      name: "Monster",
      email: "monster",
      color: "red",
      simpleIcon: false,
      bgImg: "",
      iconImg: {
        url:
          "https://itamaster.s3.amazonaws.com/uploads/user/iconImg/4/chmigndystxrbljpv.png",
      },
      message: "GYAAAAAAAAAAAAA!!!!",
      trialed: false,
    },
  ],
});

export default {
  name: "userModule",
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    userInsert(state, id) {
      state.user = state.selectableUsers.find((u) => u.id === id);
    },
    dataDelete(state) {
      state = getDefaultState();
    },
  },
  getters: {
    // userの取得
    getUser: function (state) {
      return state.user;
    },
    // selectableUsersの取得
    getSelectableUser: function (state) {
      return state.selectableUsers;
    },
  },
  actions: {
    userSelect({ commit }, id) {
      commit("userInsert", id);
    },
  },
};
