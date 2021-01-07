const JWT = "store_token";

const setToken = (token) => {
  // 將資料儲存至 localStorage
  localStorage.setItem(JWT, token);
};

// 全域變量
global.auth = {
  setToken,
};
