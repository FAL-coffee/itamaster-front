import { afterSignin } from "./Repository";
import { afterSigninDownloadFile } from "./Repository";
import { beforeSigninDownloadFile } from "./Repository";

const resource = "/project";
export default {
  // プロジェクトの作成
  create(data) {
    return afterSignin.post(`${resource}`, data);
  },
  // プロジェクトの更新
  edit(data) {
    return afterSignin.put(`${resource}/${data.id}`, data);
  },
  // プロジェクトを削除
  delete(data) {
    return afterSignin.delete(
      `${resource}/${data.project_id}?team_id=${data.team_id}`
    );
  },
  // テスト結果のダウンロード
  export(data) {
    return afterSigninDownloadFile.get(
      `${resource}/export/${data.project_id}?team_id=${data.team_id}&type=${data.type}&system_name=${data.system_name}&sub_system_name=${data.sub_system_name}&leader=${data.leader}&team_name=${data.team_name}&begin_date=${data.begin_date}&end_date=${data.end_date}`
    );
  },
  demoExport(data) {
    return beforeSigninDownloadFile.get(
      `${resource}/demoExport/${data.project_id}?team_id=${data.team_id}&type=${data.type}&system_name=${data.system_name}&sub_system_name=${data.sub_system_name}&leader=${data.leader}&team_name=${data.team_name}&begin_date=${data.begin_date}&end_date=${data.end_date}`
    );
  },
};
