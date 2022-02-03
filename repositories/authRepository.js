import { beforeSignin } from "./Repository";
import { afterSignin } from "./Repository";
const resource = "/auth";
export default {
  // サインアップ
  signup(data) {
    return beforeSignin.post(`${resource}`, data);
  },
  // ログイン
  signin(data) {
    return beforeSignin.post(`${resource}/sign_in`, data);
  },
  // ログアウト
  signout() {
    return afterSignin.delete(`${resource}/sign_out`);
  },
};
