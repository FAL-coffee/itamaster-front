import axios from "axios";

// const baseDomain = '127.0.0.1:3000' // 3.113.50.11:3000
// const baseDomain = 'localhost:3000/'
// const baseDomain = 'itamasterapi.work/'
const baseDomain = "itamasterapi.herokuapp.com/";
// https通信の場合、ipに対する接続は不可能。エンドポイントをドメインに変更する
const version = "v1";
const baseURL = `https://${baseDomain}/${version}`;
// const baseURL = `http://${baseDomain}/${version}`

function createAfterSignin() {
  const afterSigninConf = axios.create({
    baseURL: baseURL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "https://itamasterapi.herokuapp.com",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    },
    responseType: "json",
  });

  afterSigninConf.interceptors.request.use((request) => {
    request.headers["client"] = `${window.sessionStorage.getItem("client")}`;
    request.headers["access-token"] = `${window.sessionStorage.getItem(
      "access-token"
    )}`;
    request.headers["uid"] = `${window.sessionStorage.getItem("uid")}`;
    request.headers["token-type"] = `${window.sessionStorage.getItem(
      "token-type"
    )}`;
    // // もしヘッダーに API トークンを記述するならば
    // request.headers['Authorization'] = `Bearer ${getApiToken()}`
    // // もし URL に APIトークンを増やすならば
    // request.params = request.params || {};
    // request.params.apiToken = getApiToken();
    // リクエスト内容を見るならば
    // console.dir(request)
    return request;
  });
  return afterSigninConf;
}
const afterSignin = createAfterSignin();

const beforeSignin = axios.create({
  baseURL: baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "https://itamasterapi.herokuapp.com",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST",
  },
  responseType: "json",
});

function createAfterSigninDownloadFile() {
  const afterSigninDownloadFile = axios.create({
    baseURL: baseURL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "https://itamasterapi.herokuapp.com",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET,",
    },
    responseType: "blob",
    dataType: "binary",
  });

  afterSigninDownloadFile.interceptors.request.use((request) => {
    request.headers["client"] = `${window.sessionStorage.getItem("client")}`;
    request.headers["access-token"] = `${window.sessionStorage.getItem(
      "access-token"
    )}`;
    request.headers["uid"] = `${window.sessionStorage.getItem("uid")}`;
    request.headers["token-type"] = `${window.sessionStorage.getItem(
      "token-type"
    )}`;
    return request;
  });
  return afterSigninDownloadFile;
}
const afterSigninDownloadFile = createAfterSigninDownloadFile();

function createBeforeSigninDownloadFile() {
  const beforeSigninDownloadFile = axios.create({
    baseURL: baseURL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "https://itamasterapi.herokuapp.com",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET,",
    },
    responseType: "blob",
    dataType: "binary",
  });
  return beforeSigninDownloadFile;
}
const beforeSigninDownloadFile = createBeforeSigninDownloadFile();

export {
  beforeSignin,
  afterSignin,
  beforeSigninDownloadFile,
  afterSigninDownloadFile,
};
