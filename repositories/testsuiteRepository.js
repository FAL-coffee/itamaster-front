import { afterSignin } from "./Repository";

const resource = "/testsuite";
export default {
  // テストスイートを作成
  create(data) {
    return afterSignin.post(`${resource}`, data);
  },
  // テストスイートを更新
  edit(data) {
    return afterSignin.put(
      `${resource}/${data.testsuite.id}?team_id=${data.team_id}&project_id=${data.project_id}`,
      data
    );
  },
  // テストスイートを削除
  delete(data) {
    return afterSignin.delete(
      `${resource}/${data.testsuite_id}?team_id=${data.team_id}&project_id=${data.project_id}`
    );
  },
};
