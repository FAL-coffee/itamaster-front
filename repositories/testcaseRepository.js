import { afterSignin } from "./Repository";

const resource = "/testcase";
export default {
  // テストケースを作成
  create(data) {
    return afterSignin.post(`${resource}`, data);
  },

  // テストケースを更新
  edit(data) {
    return afterSignin.put(
      `${resource}/${data.testcase.id}?team_id=${data.team_id}&project_id=${data.project_id}&testsuite_id=${data.testsuite_id}`,
      data
    );
  },

  // テストケースを削除
  delete(data) {
    return afterSignin.delete(
      `${resource}/${data.testcase_id}?team_id=${data.team_id}&project_id=${data.project_id}&testsuite_id=${data.testsuite_id}`
    );
  },

  // テストを完了
  confirm(data) {
    return afterSignin.post(`${resource}/confirm`, data);
  },

  // テストをロック
  lock(data) {
    return afterSignin.post(`${resource}/lock`, data);
  },

  // テストをアンロック
  unlock(data) {
    return afterSignin.post(`${resource}/unlock`, data);
  },
};
