import { afterSignin } from "./Repository";

const resource = "/user";
export default {
  // ユーザーデータを更新
  edit(data) {
    return afterSignin.put(`${resource}`, data);
  },
  // ユーザーを削除
  delete(id) {
    return afterSignin.delete(`${resource}/${id}`);
  },
  // 未読の通知を表示
  newsRead(ids) {
    return afterSignin.put(`${resource}/newsread`, ids);
  },
};
