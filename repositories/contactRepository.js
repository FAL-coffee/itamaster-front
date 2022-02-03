import { afterSignin } from "./Repository";

const resource = "/contact";
export default {
  // お問い合わせの作成
  create(data) {
    return afterSignin.post(`${resource}`, data);
  },
};
