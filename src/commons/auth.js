import decode from "jwt-decode";
const JWT = "store_token";

const setToken = (token) => {
  // 將資料儲存至 localStorage
  localStorage.setItem(JWT, token);
};

const getToken = (token) => {
  return localStorage.getItem(JWT);
};

// 判斷是否已經登入
const isLogin= () =>{
  const jwToken = getToken();
  return !!jwToken
}


const getUser = () => {
  const jwToken = getToken();
  if (isLogin()) {
    // decode解碼
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};

// 全域變量
global.auth = {
  setToken,
  getUser
};
