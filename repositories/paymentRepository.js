import { afterSignin } from "./Repository";

const resource = "/payment";
export default {
  // 1,280円のサブスクリプションプランを開始
  subscribe(data) {
    return afterSignin.post(`${resource}/subscribe_1280_create`, data);
  },
  unsubscribe() {
    return afterSignin.delete(`${resource}/unsubscribe_1280_create`);
  },
};
