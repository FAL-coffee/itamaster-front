import { afterSignin } from "./Repository";

const resource = "/team";
export default {
  // 所属以下全チーム下情報取得
  getInitialData() {
    return afterSignin.get(`${resource}/information`);
  },

  // チームを作成
  create(data) {
    return afterSignin.post(`${resource}`, data);
  },

  // チームを更新
  edit(data) {
    return afterSignin.put(`${resource}/${data.id}`, data);
  },

  // チームを削除
  delete(id) {
    return afterSignin.delete(`${resource}/${id}`);
  },

  // チームIDの使用可否チェック
  check(data) {
    return afterSignin.get(`${resource}/check/${data.teamId}`);
  },

  // ユーザーをチームに招待
  invitation(data) {
    return afterSignin.post(`${resource}/invitation/${data.team_id}`, data);
  },

  // 招待を取り消し
  invitationCancel(data) {
    // data => email
    return afterSignin.post(
      `${resource}/invitationcancel/${data.team_id}`,
      data
    );
  },

  // チームからキック
  kickout(data) {
    // data => user_id
    return afterSignin.post(
      `${resource}/kickout/${data.team_id}`,
      data.user_id
    );
  },

  // チームに参加
  join(data) {
    return afterSignin.post(`${resource}/join`, data);
  },

  // チーム不参加
  reject(id) {
    return afterSignin.delete(`${resource}/reject/${id}`);
  },

  // チームから抜ける
  exit(id) {
    return afterSignin.delete(`${resource}/exit/${id}`);
  },
};
